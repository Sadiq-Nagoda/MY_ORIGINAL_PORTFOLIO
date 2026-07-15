import type { Project } from "@/lib/types";

export const quizGame: Project = {
  slug: "quiz-game",
  title: "Quiz Game",
  category: "python-journey",
  status: "Learning Project",
  summary:
    "A command-line true-or-false quiz application that presents a series of questions, validates user answers, and keeps track of the player's score.",
  problem:
    "Build an interactive quiz system that loads questions from external data, asks them one at a time, checks the user's responses, and displays the final score after all questions have been answered.",
  architecture:
    "Uses object-oriented programming with dedicated Question and QuizBrain classes. Questions are created from external data, while the QuizBrain class manages question flow, answer validation, score tracking, and game progression.",
  lessons:
    "Gained practical experience creating custom classes, working with lists of objects, separating data from application logic, and designing maintainable programs using object-oriented principles.",
  stack: ["Python", "Object-Oriented Programming"],
  githubUrl: "https://github.com/Sadiq-Nagoda",
  repoState: "source-available",
  screenshots: { state: "pending" },
};