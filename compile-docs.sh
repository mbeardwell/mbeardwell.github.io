#!/usr/bin/env bash
set -uo pipefail
cd "$(dirname "$0")" || exit 1

# Constants
ROOT_DIR="."
CERTS_PATH="${ROOT_DIR}/public/docs/certs"
ENDPOINT="https://thm-mbeardwell.matthewbeardwell.workers.dev" # proxy for tryhackme.com/api/v2/public-profile?username=mbeardwell
COLORS_FILE="${ROOT_DIR}/src/styles/colors.json"
TEX_PATH="${ROOT_DIR}/src/cv"
INPUT=(cv cv-alt cover-letter cover-letter-alt) # e.g. a for a.tex input TeX file
PDF_FILENAME_ENDINGS=(CV CV_Alt Cover_Letter Cover_Letter_Alt) # e.g. CV for ".../...CV.pdf" filepath

INPUT_TEX=($(for e in ${INPUT[@]}; do echo "${TEX_PATH}/${e}.tex"; done))
OUTPUT_TEX=($(for e in ${INPUT[@]}; do echo "${TEX_PATH}/${e}-replaced.tex"; done))
OUTPUT_PDF=($(for e in ${INPUT[@]}; do echo "${TEX_PATH}/${e}-replaced.pdf"; done))
PDF_OUTPUT_PATHS=($(for e in ${PDF_FILENAME_ENDINGS[@]}; do echo "${ROOT_DIR}/public/docs/cv/Matthew_Beardwell_${e}.pdf"; done))

# Post-run cleanup
cleanup() {
    rm -f "${TEX_PATH}"/*.aux "${TEX_PATH}"/*.log "${TEX_PATH}"/*.out "${TEX_PATH}"/*.fdb_latexmk "${TEX_PATH}"/*.fls
    
    for i in "${!INPUT[@]}"; do
        rm -f "${OUTPUT_TEX[$i]}" 2>/dev/null
        rm -f "${OUTPUT_PDF[$i]}" 2>/dev/null
    done
}

trap cleanup EXIT

# Install dependencies
if ! command -v xelatex &>/dev/null; then sudo apt install -y texlive-xetex; fi
if ! command -v convert &>/dev/null; then sudo apt install -y imagemagick; fi
sudo sed -i '/disable ghostscript format types/,+6d' /etc/ImageMagick-6/policy.xml # enable pdf -> png conversion | from https://stackoverflow.com/a/69535567

# Fetch stats
stats_json=""
for i in $(seq 1 10); do
    if stats_json=$(curl -sf "${ENDPOINT}"); then
        break
    fi
    echo "Warn: Attempt $i failed to fetch TryHackMe stats, retrying in 5s..."
    sleep 5
done

if [ -z "$stats_json" ]; then
    echo "Error: failed to fetch TryHackMe stats after 10 attempts"
    exit 1
fi

percentage=$(echo "${stats_json}" | jq ".data.topPercentage")
badges=$(echo "${stats_json}" | jq ".data.badgesNumber")
rooms=$(echo "${stats_json}" | jq ".data.completedRoomsNumber")
today=$(date +"%d/%m/%Y")

# Fetch colours
color_surface=$(jq -r ".surface" "${COLORS_FILE}" | sed "s/^#//")
color_accent=$(jq -r ".accent" "${COLORS_FILE}" | sed "s/^#//")

# Processing functions
injectVars() { # Inject stats and colours into .tex
    sed -e "s|__PERCENTAGE__|${percentage}|" \
    -e "s|__BADGES__|${badges}|" \
    -e "s|__ROOMS__|${rooms}|" \
    -e "s|__UPDATED__|${today}|" \
    -e "s|__SURFACE__|${color_surface}|" \
    -e "s|__ACCENT__|${color_accent}|" \
    "$1" > "$2"
}

compile() { # TeX -> PDF
    (cd "$(dirname "$1")" && xelatex -interaction=nonstopmode "$(basename "$1")") ||
    {
        echo "Error: xelatex failed to compile LaTeX on $1"
        exit 1
    }
}

# Compile TeX files and screenshot them

screenshotPDF() {
    local dpi="$1"
    local path="$2"
    convert -density "${dpi}" "${path}[0]" -background white -alpha remove -alpha off "${path%.*}.png"
}

for i in "${!INPUT[@]}"; do
    injectVars "${INPUT_TEX[$i]}" "${OUTPUT_TEX[$i]}"
    compile "${OUTPUT_TEX[$i]}"
    mv "${OUTPUT_TEX[$i]%.*}.pdf" "${PDF_OUTPUT_PATHS[$i]}"
    screenshotPDF 300 "${PDF_OUTPUT_PATHS[$i]}"
done

# Screenshot certifications
cert_paths=($(ls "${CERTS_PATH}"))
for i in "${!cert_paths[@]}"; do
    screenshotPDF 20 "${CERTS_PATH}/${cert_paths[$i]}"
done