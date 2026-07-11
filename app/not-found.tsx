import { Container } from "@/components/primitives/Container";
import { Button } from "@/components/primitives/Button";

export default function NotFound() {
  return (
    <section className="py-28 md:py-40">
      <Container>
        <p className="font-mono text-xs text-foreground/70 uppercase tracking-wide">404</p>
        <h1 className="font-display text-3xl md:text-4xl font-medium mt-2">
          Nothing&rsquo;s here.
        </h1>
        <p className="font-body text-foreground/80 mt-4 max-w-md prose-measure leading-relaxed">
          Either the page moved, or it never existed. The Projects and Home
          pages are good places to pick back up.
        </p>
        <div className="mt-8 flex flex-wrap gap-4">
          <Button href="/">Home</Button>
          <Button href="/projects" variant="outline">
            Projects
          </Button>
        </div>
      </Container>
    </section>
  );
}
