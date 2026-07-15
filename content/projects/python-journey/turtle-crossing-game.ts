import type { Project } from "@/lib/types";

export const turtleCrossingGame: Project = {
  slug: "turtle-crossing-game",
  title: "Turtle Crossing Game",
  category: "python-journey",
  status: "Learning Project",
  summary:
    "An arcade-style road crossing game inspired by Frogger, where the player guides a turtle across busy traffic while avoiding moving cars and progressing through increasingly difficult levels.",
  problem:
    "Build a game that generates moving traffic, detects collisions between the player and cars, increases difficulty after each successful crossing, and keeps the gameplay responsive through keyboard controls.",
  architecture:
    "Uses object-oriented programming with dedicated Player, CarManager, and Scoreboard classes coordinated by a main game loop. Turtle graphics handles rendering, while the CarManager dynamically creates and moves vehicles and the Scoreboard tracks the current level.",
  lessons:
    "Learned how to manage collections of objects, dynamically spawn game entities, increase game difficulty over time, and organize larger graphical applications using clean object-oriented design.",
  stack: ["Python", "Turtle", "Object-Oriented Programming"],
  githubUrl: "https://github.com/Sadiq-Nagoda",
  repoState: "source-available",
// turtle-crossing-game.ts
  screenshots: {
    state: "available",
    images: ["/images/projects/turtle-crossing-game/1.png"],
  },
};