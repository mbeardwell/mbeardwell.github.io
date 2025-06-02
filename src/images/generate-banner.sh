#!/usr/bin/env bash
set -euo pipefail
cd "$(dirname "$0")"

# User-defined Constants
ROOT_DIR="../.."
TEMP_CSS="${ROOT_DIR}/dist/temp.css"

# Create LinkedIn banner
npx tailwindcss \
    -c "${ROOT_DIR}/tailwind.config.js" \
    -i linkedin-banner.css \
    -o "${TEMP_CSS}" \
    --content linkedin-banner.html

npx tsx linkedin-banner.ts

rm -f "${TEMP_CSS}"
