import type { Article } from "@/lib/types";

// No entries yet — genuinely empty rather than filled with placeholder or
// fabricated posts (Article V / Prompt 7's Source of Truth rule). Adding a
// real entry here (or as an MDX file, once that rendering pipeline is
// wired up) is the only change /journal needs going forward.
export const articles: Article[] = [];

export function getArticleBySlug(slug: string): Article | undefined {
  return articles.find((a) => a.slug === slug);
}
