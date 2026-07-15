import type { Project } from "@/lib/types";

export const coffeeMachine: Project = {
  slug: "coffee-machine",
  title: "Coffee Machine",
  category: "python-journey",
  status: "Learning Project",
  summary:
    "A command-line coffee machine simulator that manages resources, processes coin payments, and serves drinks based on user selections.",
  problem:
    "Build a program that tracks ingredient inventory, verifies sufficient resources for each drink, calculates payments, returns change when necessary, and updates machine resources after every successful purchase.",
  architecture:
    "Organized around dictionaries for the menu and machine resources, with reusable functions handling resource validation, payment processing, transaction verification, report generation, and drink preparation within a continuous command loop.",
  lessons:
    "Strengthened skills in decomposing complex problems into small functions, managing shared application state with dictionaries, implementing business logic, and building interactive command-line applications with clean program flow.",
  stack: ["Python"],
  githubUrl: "https://github.com/Sadiq-Nagoda",
  repoState: "source-available",
  screenshots: { state: "pending" },
};