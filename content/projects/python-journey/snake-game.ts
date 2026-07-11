import type { Project } from "@/lib/types";

export const snakeGame: Project = {
  slug: "snake-game",
  title: "Snake Game",
  category: "python-journey",
  status: "Learning Project",
  summary: "A classic Snake implementation using Python's Turtle graphics, built with an object-oriented structure.",
  problem:
    "An exercise in object-oriented design: modeling the snake, food, and scoreboard as separate classes rather than one script tracking everything in loose variables.",
  architecture:
    "Turtle graphics for rendering, with distinct classes for the snake body, food spawning, and score tracking, coordinated by a main game loop.",
  lessons:
    "Splitting the game into classes made collision detection and growth logic much easier to reason about than a single-file, single-function version would have been.",
  stack: ["Python", "Turtle"],
  githubUrl: "https://github.com/Sadiq-Nagoda",
  repoState: "source-available",
  screenshots: { state: "pending" },
};
