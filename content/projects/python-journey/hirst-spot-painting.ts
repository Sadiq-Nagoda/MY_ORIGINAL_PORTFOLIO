import type { Project } from "@/lib/types";

export const hirstSpotPainting: Project = {
  slug: "hirst-spot-painting",
  title: "Hirst Spot Painting Recreation",
  category: "python-journey",
  status: "Learning Project",
  summary:
    "An algorithmic recreation of Damien Hirst's spot paintings using Turtle graphics and randomized color selection.",
  problem:
    "A generative-art exercise: reproduce a visual pattern through rules and randomness rather than by drawing it directly.",
  architecture:
    "Turtle graphics draws a grid of evenly spaced dots, with color chosen randomly from a fixed palette for each one.",
  lessons:
    "A good example of how a visually rich result can come from a small amount of logic — the complexity is in the grid and randomization, not in the drawing code itself.",
  stack: ["Python", "Turtle"],
  githubUrl: "https://github.com/Sadiq-Nagoda",
  repoState: "source-available",
  screenshots: { state: "pending" },
};
