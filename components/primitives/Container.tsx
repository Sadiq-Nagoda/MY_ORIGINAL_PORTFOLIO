import type { ReactNode } from "react";

type ContainerProps = {
  children: ReactNode;
  className?: string;
  as?: "div" | "section" | "article";
};

/**
 * Shared horizontal rhythm for every page. Nothing else should hardcode
 * max-width or side padding — this is the single place that changes if the
 * measure ever needs adjusting (Blueprint Section 14: whitespace as an
 * intentional, consistent system, not per-section guesswork).
 */
export function Container({ children, className = "", as = "div" }: ContainerProps) {
  const Tag = as;
  return (
    <Tag className={`mx-auto w-full max-w-5xl px-6 md:px-10 ${className}`}>
      {children}
    </Tag>
  );
}
