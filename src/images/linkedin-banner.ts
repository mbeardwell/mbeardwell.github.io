import puppeteer, { Browser, Page } from "puppeteer";
import sharp from "sharp";
import path from "path";
import { readFileSync } from "fs";
import colors from "@styles/colors.json";

const [W, H]: [number, number] = [1584, 396];
const ROOT_DIR: string = "../..";
const OUT_DIR: string = `${ROOT_DIR}/public/images`;
const HTML_PATH: string = path.join(process.cwd(), "linkedin-banner.html");
const CSS_PATH: string = path.join(process.cwd(), `${ROOT_DIR}/dist/temp.css`);
const LOGO_PATH: string = path.join(process.cwd(), `${ROOT_DIR}/public/images/icons/personal-logo.svg`);

function buildHtml(): string {
  const logo = readFileSync(LOGO_PATH, "utf-8");
  const template = readFileSync(HTML_PATH, "utf-8");
  return template
    .replace(/\{\{LOGO\}\}/g, logo)
    .replace(/\{\{COLOR:(\w+)\}\}/g, (_, key) => colors[key as keyof typeof colors] ?? "");
}

const bg: Buffer = await sharp({
  create: {
    width: W,
    height: H,
    channels: 4,
    background: colors["surface"],
  },
})
  .png()
  .toBuffer();

// Overlay
const browser: Browser = await puppeteer.launch({ headless: true, dumpio: true });
const page: Page = await browser.newPage();
await page.setViewport({ width: W, height: H });
await page.setContent(buildHtml(), { waitUntil: "load" });
await page.addStyleTag({ path: CSS_PATH });

const textContent: Buffer = Buffer.from(
  await page.screenshot({
    omitBackground: true,
    clip: { x: 0, y: 0, width: W, height: H },
  })
);

await sharp(bg)
  .composite([{ input: textContent, blend: "over" }])
  .toFile(`${OUT_DIR}/linkedin-banner.png`);

await browser.close();
