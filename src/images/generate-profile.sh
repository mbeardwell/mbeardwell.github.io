#!/usr/bin/env bash
set -euo pipefail
cd "$(dirname "$0")"
if ! command -v convert &>/dev/null; then sudo apt install imagemagick; fi

# User-defined Constants
ROOT_DIR="../.."
OUTDIR_PROFILE="${ROOT_DIR}/public/images/profile"
PROFILE="${ROOT_DIR}/public/images/profile.png"
SIZES=(128 256 512)

# Create profile images
mkdir -p "${OUTDIR_PROFILE}"
for size in "${SIZES[@]}"; do
    outname="${OUTDIR_PROFILE}/profile--${size}.png"
    convert "${PROFILE}" -resize "${size}x${size}" "${outname}"
done
