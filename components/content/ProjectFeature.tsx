import Link from "next/link";
import type { Project } from "@/lib/types";
import { StatusBadge } from "@/components/content/StatusBadge";

export function ProjectFeature({ project }: { project: Project }) {
  return (
    <article className="border-l-2 border-hover pl-6 md:pl-8">
      <StatusBadge status={project.status} />
      <h2 className="font-display text-2xl md:text-3xl mt-2">
        <Link
          href={`/projects/${project.slug}`}
          className="hover:text-hover transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-hover focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded-sm"
        >
          {project.title}
        </Link>
      </h2>
      <p className="font-body text-foreground/80 mt-3 max-w-2xl prose-measure leading-relaxed">
        {project.summary}
      </p>
      <ul className="flex flex-wrap gap-x-4 gap-y-1 mt-4 font-mono text-xs text-foreground/70">
        {project.stack.map((tech) => (
          <li key={tech}>{tech}</li>
        ))}
      </ul>
      <Link
        href={`/projects/${project.slug}`}
        className="inline-block mt-5 font-body text-sm underline underline-offset-4 text-foreground/80 hover:text-foreground transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-hover focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded-sm"
      >
        Read the case study &rarr;
      </Link>
    </article>
  );
}
