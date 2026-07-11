import type { ExperienceEntry, Certification } from "@/lib/types";

// Academic level intentionally omitted below: the uploaded résumé states
// Level 400, prior conversation confirmed Level 300 — genuinely unresolved
// (Blueprint Section 3 / PROJECT_STATE.md Open Issues #1). Everything else
// in this entry is undisputed and safe to publish as-is.
export const education = {
  institution: "Al-Istiqama University Sumaila (AUSU)",
  degree: "B.Sc. Software Engineering",
  status: "In progress",
  cgpa: "4.63 / 5.00 across 72 credit units",
};

export const experience: ExperienceEntry[] = [
  {
    role: "SIWES Trainee (Industrial Attachment)",
    org: "AI Hub, Kano",
    period: "Current",
    bullets: [
      "Self-directed placement in Python and applied machine learning, in place of standard coursework, Monday through Thursday.",
      "Maintains a public logbook covering Python fundamentals through object-oriented programming, file handling, Pandas, and AWS AI/ML fundamentals.",
      "Building AAIS, a RAG-based university assistant, as the placement's primary project.",
    ],
  },
];

// Only the two clean, unambiguous entries from the uploaded résumé are
// published. Two further lines were too garbled to confirm confidently
// (Blueprint Section 3, flag 2) and are held out rather than guessed at.
export const certifications: Certification[] = [
  { name: "AI/ML Fundamentals", issuer: "Amazon Web Services (AWS)", year: "2025", status: "confirmed" },
  { name: "100 Days of Python — Angela Yu", issuer: "Udemy", year: "In progress", status: "in-progress" },
];

export const skills = {
  Languages: ["Python", "JavaScript", "Java (learning)", "HTML", "CSS"],
  "Frameworks & Libraries": ["Flask", "SQLAlchemy", "Pandas", "ReportLab"],
  Tools: ["Git", "GitHub", "VS Code"],
  "Spoken Languages": ["English", "Hausa", "Arabic"],
};
