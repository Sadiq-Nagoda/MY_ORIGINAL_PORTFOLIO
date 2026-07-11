"use client";

import { m, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";
import type { ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  as?: "div" | "section" | "article" | "li";
};

/**
 * The one section-reveal pattern used sitewide (Blueprint Section 14):
 * fade + small vertical movement, nothing else. No fly-ins, no rotation, no
 * scale.
 *
 * Important robustness fix: Framer Motion's `initial` prop applies
 * synchronously during server rendering, which means an `opacity: 0` initial
 * state gets baked directly into the HTML a crawler, slow connection, or
 * no-JS visitor would see — confirmed directly via `curl` during review,
 * where every revealed section shipped `style="opacity:0"` in the raw
 * markup. That's real content risk for something that's supposed to make
 * the page feel handcrafted, not broken.
 *
 * Fix: render fully visible, unanimated content until after client-side
 * mount, then opt into the scroll-reveal treatment. SSR output and any
 * environment that doesn't run JS always sees complete, visible content;
 * capable browsers get the subtle motion as a pure enhancement on top.
 */
export function Reveal({ children, className = "", delay = 0, as = "div" }: RevealProps) {
  const shouldReduceMotion = useReducedMotion();
  const [mounted, setMounted] = useState(false);
  const Component = m[as];

  // Deliberate one-time mount-detection gate for SSR/hydration safety (see
  // comment above) — not the repeated-cascading-render pattern this rule
  // targets.
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
  }, []);

  if (!mounted || shouldReduceMotion) {
    const Static = as;
    return <Static className={className}>{children}</Static>;
  }

  return (
    <Component
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.4, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </Component>
  );
}
