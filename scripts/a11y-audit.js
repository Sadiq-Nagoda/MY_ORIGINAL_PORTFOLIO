const { JSDOM } = require("jsdom");
const axeSource = require("fs").readFileSync(
  require.resolve("axe-core/axe.min.js"),
  "utf8"
);

const pages = [
  "/",
  "/about",
  "/projects",
  "/projects/aais",
  "/journal",
  "/resume",
  "/contact",
  "/privacy",
];

async function auditPage(path) {
  const res = await fetch(`http://localhost:3100${path}`);
  const html = await res.text();
  const dom = new JSDOM(html, {
    runScripts: "outside-only",
    url: `http://localhost:3100${path}`,
  });
  dom.window.eval(axeSource);
  const results = await dom.window.axe.run(dom.window.document, {
    runOnly: ["wcag2a", "wcag2aa"],
  });
  return { path, violations: results.violations };
}

(async () => {
  let totalViolations = 0;
  for (const path of pages) {
    const { violations } = await auditPage(path);
    console.log(`\n=== ${path} ===`);
    if (violations.length === 0) {
      console.log("No WCAG 2 A/AA violations found.");
    } else {
      totalViolations += violations.length;
      for (const v of violations) {
        console.log(`[${v.impact}] ${v.id}: ${v.help} (${v.nodes.length} node(s))`);
      }
    }
  }
  console.log(`\n\nTOTAL VIOLATIONS ACROSS ALL PAGES: ${totalViolations}`);
})();
