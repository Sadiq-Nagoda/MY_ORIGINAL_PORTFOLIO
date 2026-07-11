import type { Project } from "@/lib/types";
import { aais } from "@/content/projects/aais";
import { footballArenaBooking } from "@/content/projects/football-arena-booking";
import { resultManagementSystem } from "@/content/projects/result-management-system";
import { islamiyyaManagementSystem } from "@/content/projects/islamiyya-management-system";
import { budgetTracker } from "@/content/projects/python-journey/budget-tracker";
import { taskManager } from "@/content/projects/python-journey/task-manager";
import { snakeGame } from "@/content/projects/python-journey/snake-game";
import { hirstSpotPainting } from "@/content/projects/python-journey/hirst-spot-painting";

export const projects: Project[] = [
  aais,
  footballArenaBooking,
  resultManagementSystem,
  islamiyyaManagementSystem,
  budgetTracker,
  taskManager,
  snakeGame,
  hirstSpotPainting,
];

export const flagshipProject = projects.find((p) => p.category === "flagship");
export const majorProjects = projects.filter((p) => p.category === "major");
export const pythonJourneyProjects = projects.filter((p) => p.category === "python-journey");

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
