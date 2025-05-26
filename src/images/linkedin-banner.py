import matplotlib.font_manager as fm
from PIL import Image, ImageDraw, ImageFont
from utils import read_svg_as_Image, read_png_as_Image

W, H = 1584, 396
PADDING = 80

FONT = "Source Sans Pro"
FONT_LARGE = 48
FONT_MEDIUM = 32

import json

with open("../styles/colors.json") as f:
    colours = json.load(f)

font_path = fm.findfont(fm.FontProperties(family=FONT))
font_large = ImageFont.truetype(font_path, FONT_LARGE)
font_medium = ImageFont.truetype(font_path, FONT_MEDIUM)

lines = [
    ("100+ Labs Completed", font_large, colours["accent"], 100),
    ("Security+ (In Progress)", font_medium, colours["content"], 170),
    ("Automating Blue Team Ops", font_medium, colours["content"], 220),
]

# Apply background texture
bg_pattern = (
    Image.open("cybersecurity-bg.png")
    .convert("RGBA")
    .resize((W, H), resample=Image.LANCZOS)
)
bg_colour = Image.new("RGBA", (W, H), color=colours["surface"])
img = Image.blend(bg_colour, bg_pattern, 0.35)
draw = ImageDraw.Draw(img)

for text, font, fill, y in lines:
    x = W - PADDING - draw.textlength(text, font=font)
    draw.text((x, y), text, font=font, fill=fill)

# Output the banner
output = "linkedin_banner.png"
img.save(output)
