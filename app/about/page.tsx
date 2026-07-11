import type { Metadata } from "next";
import { Container } from "@/components/primitives/Container";
import { Reveal } from "@/components/primitives/Reveal";

export const metadata: Metadata = {
  title: "About",
  description:
    "How Sadiq Usman Nagoda approaches learning, problem-solving, and building software.",
};

export default function About() {
  return (
    <section className="py-20 md:py-28">
      <Container>
        <Reveal>
          <h1 className="font-display text-4xl md:text-5xl font-medium">About</h1>
          <p className="font-body text-lg md:text-xl text-foreground/80 mt-6 max-w-2xl prose-measure leading-relaxed">
            I got into software engineering the unglamorous way: by getting
            stuck on small things and refusing to move on until I understood
            why they broke. That habit hasn&rsquo;t changed much since.
          </p>
        </Reveal>

        <Reveal delay={0.05}>
          <div className="mt-16 max-w-2xl">
            <h2 className="font-display text-2xl font-medium">How I learn</h2>
            <p className="font-body text-foreground/80 mt-4 prose-measure leading-relaxed">
              Most of what I know, I&rsquo;ve learned by building rather than
              watching someone else build. I&rsquo;m currently working through
              Angela Yu&rsquo;s 100 Days of Python and AWS&rsquo;s AI/ML
              Fundamentals curriculum, alongside SIWES placement at an AI Hub
              in Kano &mdash; most weekdays go to Python, machine learning, and
              real project work instead of regular classes. I keep a public
              logbook of it, partly for accountability, partly because
              writing something down forces me to actually understand it.
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mt-16 max-w-2xl">
            <h2 className="font-display text-2xl font-medium">
              How I think about problems
            </h2>
            <p className="font-body text-foreground/80 mt-4 prose-measure leading-relaxed">
              I&rsquo;d rather spend an extra hour understanding why an error
              happened than paste in a fix I don&rsquo;t fully follow.
              That&rsquo;s slower in the short term. It&rsquo;s also the only way
              I&rsquo;ve found to actually get better at this, instead of just
              accumulating more code that happens to work for reasons I
              can&rsquo;t explain.
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.15}>
          <div className="mt-16 max-w-2xl">
            <h2 className="font-display text-2xl font-medium">What I value</h2>
            <p className="font-body text-foreground/80 mt-4 prose-measure leading-relaxed">
              Independence and structure over noise. Most of my real progress
              has come from working alone on one thing long enough to
              understand it, not from moving quickly across many things at
              once. When I do work with other people, I&rsquo;d rather hear
              directly what isn&rsquo;t working than be told it&rsquo;s fine.
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.2}>
          <div className="mt-16 max-w-2xl">
            <h2 className="font-display text-2xl font-medium">
              Where this is going
            </h2>
            <p className="font-body text-foreground/80 mt-4 prose-measure leading-relaxed">
              Longer term, I want to build a software company, not just work
              as an engineer somewhere. I&rsquo;m currently putting together
              AUSU AI Hub with a few classmates &mdash; a small student
              initiative aimed at less passive tutorial-following and more
              building things that actually get used. It&rsquo;s still in the
              planning stage, aiming to launch in September.
            </p>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
