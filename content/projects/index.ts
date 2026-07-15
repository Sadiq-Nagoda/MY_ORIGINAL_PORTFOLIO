 import type { Project } from "@/lib/types";
import { aais } from "@/content/projects/aais";
import { footballArenaBooking } from "@/content/projects/football-arena-booking";
import { resultManagementSystem } from "@/content/projects/result-management-system";
import { islamiyyaManagementSystem } from "@/content/projects/islamiyya-management-system";

import { budgetTracker } from "@/content/projects/python-journey/budget-tracker";
import { taskManager } from "@/content/projects/python-journey/task-manager";
import { calculator } from "@/content/projects/python-journey/calculator";
import { blackjack } from "@/content/projects/python-journey/blackjack";
import { numberGuessingGame } from "@/content/projects/python-journey/number-guessing-game";
import { debuggingExercises } from "@/content/projects/python-journey/debugging-exercises";
import { higherLowerGame } from "@/content/projects/python-journey/higher-lower-game";
import { coffeeMachine } from "@/content/projects/python-journey/coffee-machine";
import { coffeeMachineOOP } from "@/content/projects/python-journey/coffee-machine-oop";
import { quizGame } from "@/content/projects/python-journey/quiz-game";
import { hirstPainting } from "@/content/projects/python-journey/hirst-painting";
import { hirstSpotPainting } from "@/content/projects/python-journey/hirst-spot-painting";
import { turtleRace } from "@/content/projects/python-journey/turtle-race";
import { snakeGame } from "@/content/projects/python-journey/snake-game";
import { snakeGamePartTwo } from "@/content/projects/python-journey/snake-game-part-2";
import { pongGame } from "@/content/projects/python-journey/pong-game";
import { turtleCrossingGame } from "@/content/projects/python-journey/turtle-crossing-game";
import { mailMerge } from "@/content/projects/python-journey/mail-merge";
import { usStatesGame } from "@/content/projects/python-journey/us-states-game";
import { natoPhoneticAlphabet } from "@/content/projects/python-journey/nato-phonetic-alphabet";
import { milesToKilometersConverter } from "@/content/projects/python-journey/miles-to-kilometers-converter";
import { pomodoroTimer } from "@/content/projects/python-journey/pomodoro-timer";
import { passwordManager } from "@/content/projects/python-journey/password-manager";
import { passwordManagerJson } from "@/content/projects/python-journey/password-manager-json";

export const projects: Project[] = [
  aais,
  footballArenaBooking,
  resultManagementSystem,
  islamiyyaManagementSystem,

  budgetTracker,
  taskManager,
  calculator,
  blackjack,
  numberGuessingGame,
  debuggingExercises,
  higherLowerGame,
  coffeeMachine,
  coffeeMachineOOP,
  quizGame,
  hirstPainting,
  hirstSpotPainting,
  turtleRace,
  snakeGame,
  snakeGamePartTwo,
  pongGame,
  turtleCrossingGame,
  mailMerge,
  usStatesGame,
  natoPhoneticAlphabet,
  milesToKilometersConverter,
  pomodoroTimer,
  passwordManager,
  passwordManagerJson,
];

export const flagshipProject = projects.find(
  (p) => p.category === "flagship"
);

export const majorProjects = projects.filter(
  (p) => p.category === "major"
);

export const pythonJourneyProjects = projects.filter(
  (p) => p.category === "python-journey"
);

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}