import type { Project } from "@/lib/types";

export const calculator: Project = {
  slug: "calculator",
  title: "Calculator",
  category: "python-journey",
  status: "Learning Project",
  summary:
    "A command-line calculator that performs basic arithmetic operations using reusable functions and return values.",
  problem:
    "Build an interactive calculator that repeatedly accepts user input, performs calculations, and allows users to continue calculating with previous results or start a new calculation.",
  architecture:
    "A dictionary maps mathematical symbols to operation functions. User input is processed in a loop while functions return calculation results that become the next operation's starting value.",
  lessons:
    "Learned how return values make functions reusable, how dictionaries can store function references, and how separating logic into functions produces cleaner, easier-to-maintain code.",
  stack: ["Python"],
  githubUrl: "https://github.com/Sadiq-Nagoda",
  repoState: "source-available",
  screenshots: { state: "pending" },
};