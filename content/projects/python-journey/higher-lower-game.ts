import type { Project } from "@/lib/types";

export const higherLowerGame: Project = {
  slug: "higher-lower-game",
  title: "Higher Lower Game",
  category: "python-journey",
  status: "Learning Project",
  summary:
    "A command-line guessing game where players compare the follower counts of two social media accounts and predict which one has more followers.",
  problem:
    "Build an engaging game that randomly selects two accounts, accepts the player's guess, tracks the score across consecutive rounds, and ends when an incorrect prediction is made.",
  architecture:
    "Uses a dataset of account information, helper functions to format account details and compare follower counts, and a main game loop that replaces the losing account while preserving the winner for the next round.",
  lessons:
    "Learned how to organize larger programs with reusable functions, work with lists and dictionaries as datasets, manage game state across iterations, and create a smooth user experience through clean program flow.",
  stack: ["Python"],
  githubUrl: "https://github.com/Sadiq-Nagoda",
  repoState: "source-available",
  screenshots: { state: "pending" },
};