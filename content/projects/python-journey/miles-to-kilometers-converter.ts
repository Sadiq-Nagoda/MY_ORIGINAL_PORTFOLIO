import type { Project } from "@/lib/types";

export const milesToKilometersConverter: Project = {
  slug: "miles-to-kilometers-converter",
  title: "Miles to Kilometers Converter",
  category: "python-journey",
  status: "Learning Project",
  summary:
    "A desktop GUI application built with Tkinter that instantly converts distances from miles to kilometers through a simple, user-friendly interface.",
  problem:
    "Create a graphical application that accepts a distance in miles, performs the conversion to kilometers when the user clicks a button, and displays the result without relying on the command line.",
  architecture:
    "Built using Python's Tkinter library with Labels, Entry, Button, and Grid layout manager. User input is retrieved from the Entry widget, converted using the standard conversion formula, and the result is displayed dynamically in the interface.",
  lessons:
    "Learned the fundamentals of GUI development with Tkinter, including creating widgets, handling button events, using the grid layout system, and separating interface components from application logic.",
  stack: ["Python", "Tkinter"],
  githubUrl: "https://github.com/Sadiq-Nagoda",
  repoState: "source-available",
  // miles-to-kilometers-converter.ts
  screenshots: {
    state: "available",
    images: ["/images/projects/miles-to-kilometers-converter/1.png"],
},
};