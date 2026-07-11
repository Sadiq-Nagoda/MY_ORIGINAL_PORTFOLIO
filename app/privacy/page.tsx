import type { Metadata } from "next";
import { Container } from "@/components/primitives/Container";
import { Reveal } from "@/components/primitives/Reveal";

export const metadata: Metadata = {
  title: "Privacy",
  description: "What this site collects, and what it doesn't.",
};

export default function Privacy() {
  return (
    <section className="py-20 md:py-28">
      <Container>
        <Reveal>
          <h1 className="font-display text-4xl md:text-5xl font-medium">Privacy</h1>
          <div className="mt-8 max-w-2xl space-y-6 font-body text-foreground/80 leading-relaxed prose-measure">
            <p>This site collects two things, and nothing else:</p>
            <p>
              <strong className="text-foreground">Contact form submissions.</strong>{" "}
              If you use the contact form, your name, email address, and
              message are sent via Resend directly to my email inbox. They
              aren&rsquo;t stored anywhere else or used for anything beyond
              replying to you.
            </p>
            <p>
              <strong className="text-foreground">Basic analytics.</strong> Vercel
              Analytics and Speed Insights collect anonymized page-visit and
              performance data &mdash; no cookies, no cross-site tracking, no
              personal identifiers.
            </p>
            <p>There is no advertising on this site, and no data is sold or shared with third parties.</p>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
