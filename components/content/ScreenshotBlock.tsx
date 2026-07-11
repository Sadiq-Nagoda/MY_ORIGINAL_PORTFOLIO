import type { Project } from "@/lib/types";

/**
 * Renders real screenshots when available. When none exist yet, shows a
 * deliberate, calm placeholder at the same aspect ratio real images will
 * use — not a broken-image icon, not a "COMING SOON" banner, not a fake
 * screenshot. Swapping `screenshots.state` to "available" with real image
 * paths is the only change needed later (Blueprint Section 3).
 */
export function ScreenshotBlock({ project }: { project: Project }) {
  if (project.screenshots.state === "available" && project.screenshots.images?.length) {
    return (
      <div className="grid gap-4 sm:grid-cols-2">
        {project.screenshots.images.map((src) => (
          // eslint-disable-next-line @next/next/no-img-element -- static project screenshots, dimensions vary per capture
          <img
            key={src}
            src={src}
            alt={`${project.title} screenshot`}
            className="w-full rounded-md border border-foreground/10 aspect-video object-cover"
          />
        ))}
      </div>
    );
  }

  return (
    <div className="aspect-video w-full rounded-md border border-dashed border-foreground/20 flex items-center justify-center">
      <p className="font-mono text-xs text-foreground/70 tracking-wide">
        Visual documentation in progress
      </p>
    </div>
  );
}
