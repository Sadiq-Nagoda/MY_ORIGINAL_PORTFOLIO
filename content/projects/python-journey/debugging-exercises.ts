import type { Project } from "@/lib/types";

export const debuggingExercises: Project = {
  slug: "debugging-exercises",
  title: "Debugging Exercises",
  category: "python-journey",
  status: "Learning Project",
  summary:
    "A collection of debugging challenges focused on identifying, understanding, and fixing common Python programming errors using systematic debugging techniques.",
  problem:
    "Analyze existing Python programs containing logical, syntax, runtime, and off-by-one errors, then apply debugging strategies to locate and resolve each issue without introducing new bugs.",
  architecture:
    "Consists of multiple independent Python scripts, each demonstrating a different class of programming error. Debugging tools such as print statements, breakpoints, and code tracing are used to inspect program execution and verify fixes.",
  lessons:
    "Developed a structured approach to debugging by reading error messages carefully, tracing execution flow, isolating bugs one at a time, and validating solutions through repeated testing instead of relying on trial and error.",
  stack: ["Python"],
  githubUrl: "https://github.com/Sadiq-Nagoda",
  repoState: "source-available",
  screenshots: { state: "pending" },
};