import type { Project } from "@/lib/types";

export const resultManagementSystem: Project = {
  slug: "result-management-system",
  title: "Result Management System",
  category: "major",
  status: "Shipped",
  summary:
    "Two related systems — one for a secondary school, one adapted for university-level results — for computing and issuing results against Nigeria's 5-point grading scale.",
  problem:
    "Manual result computation and PDF report-card generation is slow and error-prone at any real scale — a class of even a few dozen students turns into a lot of repetitive, mistake-prone arithmetic once you're computing grades, averages, and positions by hand.",
  constraints:
    "Grading logic has to match Nigeria's 5-point scale exactly, and the output has to be a real, presentable PDF report — not just a spreadsheet — since that's what schools actually issue to students and parents.",
  architecture:
    "Both systems share the same core: a Flask backend, Pandas for the grading computation itself (averages, positions, grade boundaries), and ReportLab to generate the final PDF report cards. The secondary-school version came first, built around subjects and terms. Adapting it for university-level results meant reworking the data model around courses and credit units rather than simple per-subject scores — a real change to the underlying structure, not a cosmetic one, since credit-weighted averages don't reduce to the same arithmetic as flat subject averages.",
  tradeoffs:
    "Reusing the first system's grading and PDF-generation logic saved real time on the second build, but the credit-unit weighting meant that logic couldn't just be copied — it had to be generalized to handle both cases correctly, which took longer than assuming a straight port would.",
  lessons:
    "This was a useful lesson in the difference between 'similar problem' and 'same problem' — the two systems look alike from the outside, but the university version's weighting rules meant the actual computation had to be rebuilt more carefully than reused wholesale.",
  futureWork:
    "Generalizing the shared grading core further so a future adaptation — a different grading scale, for instance — wouldn't require touching the PDF-generation layer at all.",
  stack: ["Python", "Flask", "Pandas", "ReportLab", "SQL"],
  githubUrl: "https://github.com/Sadiq-Nagoda",
  repoState: "source-available",
// result-management-system.ts
  screenshots: {
    state: "available",
    images: ["/images/projects/result-management-system/1.png"],
},
  timeline: "Secondary-school version built first; university-adapted version followed",
};
