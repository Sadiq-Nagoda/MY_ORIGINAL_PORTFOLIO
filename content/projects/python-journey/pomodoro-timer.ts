import type { Project } from "@/lib/types";

export const pomodoroTimer: Project = {
  slug: "pomodoro-timer",
  title: "Pomodoro Timer",
  category: "python-journey",
  status: "Learning Project",
  summary:
    "A desktop productivity application that implements the Pomodoro Technique using Tkinter, featuring work sessions, short breaks, long breaks, and visual progress tracking.",
  problem:
    "Build a timer that automatically alternates between focused work sessions and breaks, updates the countdown in real time, allows users to reset the timer, and tracks completed work sessions.",
  architecture:
    "Uses Tkinter for the graphical interface and Python's event-driven programming model with the `after()` method for countdown scheduling. The application manages session states, timer resets, and progress indicators through modular functions.",
  lessons:
    "Learned how to build event-driven GUI applications, schedule recurring tasks with Tkinter's `after()` method, manage application state across multiple sessions, and create responsive desktop interfaces.",
  stack: ["Python", "Tkinter"],
  githubUrl: "https://github.com/Sadiq-Nagoda",
  repoState: "source-available",
// pomodoro-timer.ts
  screenshots: {
    state: "available",
    images: ["/images/projects/pomodoro-timer/1.png"],
},
};