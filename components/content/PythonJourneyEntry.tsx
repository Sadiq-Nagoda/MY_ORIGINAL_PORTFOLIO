import Link from "next/link";
import type { Project } from "@/lib/types";

/**
 * Deliberately not a smaller ProjectFeature — a genuinely different
 * treatment (inline, list-like, no border accent) so the Python Journey
 * section reads as its own category rather than a shrunk-down version of
 * the major case studies (Prompt 4: component diversity, not one reused
 * card scaled differently).
 */
export function PythonJourneyEntry({ project }: { project: Project }) {
  return (
    <li className="py-5 border-b border-foreground/10 last:border-b-0">
      <Link
        href={`/projects/${project.slug}`}
        className="group flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-hover focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded-sm"
      >
        <span className="font-display text-lg group-hover:text-hover transition-colors duration-200">
          {project.title}
        </span>
        <span className="font-mono text-xs text-foreground/70">
          {project.stack.join(" · ")}
        </span>
      </Link>
      <p className="font-body text-sm text-foreground/70 mt-1 max-w-xl prose-measure">
        {project.summary}
      </p>
    </li>
  );
}
