import type { Project } from "@/lib/types";

export const blackjack: Project = {
  slug: "blackjack",
  title: "Blackjack",
  category: "python-journey",
  status: "Learning Project",
  summary:
    "A command-line implementation of the classic Blackjack card game where the player competes against a computer dealer following standard Blackjack rules.",
  problem:
    "Build a game that randomly deals cards, calculates hand values, handles special rules like Aces counting as 1 or 11, determines when the dealer should draw, and correctly identifies winners.",
  architecture:
    "Uses Python's random module to simulate drawing cards from a deck. Game logic is organized into reusable functions for dealing cards, calculating scores, comparing hands, and managing the main gameplay loop.",
  lessons:
    "Strengthened understanding of modular programming by breaking game mechanics into functions, handling complex conditional logic, managing game state, and implementing real-world game rules in Python.",
  stack: ["Python"],
  githubUrl: "https://github.com/Sadiq-Nagoda",
  repoState: "source-available",
  screenshots: { state: "pending" },
};