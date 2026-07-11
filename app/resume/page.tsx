import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/primitives/Container";
import { Reveal } from "@/components/primitives/Reveal";
import { Button } from "@/components/primitives/Button";
import { education, experience, certifications, skills } from "@/content/resume";
import { flagshipProject, majorProjects } from "@/content/projects";

export const metadata: Metadata = {
  title: "Resume",
  description: "Education, experience, skills, and certifications — the factual record.",
};

export default function Resume() {
  return (
    <section className="py-20 md:py-28">
      <Container>
        <Reveal>
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6">
            <h1 className="font-display text-4xl md:text-5xl font-medium">Resume</h1>
            <Button href="/resume.pdf" variant="outline">
              Download PDF
            </Button>
          </div>
          <p className="font-body text-foreground/80 mt-6 max-w-2xl prose-measure leading-relaxed">
            The portfolio tells the stories; this page keeps to the facts.
          </p>
        </Reveal>

        <Reveal delay={0.05}>
          <div className="mt-14 max-w-2xl">
            <h2 className="font-display text-2xl font-medium">Education</h2>
            <div className="mt-4">
              <p className="font-body font-medium">{education.degree}</p>
              <p className="font-body text-foreground/70">{education.institution}</p>
              <p className="font-body text-foreground/70 text-sm mt-1">
                {education.status} &middot; CGPA {education.cgpa}
              </p>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mt-14 max-w-2xl">
            <h2 className="font-display text-2xl font-medium">Experience</h2>
            <div className="mt-4 space-y-8">
              {experience.map((entry) => (
                <div key={entry.role}>
                  <p className="font-body font-medium">{entry.role}</p>
                  <p className="font-body text-foreground/70">
                    {entry.org} &middot; {entry.period}
                  </p>
                  <ul className="mt-2 space-y-1 list-disc list-inside">
                    {entry.bullets.map((bullet) => (
                      <li
                        key={bullet}
                        className="font-body text-foreground/80 text-sm prose-measure leading-relaxed"
                      >
                        {bullet}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.15}>
          <div className="mt-14 max-w-2xl">
            <h2 className="font-display text-2xl font-medium">Skills</h2>
            <div className="mt-4 space-y-4">
              {Object.entries(skills).map(([group, items]) => (
                <div key={group}>
                  <p className="font-mono text-xs uppercase tracking-wide text-foreground/70">
                    {group}
                  </p>
                  <p className="font-body text-foreground/80 mt-1">{items.join(", ")}</p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.2}>
          <div className="mt-14 max-w-2xl">
            <h2 className="font-display text-2xl font-medium">Certifications</h2>
            <ul className="mt-4 space-y-2">
              {certifications.map((cert) => (
                <li key={cert.name} className="font-body text-foreground/80">
                  {cert.name} &mdash; {cert.issuer}{" "}
                  <span className="text-foreground/70 text-sm">
                    ({cert.status === "in-progress" ? "in progress" : cert.year})
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>

        <Reveal delay={0.25}>
          <div className="mt-14 max-w-2xl">
            <h2 className="font-display text-2xl font-medium">Projects</h2>
            <ul className="mt-4 space-y-1">
              {[flagshipProject, ...majorProjects].map(
                (project) =>
                  project && (
                    <li key={project.slug} className="font-body text-foreground/80">
                      {project.title}{" "}
                      <span className="text-foreground/70 text-sm">({project.status})</span>
                    </li>
                  )
              )}
            </ul>
            <p className="font-body text-sm text-foreground/70 mt-3">
              Full case studies on the{" "}
              <Link href="/projects" className="underline underline-offset-4">
                Projects
              </Link>{" "}
              page.
            </p>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
