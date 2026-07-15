import type { Project } from "@/lib/types";

export const numberGuessingGame: Project = {
  slug: "number-guessing-game",
  title: "Number Guessing Game",
  category: "python-journey",
  status: "Learning Project",
  summary:
    "A command-line game where players attempt to guess a randomly generated number with limited attempts based on the selected difficulty level.",
  problem:
    "Create an interactive game that generates a random number, provides feedback after each guess, manages remaining attempts, and ends when the player guesses correctly or runs out of chances.",
  architecture:
    "Uses Python's random module to generate the secret number while game logic is divided into reusable functions for handling difficulty selection, validating guesses, tracking attempts, and controlling the gameplay loop.",
  lessons:
    "Learned how variable scope affects program behavior, how local and global variables interact, and how functions can simplify state management while building a complete command-line game.",
  stack: ["Python"],
  githubUrl: "https://github.com/Sadiq-Nagoda",
  repoState: "source-available",
  screenshots: { state: "pending" },
};