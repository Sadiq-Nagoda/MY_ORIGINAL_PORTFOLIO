import type { Project } from "@/lib/types";

export const mailMerge: Project = {
  slug: "mail-merge",
  title: "Mail Merge",
  category: "python-journey",
  status: "Learning Project",
  summary:
    "A file automation project that generates personalized letters by replacing placeholders in a template with names from a list.",
  problem:
    "Automate the repetitive task of creating personalized invitation letters by reading names from a text file, replacing placeholders in a template, and saving each customized letter as a separate file.",
  architecture:
    "Uses Python's file handling to read a template letter and a list of names. Each name replaces a placeholder in the template before the personalized letter is written to an output directory.",
  lessons:
    "Learned how to work with file paths, read and write text files, automate repetitive tasks, and use string replacement to generate personalized documents efficiently.",
  stack: ["Python", "File I/O"],
  githubUrl: "https://github.com/Sadiq-Nagoda",
  repoState: "source-available",
  screenshots: { state: "pending" },
};