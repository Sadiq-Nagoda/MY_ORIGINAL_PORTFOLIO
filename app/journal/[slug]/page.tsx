import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Container } from "@/components/primitives/Container";
import { Reveal } from "@/components/primitives/Reveal";
import { articles, getArticleBySlug } from "@/content/journal";

export function generateStaticParams() {
  return articles.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) return {};
  return { title: article.title, description: article.dek };
}

export default async function JournalEntry({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) notFound();

  return (
    <section className="py-20 md:py-28">
      <Container>
        <Reveal>
          <p className="font-mono text-xs text-foreground/70">
            {article.publishedAt} &middot; {article.readingTime}
          </p>
          <h1 className="font-display text-3xl md:text-5xl font-medium mt-2 max-w-3xl">
            {article.title}
          </h1>
          <p className="font-body text-lg text-foreground/80 mt-4 max-w-2xl prose-measure">
            {article.dek}
          </p>
        </Reveal>
        {/* Body rendering (MDX) will be wired up once a real first entry
            exists to build and validate the pipeline against — see
            PROJECT_STATE.md. */}
      </Container>
    </section>
  );
}
