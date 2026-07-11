const lighthouse = require("lighthouse").default;
const chromeLauncher = require("chrome-launcher");

const CHROME_PATH = "/opt/pw-browsers/chromium-1194/chrome-linux/chrome";
const pages = ["/", "/about", "/projects", "/projects/aais", "/contact", "/resume"];

async function auditPage(path, formFactor = "mobile") {
  const chrome = await chromeLauncher.launch({
    chromePath: CHROME_PATH,
    chromeFlags: ["--headless=new", "--no-sandbox", "--disable-gpu"],
  });

  const desktopConfig = {
    extends: "lighthouse:default",
    settings: {
      formFactor: "desktop",
      screenEmulation: { mobile: false, width: 1440, height: 900, deviceScaleFactor: 1, disabled: false },
      throttling: {
        rttMs: 40, throughputKbps: 10240, cpuSlowdownMultiplier: 1,
        requestLatencyMs: 0, downloadThroughputKbps: 0, uploadThroughputKbps: 0,
      },
    },
  };

  const options = {
    logLevel: "error",
    output: "json",
    onlyCategories: ["performance", "accessibility", "best-practices", "seo"],
    port: chrome.port,
  };

  const runnerResult = await lighthouse(
    `http://localhost:3100${path}`,
    options,
    formFactor === "desktop" ? desktopConfig : undefined
  );
  await chrome.kill();

  const { categories, audits } = runnerResult.lhr;

  const failingA11y = Object.values(audits).filter(
    (a) => a.score !== null && a.score < 1 && categories.accessibility.auditRefs.some((r) => r.id === a.id)
  );
  const failingBP = Object.values(audits).filter(
    (a) => a.score !== null && a.score < 1 && categories["best-practices"].auditRefs.some((r) => r.id === a.id)
  );
  const perfOpportunities = Object.values(audits).filter(
    (a) =>
      a.score !== null &&
      a.score < 0.9 &&
      categories.performance.auditRefs.some((r) => r.id === a.id) &&
      a.scoreDisplayMode !== "notApplicable"
  );

  return {
    path,
    performance: Math.round(categories.performance.score * 100),
    accessibility: Math.round(categories.accessibility.score * 100),
    bestPractices: Math.round(categories["best-practices"].score * 100),
    seo: Math.round(categories.seo.score * 100),
    lcp: audits["largest-contentful-paint"].displayValue,
    cls: audits["cumulative-layout-shift"].displayValue,
    tbt: audits["total-blocking-time"].displayValue,
    failingA11y: failingA11y.map((a) => `${a.id}: ${a.title}`),
    failingBestPractices: failingBP.map((a) => `${a.id}: ${a.title}`),
    perfOpportunities: perfOpportunities.map((a) => `${a.id}: ${a.title} (${a.displayValue || ""})`),
  };
}

(async () => {
  for (const path of pages) {
    try {
      const mobile = await auditPage(path, "mobile");
      const desktop = await auditPage(path, "desktop");
      console.log(JSON.stringify({ ...mobile, formFactor: "mobile" }));
      console.log(JSON.stringify({ ...desktop, formFactor: "desktop" }));
    } catch (err) {
      console.log(JSON.stringify({ path, error: err.message }));
    }
  }
})();
