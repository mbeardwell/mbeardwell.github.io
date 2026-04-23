#!/usr/bin/env bash
set -uo pipefail
cd "$(dirname "$0")" || exit 1

# Constants
ROOT_DIR="../.."
CERTS_PATH="${ROOT_DIR}/public/docs/certs"
OUT_DIR="${ROOT_DIR}/public/images/certs"
DPI=150

screenshotPDF() {
	local dpi=$1
	local path=$2
	convert -density "$dpi" "${path}[0]" -background white -alpha remove -alpha off "${path%.*}.png"
}

cert_paths=($(ls "${CERTS_PATH}"))
for i in "${!cert_paths[@]}"; do
	screenshotPDF $DPI "${CERTS_PATH}/${cert_paths[$i]}"
done

find "${CERTS_PATH}" -name "*.png" -exec mv {} "${OUT_DIR}" \;


