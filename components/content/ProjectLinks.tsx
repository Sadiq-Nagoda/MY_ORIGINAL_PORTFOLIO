import type { Project } from "@/lib/types";
import { Button } from "@/components/primitives/Button";

const repoStateLabel: Record<NonNullable<Project["repoState"]>, string> = {
  linked: "Live Demo",
  "source-available": "Source Code Available",
  private: "Private Repository",
  "in-development": "Currently In Development",
};

/**
 * Never fabricates a demo link or a repository that doesn't exist. Handles
 * four real cases: a live demo exists; the repo is private; the repo
 * exists and is public/in-development; or nothing has been built yet
 * (e.g. a validated-concept project with no code at all).
 */
export function ProjectLinks({ project }: { project: Project }) {
  if (project.liveUrl) {
    return (
      <div className="flex flex-wrap gap-4">
        <Button href={project.liveUrl}>Live Demo</Button>
        {project.githubUrl && (
          <Button href={project.githubUrl} variant="outline">
            View on GitHub
          </Button>
        )}
      </div>
    );
  }

  if (!project.repoState || !project.githubUrl) {
    return (
      <span className="inline-block font-body text-sm text-foreground/70 border-2 border-foreground/20 rounded-md px-5 py-2.5">
        Nothing built yet
      </span>
    );
  }

  if (project.repoState === "private") {
    return (
      <span className="inline-block font-body text-sm text-foreground/70 border-2 border-foreground/20 rounded-md px-5 py-2.5">
        {repoStateLabel.private}
      </span>
    );
  }

  return (
    <div className="flex flex-wrap gap-4">
      <Button href={project.githubUrl} variant="outline">
        {repoStateLabel[project.repoState]}
      </Button>
    </div>
  );
}
