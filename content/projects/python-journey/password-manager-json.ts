import type { Project } from "@/lib/types";

export const passwordManagerJson: Project = {
  slug: "password-manager-json",
  title: "Password Manager (JSON)",
  category: "python-journey",
  status: "Learning Project",
  summary:
    "An enhanced version of the Password Manager that stores credentials in a JSON file, supports password lookup, and provides a more reliable way to manage login information.",
  problem:
    "Improve the original password manager by replacing plain text storage with structured JSON data, allowing users to save, retrieve, and manage credentials while handling missing files and invalid searches gracefully.",
  architecture:
    "Built with Tkinter for the graphical interface, JSON for structured data persistence, and modular callback functions for password generation, saving, and searching. Robust exception handling ensures the application behaves predictably even when data files are missing or incomplete.",
  lessons:
    "Learned how to serialize and deserialize data with JSON, implement exception handling using try-except blocks, update existing data safely, and build more maintainable desktop applications through structured data management.",
  stack: ["Python", "Tkinter", "JSON", "File I/O"],
  githubUrl: "https://github.com/Sadiq-Nagoda",
  repoState: "source-available",
// password-manager-json.ts
  screenshots: {
    state: "available",
    images: ["/images/projects/password-manager-json/1.png"],
},
};