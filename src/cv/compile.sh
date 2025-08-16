#!/usr/bin/env bash
set -uo pipefail
cd "$(dirname "$0")" || exit 1

# Constants
ROOT_DIR="../.."
INPUT_CV_TEX_FILE="cv.tex"
INPUT_CL_TEX_FILE="cover-letter.tex"
OUPUT_CV_TEX_FILE="cv-replaced.tex"
OUPUT_CL_TEX_FILE="cover-letter-replaced.tex"
CV_PDF_FILE="${ROOT_DIR}/public/docs/Matthew_Beardwell_CV.pdf"
CL_PDF_FILE="${ROOT_DIR}/public/docs/Matthew_Beardwell_Cover_Letter.pdf"

ENDPOINT="https://tryhackme.com/api/v2/public-profile?username=mbeardwell"
COLORS_FILE="${ROOT_DIR}/src/styles/colors.json"

# Install dependencies
if ! command -v xelatex &>/dev/null; then
    sudo apt install -y texlive-xetex
fi

if ! command -v convert &>/dev/null; then
    sudo apt install -y imagemagick
fi

# Post-run cleanup
cleanup() {
    rm -f \
        ./*.aux \
        ./*.log \
        ./*.out \
        ./*.fdb_latexmk \
        ./*.fls \
        "${OUPUT_CV_TEX_FILE}" \
        "${OUPUT_CL_TEX_FILE}"

    rm "${OUPUT_CV_TEX_FILE%.*}.pdf" 2>/dev/null
    rm "${OUPUT_CL_TEX_FILE%.*}.pdf" 2>/dev/null
}

trap cleanup EXIT

# Fetch stats
if ! stats_json=$(curl -sf "${ENDPOINT}"); then
    echo "Error: failed to fetch TryHackMe stats"
    exit 0 # hack to prevent deployment failure on CV compilation failure
fi
percentage=$(echo "${stats_json}" | jq ".data.topPercentage")
badges=$(echo "${stats_json}" | jq ".data.badgesNumber")
rooms=$(echo "${stats_json}" | jq ".data.completedRoomsNumber")
hours=$(python3 -c "print(int(round((${rooms} + 13) * 0.769,-1)))")
today=$(date +"%d/%m/%Y")

# Fetch colours
color_surface=$(jq -r ".surface" "${COLORS_FILE}" | sed "s/^#//")
color_accent=$(jq -r ".accent" "${COLORS_FILE}" | sed "s/^#//")

# Inject stats and colours into .tex
injectVars() {
    sed -e "s|__PERCENTAGE__|${percentage}|" \
    -e "s|__BADGES__|${badges}|" \
    -e "s|__ROOMS__|${rooms}|" \
    -e "s|__HOURS__|${hours}|" \
    -e "s|__UPDATED__|${today}|" \
    -e "s|__SURFACE__|${color_surface}|" \
    -e "s|__ACCENT__|${color_accent}|" \
    $1 > $2
}

injectVars "${INPUT_CV_TEX_FILE}" "${OUPUT_CV_TEX_FILE}"
injectVars "${INPUT_CL_TEX_FILE}" "${OUPUT_CL_TEX_FILE}"

# Output pdf
compile() {
    (xelatex -interaction=nonstopmode $1) || {
    echo "Error: xelatex failed to compile LaTeX on $1"
    exit 1
}    
}

compile "${OUPUT_CV_TEX_FILE}"
compile "${OUPUT_CL_TEX_FILE}"

sudo sed -i '/disable ghostscript format types/,+6d' /etc/ImageMagick-6/policy.xml # enable pdf -> png conversion | from https://stackoverflow.com/a/69535567
convert -density 300 "${CV_PDF_FILE}" -background white -alpha remove -alpha off "${CV_PDF_FILE%.*}.png"

mv "${OUPUT_CV_TEX_FILE%.*}.pdf" "${CV_PDF_FILE}"
mv "${OUPUT_CL_TEX_FILE%.*}.pdf" "${CL_PDF_FILE}"
