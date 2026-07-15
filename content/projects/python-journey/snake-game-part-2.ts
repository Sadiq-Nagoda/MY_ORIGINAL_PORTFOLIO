import type { Project } from "@/lib/types";

export const snakeGamePartTwo: Project = {
  slug: "snake-game-part-2",
  title: "Snake Game (Part 2)",
  category: "python-journey",
  status: "Learning Project",
  summary:
    "An enhanced version of the Snake game that introduces persistent high-score tracking by saving game data to a local file.",
  problem:
    "Extend the Snake game to remember the player's highest score across multiple sessions without resetting it whenever the program is closed.",
  architecture:
    "Builds upon the object-oriented Snake, Food, and Scoreboard classes from Day 20. The Scoreboard class uses Python's file handling capabilities to read and update a local text file whenever a new high score is achieved.",
  lessons:
    "Learned how to combine object-oriented programming with file handling, enabling applications to persist data between sessions while keeping the code modular and maintainable.",
  stack: ["Python", "Turtle", "Object-Oriented Programming", "File I/O"],
  githubUrl: "https://github.com/Sadiq-Nagoda",
  repoState: "source-available",
  // snake-game-part-2.ts
  screenshots: {
    state: "available",
    images: ["/images/projects/snake-game-part-2/1.png"],
  },
};