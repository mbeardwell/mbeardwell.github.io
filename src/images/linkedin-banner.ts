import puppeteer, { Browser, Page } from "puppeteer";
import sharp from "sharp";
import path from "path";
import colors from "@styles/colors.json";

const [W, H]: [number, number] = [1584, 396];

const ROOT_DIR: string = "../..";
const OUT_DIR: string = `${ROOT_DIR}/public/images`;
const BG_PATH = `${ROOT_DIR}/public/images/banner-bg.png`;
const HTML_PATH: string = path.join(process.cwd(), "linkedin-banner.html");
const CSS_PATH: string = path.join(process.cwd(), `${ROOT_DIR}/dist/temp.css`);

// Background
const bgImage: Buffer<ArrayBufferLike> = await sharp(BG_PATH)
  .resize(W, H)
  .blur(6)
  .toBuffer();

const bgSurface: Buffer<ArrayBufferLike> = await sharp({
  create: {
    width: W,
    height: H,
    channels: 4,
    background: colors["surface"] + "BB",
  },
})
  .png()
  .toBuffer();

// Overlay
const browser: Browser = await puppeteer.launch({
  headless: true,
  dumpio: true,
});
const page: Page = await browser.newPage();
await page.setViewport({ width: W, height: H });
await page.goto(`file://${HTML_PATH}`, { waitUntil: "load", timeout: 5000 });
await page.addStyleTag({ path: CSS_PATH });
const textContent: Buffer = Buffer.from(
  await page.screenshot({
    omitBackground: true,
    clip: { x: 0, y: 0, width: W, height: H },
  })
);

// Output combined layers
await sharp(bgImage)
  .composite([
    { input: bgSurface, blend: "over" },
    { input: textContent, blend: "over" },
  ])
  .toFile(`${OUT_DIR}/linkedin-banner.png`);

await browser.close();
