export type ProjectStatus =
  | "In Development"
  | "MVP In Progress"
  | "Shipped"
  | "Validated Concept"
  | "Learning Project";

export type RepoState = "linked" | "source-available" | "private" | "in-development";

export type Project = {
  slug: string;
  title: string;
  category: "flagship" | "major" | "python-journey";
  status: ProjectStatus;
  summary: string;
  problem: string;
  constraints?: string;
  architecture: string;
  tradeoffs?: string;
  lessons: string;
  futureWork?: string;
  stack: string[];
  githubUrl?: string;
  liveUrl?: string;
  repoState?: RepoState;
  screenshots: { state: "available" | "pending"; images?: string[] };
  timeline?: string;
};

export type Article = {
  slug: string;
  title: string;
  dek: string;
  publishedAt: string;
  readingTime: string;
  tags: string[];
  body: string;
};

export type ExperienceEntry = {
  role: string;
  org: string;
  location?: string;
  period: string;
  bullets: string[];
};

export type Certification = {
  name: string;
  issuer: string;
  year: string;
  status: "confirmed" | "in-progress";
};
