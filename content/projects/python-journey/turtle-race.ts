import type { Project } from "@/lib/types";

export const turtleRace: Project = {
  slug: "turtle-race",
  title: "Turtle Race",
  category: "python-journey",
  status: "Learning Project",
  summary:
    "A Turtle graphics racing game where multiple turtles compete in a randomly generated race and the player bets on which turtle will win.",
  problem:
    "Create an interactive race simulation that accepts the player's bet, animates multiple turtles moving at random speeds, determines the winner, and reports whether the player's prediction was correct.",
  architecture:
    "Built with Python's Turtle module, using multiple Turtle objects stored in a list. A continuous game loop advances each turtle by a random distance until one crosses the finish line, while user input is collected through a Turtle screen dialog.",
  lessons:
    "Learned how to create and manage multiple object instances, organize objects within lists, simulate randomness in animations, and build event-driven graphical applications using object-oriented programming.",
  stack: ["Python", "Turtle", "Object-Oriented Programming"],
  githubUrl: "https://github.com/Sadiq-Nagoda",
  repoState: "source-available",
// turtle-race.ts
  screenshots: {
    state: "available",
    images: ["/images/projects/turtle-race/1.png"],
  },
};