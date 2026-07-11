"use client";

import { LazyMotion, domAnimation } from "framer-motion";
import type { ReactNode } from "react";

/**
 * Loads Framer Motion's domAnimation feature set once, ambiently, for the
 * whole app. Individual components use the lightweight `m.*` primitives
 * (never the full `motion.*` import) so the animation bundle stays small —
 * this is the concrete implementation of Blueprint Section 17's bundle-size
 * discipline for a stack that ships more JS than a static-first framework by
 * default.
 */
export function MotionProvider({ children }: { children: ReactNode }) {
  return <LazyMotion features={domAnimation}>{children}</LazyMotion>;
}
