import type { Project } from "@/lib/types";

export const taskManager: Project = {
  slug: "task-manager",
  title: "Task Manager",
  category: "python-journey",
  status: "Learning Project",
  summary: "A command-line CRUD task manager — full create, read, update, delete over a task list.",
  problem:
    "Moving beyond scripts that only append data, into a program that also has to read, modify, and delete existing records correctly.",
  architecture:
    "A CLI tool structured around the four CRUD operations against a persisted task list, with basic input validation on each path.",
  lessons:
    "Delete and update are where the real edge cases show up — handling a request to modify or remove something that doesn't exist turned out to matter more than the 'happy path' operations.",
  stack: ["Python"],
  githubUrl: "https://github.com/Sadiq-Nagoda",
  repoState: "source-available",
  screenshots: { state: "pending" },
};
