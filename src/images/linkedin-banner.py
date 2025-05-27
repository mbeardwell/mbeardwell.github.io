import json
from pathlib import Path

import matplotlib.font_manager as fm
from PIL import Image, ImageDraw, ImageFont, ImageColor, ImageFilter

W, H = 1584, 396
PADDING = 80

FONT = "DejaVu Sans"
FONT_LARGE = 48
FONT_MEDIUM = 28

ROOT = Path("../..")
OUTDIR = ROOT / "public" / "images"
COLORS_FILE = Path("..") / "styles" / "colors.json"
BG_FILE = ROOT / "public" / "images" / "banner-bg.png"

with open(COLORS_FILE) as f:
    colours = json.load(f)

font_path = fm.findfont(fm.FontProperties(family=FONT))
font_large = ImageFont.truetype(font_path, FONT_LARGE)
font_medium = ImageFont.truetype(font_path, FONT_MEDIUM)

# Background
bg = Image.open(BG_FILE).convert("RGBA").resize((W, H)).filter(ImageFilter.GaussianBlur(radius=6))

# Overlay
bg_rgb = ImageColor.getrgb(colours["surface"])  # (r, g, b)
bg_rgba = (*bg_rgb, 200)
overlay = Image.new("RGBA", (W, H), bg_rgba)
img = Image.alpha_composite(bg, overlay)
draw = ImageDraw.Draw(img)

lines = [
    ("100+ Labs Completed", font_large, colours["accent"], 80),
    ("Security+ (In Progress)", font_medium, colours["content"], 180),
    ("Automating Blue Team Operations", font_medium, colours["content"], 240),
]

for text, font, fill, y in lines:
    x = W - PADDING - draw.textlength(text, font=font)
    draw.text((x, y), text, font=font, fill=fill)
    
# Divider
title_text, title_font, _, title_y = lines[0]
title_width = draw.textlength(title_text, font=title_font)
line_y, line_padding = 140, 6
line_start = W - PADDING - title_width
line_end = W - PADDING

draw.line(
    [(line_start, line_y + line_padding), (line_end, line_y + line_padding)],
    fill=colours["accent"],
    width=3
)

# Output the banner
output = OUTDIR / "linkedin_banner.png"
img.save(output)
