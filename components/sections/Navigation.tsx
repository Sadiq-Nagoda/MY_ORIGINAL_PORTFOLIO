"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { AnimatePresence, m } from "framer-motion";
import { Container } from "@/components/primitives/Container";

const links = [
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/journal", label: "Journal" },
  { href: "/resume", label: "Resume" },
  { href: "/contact", label: "Contact" },
];

export function Navigation() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="border-b border-foreground/10">
      <Container>
        <nav
          aria-label="Primary"
          className="flex h-16 items-center justify-between"
        >
          <Link
            href="/"
            className="font-display text-lg tracking-tight focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-hover focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded-sm"
            onClick={() => setOpen(false)}
          >
            Sadiq Usman Nagoda
          </Link>

          {/* Desktop links */}
          <ul className="hidden md:flex items-center gap-8">
            {links.map((link) => {
              const active = pathname === link.href;
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    aria-current={active ? "page" : undefined}
                    className={`font-body text-sm transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-hover focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded-sm ${
                      active
                        ? "text-foreground underline underline-offset-4"
                        : "text-foreground/70 hover:text-foreground"
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>

          {/* Mobile toggle */}
          <button
            type="button"
            className="md:hidden font-body text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-hover focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded-sm px-2 py-1"
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? "Close" : "Menu"}
          </button>
        </nav>
      </Container>

      {/* Mobile panel — opacity + transform only, per Section 14 */}
      <AnimatePresence initial={false}>
        {open && (
          <m.div
            id="mobile-nav"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="md:hidden border-b border-foreground/10"
          >
            <Container>
              <ul className="flex flex-col gap-1 py-4">
                {links.map((link) => {
                  const active = pathname === link.href;
                  return (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        aria-current={active ? "page" : undefined}
                        onClick={() => setOpen(false)}
                        className={`block py-2 font-body text-base ${
                          active ? "text-foreground underline underline-offset-4" : "text-foreground/70"
                        }`}
                      >
                        {link.label}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </Container>
          </m.div>
        )}
      </AnimatePresence>
    </header>
  );
}
