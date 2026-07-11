import type { Project } from "@/lib/types";

export const islamiyyaManagementSystem: Project = {
  slug: "islamiyya-management-system",
  title: "Islamiyya School Management System",
  category: "major",
  status: "Validated Concept",
  summary:
    "A planned management system for Islamiyya schools, scoped through a real stakeholder interview rather than assumptions about the problem.",
  problem:
    "Islamiyya schools in northern Nigeria typically track fee collection, attendance, and Qur'an memorization progress by hand. Before writing any code, I wanted to know whether that was actually a problem worth solving, or just an assumption.",
  constraints:
    "The scope needed to come from an actual school's experience, not from guessing what a 'school management system' should generically contain.",
  architecture:
    "Not yet built. The validation step was a direct interview with a local Malam (school administrator), which confirmed three concrete pain points: fee collection tracking, attendance records, and Qur'an progress tracking — in that order of how often they came up as friction. The planned architecture is Flask and SQLAlchemy, following the same pattern as the result-management and booking systems, adapted to these three specific record types.",
  lessons:
    "Talking to one real potential user before writing code surfaced priorities I wouldn't have guessed correctly on my own — Qur'an progress tracking, for instance, mattered less in the interview than fee collection did, which wasn't my initial assumption.",
  futureWork:
    "Building the MVP around the three validated pain points, starting with fee collection since that's what came up first and most consistently.",
  stack: ["Python", "Flask", "SQLAlchemy", "SQL"],
  screenshots: { state: "pending" },
  timeline: "Validated via stakeholder interview; build planned",
};
