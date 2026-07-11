import type { MetadataRoute } from "next";
import { projects } from "@/content/projects";
import { articles } from "@/content/journal";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://placeholder-domain.example";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ["", "/about", "/projects", "/journal", "/resume", "/contact", "/privacy"].map(
    (path) => ({
      url: `${siteUrl}${path}`,
      lastModified: new Date(),
    })
  );

  const projectRoutes = projects.map((project) => ({
    url: `${siteUrl}/projects/${project.slug}`,
    lastModified: new Date(),
  }));

  const articleRoutes = articles.map((article) => ({
    url: `${siteUrl}/journal/${article.slug}`,
    lastModified: new Date(),
  }));

  return [...staticRoutes, ...projectRoutes, ...articleRoutes];
}
