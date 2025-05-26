#!/usr/bin/env bash
set -euo pipefail
cd "$(dirname "$0")"
if ! command -v convert &> /dev/null; then sudo apt install imagemagick; fi

# User-defined Constants
ROOT_DIR="../.."
COLORS="${ROOT_DIR}/src/styles/colors.json"
OUT_DIR_PROFILE="${ROOT_DIR}/public/images/profile"
OUT_DIR_BG="${OUT_DIR_PROFILE}/background"
SIZES=(128 256 512)

SURFACE=$(jq -r ".surface" "${COLORS}")
ACCENT=$(jq -r ".accent" "${COLORS}")

mkdir -p "${OUT_DIR_PROFILE}"
mkdir -p "${OUT_DIR_BG}"

for size in "${SIZES[@]}"; do
    # Create profile background images
    bg_surface="${OUT_DIR_BG}/surface-${size}.png"
    bg_accent="${OUT_DIR_BG}/accent-${size}.png"
    bg_gradient="${OUT_DIR_BG}/gradient-${size}.png"

    convert -size "${size}x${size}" radial-gradient:"${ACCENT}-${SURFACE}" "${bg_gradient}"
    convert -size "${size}x${size}" xc:"${SURFACE}" "${bg_surface}"
    convert -size "${size}x${size}" xc:"${ACCENT}" "${bg_accent}"

    # Create profile images
    for base in "${bg_gradient}" "${bg_surface}" "${bg_accent}"; do
        base_name=$(basename "${base%.*}")
        convert "${base}" \( workspace-final.png -resize "${size}x${size}" \) -gravity center -composite \
            "${OUT_DIR_PROFILE}/${base_name}-profile.png"
    done
done

# Create LinkedIn banner
[ ! -d "venv" ] && python3 -m venv venv
source venv/bin/activate
pip install pillow cairosvg matplotlib
python3 linkedin-banner.py
deactivate
