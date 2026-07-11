import type { Metadata } from "next";
import { Container } from "@/components/primitives/Container";
import { Reveal } from "@/components/primitives/Reveal";
import { ContactForm } from "@/components/content/ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with Sadiq Usman Nagoda.",
};

export default function Contact() {
  return (
    <section className="py-20 md:py-28">
      <Container>
        <div className="grid gap-16 md:grid-cols-2">
          <Reveal>
            <h1 className="font-display text-4xl md:text-5xl font-medium">Contact</h1>
            <p className="font-body text-lg text-foreground/80 mt-6 max-w-md prose-measure leading-relaxed">
              Open to conversations about software, collaboration, or
              opportunities. I generally reply within a few days.
            </p>

            <dl className="mt-10 space-y-4 font-body">
              <div>
                <dt className="text-sm text-foreground/70">Email</dt>
                <dd>
                  <a
                    href="mailto:sadiqnagoda1848@gmail.com"
                    className="underline underline-offset-4 hover:text-hover transition-colors duration-200"
                  >
                    sadiqnagoda1848@gmail.com
                  </a>
                </dd>
              </div>
              <div>
                <dt className="text-sm text-foreground/70">Phone</dt>
                <dd>
                  <a
                    href="tel:+2349075727513"
                    className="underline underline-offset-4 hover:text-hover transition-colors duration-200"
                  >
                    +234 907 572 7513
                  </a>
                </dd>
              </div>
              <div>
                <dt className="text-sm text-foreground/70">GitHub</dt>
                <dd>
                  <a
                    href="https://github.com/Sadiq-Nagoda"
                    target="_blank"
                    rel="noreferrer"
                    className="underline underline-offset-4 hover:text-hover transition-colors duration-200"
                  >
                    github.com/Sadiq-Nagoda
                  </a>
                </dd>
              </div>
              <div>
                <dt className="text-sm text-foreground/70">LinkedIn</dt>
                <dd>
                  <a
                    href="https://linkedin.com/in/sadiq-nagoda-076225383"
                    target="_blank"
                    rel="noreferrer"
                    className="underline underline-offset-4 hover:text-hover transition-colors duration-200"
                  >
                    linkedin.com/in/sadiq-nagoda
                  </a>
                </dd>
              </div>
              <div>
                <dt className="text-sm text-foreground/70">Location</dt>
                <dd>Kano, Nigeria</dd>
              </div>
            </dl>
          </Reveal>

          <Reveal delay={0.1}>
            <ContactForm />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
