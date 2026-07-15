import Image from "next/image";
import type { Project } from "@/lib/types";

/**
 * Displays project screenshots.
 * Falls back to a placeholder until screenshots are available.
 */
export function ScreenshotBlock({ project }: { project: Project }) {
  if (
    project.screenshots.state === "available" &&
    project.screenshots.images?.length
  ) {
    return (
      <div className="space-y-6">
        {project.screenshots.images.map((src) => (
          <div
            key={src}
            className="overflow-hidden rounded-xl border border-foreground/10"
          >
            <Image
              src={src}
              alt={`${project.title} screenshot`}
              width={1600}
              height={900}
              className="w-full h-auto object-cover"
              priority
            />
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="aspect-video w-full rounded-xl border border-dashed border-foreground/20 flex items-center justify-center">
      <p className="font-mono text-xs text-foreground/70 tracking-wide">
        Visual documentation in progress
      </p>
    </div>
  );
}