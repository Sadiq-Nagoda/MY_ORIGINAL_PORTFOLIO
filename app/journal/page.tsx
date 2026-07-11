import type { Metadata } from "next";
import { Container } from "@/components/primitives/Container";
import { Reveal } from "@/components/primitives/Reveal";
import { Button } from "@/components/primitives/Button";
import { articles } from "@/content/journal";

export const metadata: Metadata = {
  title: "Journal",
  description: "Writing on software engineering, learning, and building in public.",
};

export default function Journal() {
  return (
    <section className="py-20 md:py-28">
      <Container>
        <Reveal>
          <h1 className="font-display text-4xl md:text-5xl font-medium">Journal</h1>
          <p className="font-body text-lg text-foreground/80 mt-6 max-w-2xl prose-measure leading-relaxed">
            Longer-form writing on the engineering decisions, mistakes, and
            lessons behind the projects here.
          </p>
        </Reveal>

        {articles.length === 0 ? (
          <Reveal delay={0.05}>
            <div className="mt-16 border border-dashed border-foreground/20 rounded-md p-10 max-w-xl">
              <p className="font-body text-foreground/70 leading-relaxed">
                The first entry hasn&rsquo;t been published yet. In the
                meantime, the Projects page documents the same kind of
                thinking in case-study form.
              </p>
              <div className="mt-6">
                <Button href="/projects" variant="outline">
                  Read the project case studies
                </Button>
              </div>
            </div>
          </Reveal>
        ) : (
          <ul className="mt-16 space-y-10">
            {articles.map((article) => (
              <li key={article.slug}>
                <h2 className="font-display text-2xl">{article.title}</h2>
                <p className="font-body text-foreground/70 mt-2">{article.dek}</p>
              </li>
            ))}
          </ul>
        )}
      </Container>
    </section>
  );
}
