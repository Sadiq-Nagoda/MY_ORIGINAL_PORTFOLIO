import type { Project } from "@/lib/types";

export const snakeGame: Project = {
  slug: "snake-game",
  title: "Snake Game",
  category: "python-journey",
  status: "Learning Project",
  summary:
    "A classic Snake game built with Python's Turtle graphics, featuring smooth movement, food collection, score tracking, and object-oriented design.",
  problem:
    "Develop a playable Snake game where the snake moves continuously, grows after eating food, detects collisions with walls and its own body, and keeps track of the player's score.",
  architecture:
    "Organized into separate classes for the Snake, Food, and Scoreboard, all coordinated by a main game loop. Turtle graphics handles rendering, while collision detection and movement logic are encapsulated within their respective classes.",
  lessons:
    "Learned how object-oriented programming improves game development by separating responsibilities into reusable classes, simplifying collision detection, animation, state management, and overall code organization.",
  stack: ["Python", "Turtle", "Object-Oriented Programming"],
  githubUrl: "https://github.com/Sadiq-Nagoda",
  repoState: "source-available",
// snake-game.ts
  screenshots: {
    state: "available",
    images: ["/images/projects/snake-game/1.png"],
  },
};