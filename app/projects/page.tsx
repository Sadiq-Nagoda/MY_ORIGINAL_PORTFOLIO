import type { Metadata } from "next";
import { Container } from "@/components/primitives/Container";
import { Reveal } from "@/components/primitives/Reveal";
import { ProjectFeature } from "@/components/content/ProjectFeature";
import { PythonJourneyEntry } from "@/components/content/PythonJourneyEntry";
import {
  flagshipProject,
  majorProjects,
  pythonJourneyProjects,
} from "@/content/projects";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Case studies from Sadiq Usman Nagoda's work — problems, architecture, trade-offs, and lessons, not just finished screenshots.",
};

export default function Projects() {
  return (
    <section className="py-20 md:py-28">
      <Container>
        <Reveal>
          <h1 className="font-display text-4xl md:text-5xl font-medium">
            Projects
          </h1>
          <p className="font-body text-lg text-foreground/80 mt-6 max-w-2xl prose-measure leading-relaxed">
            Each entry here documents the problem, the constraints, and what
            I&rsquo;d do differently &mdash; not just a finished screenshot. Some
            of what follows is still in progress; it&rsquo;s labeled as such
            rather than presented as finished.
          </p>
        </Reveal>

        {flagshipProject && (
          <div className="mt-16">
            <Reveal>
              <ProjectFeature project={flagshipProject} />
            </Reveal>
          </div>
        )}

        <div className="mt-16 space-y-14">
          {majorProjects.map((project, i) => (
            <Reveal key={project.slug} delay={i * 0.05}>
              <ProjectFeature project={project} />
            </Reveal>
          ))}
        </div>

        <div id="python-journey" className="mt-20 scroll-mt-24">
          <Reveal>
            <h2 className="font-display text-2xl md:text-3xl font-medium">
              Python Journey
            </h2>

            <p className="font-body text-foreground/80 mt-3 max-w-2xl prose-measure leading-relaxed">
              Curated highlights from Angela Yu&rsquo;s 100 Days of Python
              &mdash; the pieces that represent an actual step up in what I
              could build, not every exercise along the way.
            </p>

            {/* DEBUG */}
            <p className="mt-4 font-mono text-sm text-red-500">
              Total Python Projects: {pythonJourneyProjects.length}
            </p>
          </Reveal>

          <Reveal delay={0.05}>
            <ul className="mt-8">
              {pythonJourneyProjects.map((project) => (
                <PythonJourneyEntry
                  key={project.slug}
                  project={project}
                />
              ))}
            </ul>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}