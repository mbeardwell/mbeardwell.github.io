#!/usr/bin/env bash
set -euo pipefail
cd "$(dirname "$0")"

# Constants
ROOT_DIR="../.."
INPUT_TEX_FILE="cv.tex"
OUTPUT_TEX_FILE="cv-replaced.tex"
PDF_FILE="${ROOT_DIR}/public/cv.pdf"
ENDPOINT="https://tryhackme.com/api/v2/public-profile?username=mbeardwell"
COLORS_FILE="${ROOT_DIR}/src/styles/colors.json"

# Install dependencies
if ! command -v xelatex &>/dev/null; then
  sudo apt install -y texlive-xetex
fi

# Post-run cleanup
cleanup() {
    rm -f \
    ./*.aux \
    ./*.log \
    ./*.out \
    ./*.fdb_latexmk \
    ./*.fls \
    "${OUTPUT_TEX_FILE}"

    rm "${OUTPUT_TEX_FILE%.*}.pdf" 2>/dev/null
}

trap cleanup EXIT

# Fetch stats
stats_json=$(curl -s "${ENDPOINT}")
percentage=$(echo "${stats_json}" | jq ".data.topPercentage")
badges=$(echo "${stats_json}" | jq ".data.badgesNumber")
rooms=$(echo "${stats_json}" | jq ".data.completedRoomsNumber")
today=$(date +"%d/%m/%Y")

# Fetch colours
color_surface=$(jq -r ".surface" "${COLORS_FILE}" | sed "s/^#//")
color_accent=$(jq -r ".accent" "${COLORS_FILE}" | sed "s/^#//")

# Inject stats and colours into .tex
sed -e "s|__PERCENTAGE__|${percentage}|" \
    -e "s|__BADGES__|${badges}|" \
    -e "s|__ROOMS__|${rooms}|" \
    -e "s|__UPDATED__|${today}|" \
    -e "s|__SURFACE__|${color_surface}|" \
    -e "s|__ACCENT__|${color_accent}|" \
    "${INPUT_TEX_FILE}" >"${OUTPUT_TEX_FILE}"

# Output pdf
(xelatex -interaction=nonstopmode "${OUTPUT_TEX_FILE}") || {
    echo "Error: xelatex failed to compile LaTeX"
    exit 1
}

mv "${OUTPUT_TEX_FILE%.*}.pdf" "${PDF_FILE}"
