import type { Project } from "@/lib/types";

export const pongGame: Project = {
  slug: "pong-game",
  title: "Pong Game",
  category: "python-journey",
  status: "Learning Project",
  summary:
    "A two-player Pong game built with Python's Turtle graphics, featuring smooth paddle movement, realistic ball physics, score tracking, and object-oriented design.",
  problem:
    "Develop a classic Pong game where two players control paddles to bounce a moving ball, detect collisions with walls and paddles, update scores when a player misses the ball, and gradually increase the game's difficulty.",
  architecture:
    "The application is structured using separate Paddle, Ball, and Scoreboard classes coordinated by a central game loop. Turtle graphics handles rendering and keyboard events, while each class encapsulates its own movement, collision, and scoring behavior.",
  lessons:
    "Learned how to coordinate multiple interacting objects, implement collision detection, manage animation timing with the game loop, and apply object-oriented programming principles to build a complete arcade-style game.",
  stack: ["Python", "Turtle", "Object-Oriented Programming"],
  githubUrl: "https://github.com/Sadiq-Nagoda",
  repoState: "source-available",
// pong-game.ts
  screenshots: {
    state: "available",
    images: ["/images/projects/pong-game/1.png"],
  },
};