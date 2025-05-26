import io
import re

import cairosvg
from PIL import Image


def _bytes_to_Image(bytes: bytes) -> Image.Image:
    """
    Convert bytes to a PIL Image object.
    """
    return Image.open(io.BytesIO(bytes)).convert("RGBA")


def _recolour_svg(svg: str, colour: str, paint: str = "fill") -> str:
    """
    Recolour the SVG.
    """
    if paint == "fill":
        svg = re.sub(r'fill="currentColor"', f'fill="{colour}"', svg)
        svg = re.sub(r"fill:currentColor", f"fill:{colour}", svg)
    elif paint == "stroke":
        svg = re.sub(r'stroke="currentColor"', f'stroke="{colour}"', svg)
        svg = re.sub(r"stroke:currentColor", f"stroke:{colour}", svg)

    return svg


def _recolour_Image(img: Image.Image, colour: str) -> Image.Image:
    """
    Recolour the PIL Image.
    """
    _, _, _, alpha = img.split()
    solid = Image.new("RGBA", img.size, colour)
    recoloured = Image.composite(solid, Image.new("RGBA", img.size), alpha)
    recoloured.putalpha(alpha)
    return recoloured


def _convert_svg_to_Image(svg: str, width: int) -> Image.Image:
    """
    Convert SVG to PIL image.
    """
    png = cairosvg.svg2png(bytestring=svg.encode("utf-8"), output_width=width)
    return _bytes_to_Image(png)


def read_svg_as_Image(
    path: str, colour: str, size: int, paint: str = "fill"
) -> Image.Image:
    """
    Read an SVG file, recolour it, and convert it to a PIL image.
    """
    with open(path, "r", encoding="utf-8") as f:
        svg = f.read()

    svg = _recolour_svg(svg, colour, paint=paint)
    return _convert_svg_to_Image(svg, size).resize((size, size))


def read_png_as_Image(path: str, colour: str, size: int) -> Image.Image:
    """
    Read a PNG file, recolour it, and return the image.
    """
    with open(path, "rb") as f:
        png = f.read()

    orig = _bytes_to_Image(png).resize((size, size))
    return _recolour_Image(orig, colour)
