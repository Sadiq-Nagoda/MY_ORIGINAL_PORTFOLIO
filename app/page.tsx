import { Container } from "@/components/primitives/Container";
import { Button } from "@/components/primitives/Button";
import { Reveal } from "@/components/primitives/Reveal";

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="pt-20 pb-24 md:pt-28 md:pb-32">
        <Container>
          <Reveal>
            <h1 className="font-display text-4xl md:text-6xl font-medium leading-[1.1] max-w-3xl">
              Software, engineered deliberately.
            </h1>
            <p className="font-body text-lg md:text-xl text-foreground/80 mt-6 max-w-xl prose-measure">
              I&rsquo;m a Software Engineering student in Kano, Nigeria. Right
              now I&rsquo;m building an AI assistant for my university, and
              writing about what I learn as I go.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Button href="/projects">See the work</Button>
              <Button href="/about" variant="outline">
                How I think about it
              </Button>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* Short introduction */}
      <section className="py-16 border-t border-foreground/10">
        <Container>
          <Reveal>
            <p className="font-body text-lg md:text-xl leading-relaxed max-w-2xl prose-measure">
              I care more about understanding a system than shipping something
              that merely works. Most of what&rsquo;s here is unfinished, in
              progress, or something I got wrong the first time and rebuilt.
              That&rsquo;s intentional &mdash; it&rsquo;s a more honest record than a
              portfolio of only-finished things would be.
            </p>
          </Reveal>
        </Container>
      </section>

      {/* Featured work preview */}
      <section className="py-16 border-t border-foreground/10">
        <Container>
          <Reveal>
            <h2 className="font-display text-2xl md:text-3xl font-medium">
              What I&rsquo;m building
            </h2>
          </Reveal>

          <div className="mt-10 grid gap-10 md:grid-cols-2">
            <Reveal delay={0.05}>
              <div className="border-l-2 border-hover pl-6">
                <p className="font-mono text-xs uppercase tracking-wide text-foreground/70">
                  In Development
                </p>
                <h3 className="font-display text-xl mt-2">
                  AAIS &mdash; an AI assistant for my university
                </h3>
                <p className="font-body text-foreground/80 mt-3 prose-measure">
                  A RAG-based assistant built on Flask and the Claude API,
                  meant to answer real student questions from a structured
                  knowledge base of AUSU&rsquo;s own information. It&rsquo;s
                  also intended as my final-year project, and it isn&rsquo;t
                  finished yet.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="border-l-2 border-hover pl-6">
                <p className="font-mono text-xs uppercase tracking-wide text-foreground/70">
                  MVP In Progress
                </p>
                <h3 className="font-display text-xl mt-2">
                  A football arena booking system
                </h3>
                <p className="font-body text-foreground/80 mt-3 prose-measure">
                  A Flask and SQLAlchemy reservation platform for a real venue
                  in Kano, handling slot booking and payments through
                  Paystack.
                </p>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.15}>
            <div className="mt-10">
              <Button href="/projects" variant="outline">
                All projects
              </Button>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* Engineering philosophy preview */}
      <section className="py-16 border-t border-foreground/10">
        <Container>
          <Reveal>
            <h2 className="font-display text-2xl md:text-3xl font-medium">
              How I approach building
            </h2>
            <p className="font-body text-lg text-foreground/80 mt-4 max-w-2xl prose-measure leading-relaxed">
              I&rsquo;d rather write something a stranger can follow in five
              years than something clever today. Most of what I&rsquo;ve learned
              so far has been about choosing the simpler option, even when the
              more complicated one is more interesting to build.
            </p>
          </Reveal>
        </Container>
      </section>

      {/* Latest learning (stand-in for Journal previews until articles exist) */}
      <section className="py-16 border-t border-foreground/10">
        <Container>
          <Reveal>
            <h2 className="font-display text-2xl md:text-3xl font-medium">
              Currently documenting
            </h2>
            <p className="font-body text-foreground/80 mt-4 max-w-2xl prose-measure leading-relaxed">
              I&rsquo;m working through Angela Yu&rsquo;s 100 Days of Python and
              keeping a public SIWES logbook of what I build along the way
              &mdash; command-line tools, small games, and the occasional
              rebuild once I understood something better the second time.
            </p>
            <div className="mt-6">
              <Button href="/projects#python-journey" variant="outline">
                See the Python journey
              </Button>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* Call to explore */}
      <section className="py-20 border-t border-foreground/10">
        <Container>
          <Reveal>
            <h2 className="font-display text-2xl md:text-3xl font-medium max-w-xl">
              If you want the fuller picture, the projects page is the honest
              version.
            </h2>
            <div className="mt-8">
              <Button href="/projects">Explore the projects</Button>
            </div>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
