import type { Project } from "@/lib/types";

export const usStatesGame: Project = {
  slug: "us-states-game",
  title: "U.S. States Game",
  category: "python-journey",
  status: "Learning Project",
  summary:
    "An interactive geography quiz that challenges players to name all 50 U.S. states while displaying correct answers on a map using Python's Turtle graphics and Pandas.",
  problem:
    "Create an educational game that accepts state names from the user, validates them against a dataset, displays correct guesses at their corresponding map locations, and exports any missed states for future study.",
  architecture:
    "Combines Turtle graphics for the map interface with Pandas to read and process state coordinate data from a CSV file. User input is validated against the dataset, and correctly guessed states are rendered on the map while missing states are saved to a new CSV file.",
  lessons:
    "Learned how to use the Pandas library for data processing, integrate datasets into graphical applications, automate CSV reading and writing, and combine file handling with object-oriented program design.",
  stack: ["Python", "Pandas", "Turtle", "CSV"],
  githubUrl: "https://github.com/Sadiq-Nagoda",
  repoState: "source-available",
// us-states-game.ts
  screenshots: {
    state: "available",
    images: ["/images/projects/us-states-game/1.png"],
  },
};