import type { Project } from "@/lib/types";

export const aais: Project = {
  slug: "aais",
  title: "AAIS — Intelligent University Assistant System",
  category: "flagship",
  status: "In Development",
  summary:
    "A RAG-based assistant that answers student questions from AUSU's own structured knowledge base, built on Flask and the Claude API.",
  problem:
    "At AUSU, answers to common student questions — deadlines, procedures, department contacts — are scattered across group chats, notice boards, and word of mouth. Nothing wrong with that as a stopgap, but it means the same questions get asked repeatedly, and the answers aren't always consistent. AAIS is an attempt to put one structured, queryable source behind those questions.",
  constraints:
    "The hard constraint is accuracy: an assistant that answers confidently but wrongly is worse than no assistant. That ruled out just wiring a chat model up to answer freely — it needs to be grounded in real, verified university information, not generated from general knowledge.",
  architecture:
    "The knowledge base is a structured JSON file (university.json) covering real AUSU information — departments, procedures, key dates. A Flask backend retrieves the relevant entries for a given question and passes them to the Claude API as context, so the model answers from what's actually in the knowledge base rather than improvising. The current frontend is a static HTML/CSS/JS prototype, built first so the interaction model could be tested before the backend was fully wired up.",
  tradeoffs:
    "Building the frontend prototype before the backend was solid meant some early rework once the real retrieval logic was in place — the prototype's assumptions about response shape didn't all survive contact with the actual API. That was a reasonable trade for being able to test the interaction quickly, but it's the kind of thing I'd sequence differently on the next project.",
  lessons:
    "The retrieval step turned out to matter more than the generation step — a well-chosen set of knowledge base entries makes the model's job almost mechanical, while a poor match makes even a good model produce a vague or wrong answer. Most of the real engineering here has been in structuring the knowledge base well, not in prompting.",
  futureWork:
    "Expanding the knowledge base's coverage, tightening the retrieval logic, and moving from prototype to something deployable are the next steps, ahead of the public 60-day commitment's deadline.",
  stack: ["Python", "Flask", "Claude API", "JSON", "HTML", "CSS", "JavaScript"],
  githubUrl: "https://github.com/Sadiq-Nagoda",
  repoState: "in-development",
  // aais.ts
  screenshots: {
    state: "available",
    images: ["/images/projects/aais/1.png"],
},
  timeline: "In development — public deadline August 25, 2026",
};
