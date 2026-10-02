import path from "node:path";
import { pathToFileURL } from "node:url";

import { chromium } from "playwright";

const root = process.cwd();
const flyerBase = "fsu-uic-imwut-ubicomp-2026-card-v13";
const htmlPath = path.join(root, "assets", "flyers", `${flyerBase}.html`);
const pdfPath = path.join(root, "assets", "flyers", `${flyerBase}.pdf`);

const browser = await chromium.launch({ headless: true });

try {
  const page = await browser.newPage();
  await page.goto(pathToFileURL(htmlPath).href, { waitUntil: "networkidle" });
  await page.evaluate(() => document.fonts.ready);
  await page.emulateMedia({ media: "print" });
  await page.pdf({
    path: pdfPath,
    printBackground: true,
    preferCSSPageSize: true,
    tagged: true,
    margin: { top: 0, right: 0, bottom: 0, left: 0 },
  });
} finally {
  await browser.close();
}
