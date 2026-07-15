import type { Project } from "@/lib/types";

export const coffeeMachineOOP: Project = {
  slug: "coffee-machine-oop",
  title: "Coffee Machine (OOP)",
  category: "python-journey",
  status: "Learning Project",
  summary:
    "An object-oriented version of the Coffee Machine project that uses pre-built classes to manage the menu, resources, and payment system.",
  problem:
    "Refactor the procedural coffee machine into an object-oriented application by integrating separate classes that encapsulate responsibilities such as menu management, money handling, and resource tracking.",
  architecture:
    "Built around the Menu, MenuItem, CoffeeMaker, and MoneyMachine classes. The main program coordinates interactions between these objects while each class manages its own data and behavior, resulting in a modular and maintainable design.",
  lessons:
    "Learned the fundamentals of object-oriented programming, including creating objects, using class methods, separating responsibilities, and leveraging encapsulation to build cleaner, more scalable Python applications.",
  stack: ["Python", "Object-Oriented Programming"],
  githubUrl: "https://github.com/Sadiq-Nagoda",
  repoState: "source-available",
  screenshots: { state: "pending" },
};