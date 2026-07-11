import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Container } from "@/components/primitives/Container";
import { Reveal } from "@/components/primitives/Reveal";
import { StatusBadge } from "@/components/content/StatusBadge";
import { ScreenshotBlock } from "@/components/content/ScreenshotBlock";
import { ProjectLinks } from "@/components/content/ProjectLinks";
import { projects, getProjectBySlug } from "@/content/projects";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return {};
  return { title: project.title, description: project.summary };
}

export default async function ProjectDetail({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  const currentIndex = projects.findIndex((p) => p.slug === slug);
  const nextProject = projects[(currentIndex + 1) % projects.length];

  const schema = {
    "@context": "https://schema.org",
    "@type": "SoftwareSourceCode",
    name: project.title,
    description: project.summary,
    programmingLanguage: project.stack,
    codeRepository: project.githubUrl,
  };

  const narrative: { label: string; body?: string }[] = [
    { label: "The problem", body: project.problem },
    { label: "Constraints", body: project.constraints },
    { label: "Architecture", body: project.architecture },
    { label: "Trade-offs", body: project.tradeoffs },
    { label: "What I learned", body: project.lessons },
    { label: "What's next", body: project.futureWork },
  ];

  return (
    <section className="py-20 md:py-28">
      <Container>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
        <Reveal>
          <StatusBadge status={project.status} />
          <h1 className="font-display text-3xl md:text-5xl font-medium mt-2 max-w-3xl">
            {project.title}
          </h1>
          <p className="font-body text-lg text-foreground/80 mt-5 max-w-2xl prose-measure leading-relaxed">
            {project.summary}
          </p>
          <ul className="flex flex-wrap gap-x-4 gap-y-1 mt-5 font-mono text-xs text-foreground/70">
            {project.stack.map((tech) => (
              <li key={tech}>{tech}</li>
            ))}
          </ul>
          {project.timeline && (
            <p className="font-mono text-xs text-foreground/70 mt-2">{project.timeline}</p>
          )}
        </Reveal>

        <Reveal delay={0.05}>
          <div className="mt-12 max-w-3xl">
            <ScreenshotBlock project={project} />
          </div>
        </Reveal>

        <div className="mt-14 max-w-2xl space-y-10">
          {narrative
            .filter((s) => s.body)
            .map((s, i) => (
              <Reveal key={s.label} delay={i * 0.04}>
                <h2 className="font-display text-xl md:text-2xl font-medium">{s.label}</h2>
                <p className="font-body text-foreground/80 mt-3 prose-measure leading-relaxed">
                  {s.body}
                </p>
              </Reveal>
            ))}
        </div>

        <Reveal delay={0.1}>
          <div className="mt-14">
            <ProjectLinks project={project} />
          </div>
        </Reveal>

        <div className="mt-20 pt-8 border-t border-foreground/10">
          <Link
            href={`/projects/${nextProject.slug}`}
            className="font-body text-sm text-foreground/70 hover:text-foreground transition-colors duration-200"
          >
            Next project &mdash; {nextProject.title} &rarr;
          </Link>
        </div>
      </Container>
    </section>
  );
}
