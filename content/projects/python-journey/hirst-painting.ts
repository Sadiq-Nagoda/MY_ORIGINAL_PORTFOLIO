import type { Project } from "@/lib/types";

export const hirstPainting: Project = {
  slug: "hirst-painting",
  title: "Hirst Painting",
  category: "python-journey",
  status: "Learning Project",
  summary:
    "A generative art project that recreates Damien Hirst-inspired dot paintings using Python's Turtle graphics and randomly selected colors.",
  problem:
    "Generate a grid of evenly spaced colored dots by combining loops, random color selection, and Turtle graphics while maintaining consistent positioning across the canvas.",
  architecture:
    "Uses the Turtle graphics module for rendering and Python's random module to choose colors from a predefined palette. Nested loops control the placement of dots row by row, producing a structured grid pattern.",
  lessons:
    "Learned how to work with external Python packages, use RGB color mode, create generative art with randomness, and apply nested loops to automate repetitive drawing tasks.",
  stack: ["Python", "Turtle", "colorgram.py"],
  githubUrl: "https://github.com/Sadiq-Nagoda",
  repoState: "source-available",
  screenshots: { state: "pending" },
};