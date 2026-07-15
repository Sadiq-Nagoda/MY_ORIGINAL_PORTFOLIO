import type { Project } from "@/lib/types";

export const passwordManager: Project = {
  slug: "password-manager",
  title: "Password Manager",
  category: "python-journey",
  status: "Learning Project",
  summary:
    "A desktop password manager built with Tkinter that generates secure passwords and saves website login credentials to a local data file.",
  problem:
    "Develop an application that helps users create strong random passwords, store website credentials safely in a structured file, and minimize the need to remember multiple passwords manually.",
  architecture:
    "Built with Tkinter for the graphical interface, the `random` module for secure password generation, and file handling for persistent storage. User input is validated before credentials are written to a local text file through a modular, event-driven design.",
  lessons:
    "Learned how to combine GUI development with file persistence, automate password generation, validate user input, and organize application logic into reusable callback functions for a better user experience.",
  stack: ["Python", "Tkinter", "File I/O"],
  githubUrl: "https://github.com/Sadiq-Nagoda",
  repoState: "source-available",
  // password-manager.ts
  screenshots: {
    state: "available",
    images: ["/images/projects/password-manager-json/1.png"],
},
};