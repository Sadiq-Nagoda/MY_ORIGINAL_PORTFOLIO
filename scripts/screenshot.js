const { chromium } = require("playwright");

const pages = ["/", "/about", "/projects", "/projects/aais", "/contact", "/resume"];
const viewports = {
  desktop: { width: 1440, height: 900 },
  mobile: { width: 390, height: 844 },
};

async function scrollThroughPage(page) {
  await page.evaluate(async () => {
    const scrollHeight = document.body.scrollHeight;
    const step = 250;
    for (let y = 0; y < scrollHeight; y += step) {
      window.scrollTo(0, y);
      await new Promise((r) => setTimeout(r, 120));
    }
    window.scrollTo(0, 0); // return to top before the screenshot itself
    await new Promise((r) => setTimeout(r, 200));
  });
}

(async () => {
  const browser = await chromium.launch();

  for (const [vpName, vp] of Object.entries(viewports)) {
    const context = await browser.newContext({ viewport: vp });
    const page = await context.newPage();
    for (const path of pages) {
      await page.goto(`http://localhost:3100${path}`, { waitUntil: "networkidle" });
      // Simulate a real user scrolling down the page once, so
      // whileInView reveals actually trigger the way they would for an
      // actual visitor, before capturing — a naive fullPage screenshot
      // does NOT reliably do this on its own (confirmed during review).
      await scrollThroughPage(page);
      const name = path === "/" ? "home" : path.replace(/\//g, "_").slice(1);
      await page.screenshot({
        path: `/home/claude/screenshots/${vpName}-${name}.png`,
        fullPage: vpName === "desktop",
      });
      console.log(`Captured ${vpName}-${name}.png`);
    }
    await context.close();
  }

  await browser.close();
})();
