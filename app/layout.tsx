import type { Metadata } from "next";
import localFont from "next/font/local";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Navigation } from "@/components/sections/Navigation";
import { Footer } from "@/components/sections/Footer";
import { MotionProvider } from "@/components/primitives/MotionProvider";
import "./globals.css";

// Self-hosted via next/font/local (not next/font/google — that CDN isn't
// reachable from this build environment, and self-hosting is arguably the
// better outcome anyway: zero external font-CDN dependency at runtime).
// Switched from a plain CSS @import approach to next/font/local specifically
// because Lighthouse flagged the @import chain as render-blocking; font
// files loaded this way get automatic preloading and font-display: swap.
const fraunces = localFont({
  variable: "--font-fraunces",
  display: "swap",
  src: [
    { path: "../assets/fonts/fraunces/fraunces-latin-400-normal.woff2", weight: "400", style: "normal" },
    { path: "../assets/fonts/fraunces/fraunces-latin-500-normal.woff2", weight: "500", style: "normal" },
    { path: "../assets/fonts/fraunces/fraunces-latin-600-normal.woff2", weight: "600", style: "normal" },
    { path: "../assets/fonts/fraunces/fraunces-latin-400-italic.woff2", weight: "400", style: "italic" },
  ],
});

const plexSans = localFont({
  variable: "--font-plex-sans",
  display: "swap",
  src: [
    { path: "../assets/fonts/plex-sans/ibm-plex-sans-latin-400-normal.woff2", weight: "400", style: "normal" },
    { path: "../assets/fonts/plex-sans/ibm-plex-sans-latin-500-normal.woff2", weight: "500", style: "normal" },
    { path: "../assets/fonts/plex-sans/ibm-plex-sans-latin-600-normal.woff2", weight: "600", style: "normal" },
  ],
});

const plexMono = localFont({
  variable: "--font-plex-mono",
  display: "swap",
  src: [
    { path: "../assets/fonts/plex-mono/ibm-plex-mono-latin-400-normal.woff2", weight: "400", style: "normal" },
    { path: "../assets/fonts/plex-mono/ibm-plex-mono-latin-500-normal.woff2", weight: "500", style: "normal" },
  ],
});

// NEXT_PUBLIC_SITE_URL is the single swap point for the domain decision
// (Blueprint Section 3 / ARCHITECTURE.md Section 8) — replace in .env when a
// real domain is registered; nothing else in the project needs to change.
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://placeholder-domain.example";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Sadiq Usman Nagoda",
    template: "%s — Sadiq Usman Nagoda",
  },
  description:
    "Software engineering portfolio of Sadiq Usman Nagoda — projects, writing, and engineering approach.",
  openGraph: {
    type: "website",
    siteName: "Sadiq Usman Nagoda",
    title: "Sadiq Usman Nagoda",
    description:
      "Software engineering portfolio of Sadiq Usman Nagoda — projects, writing, and engineering approach.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sadiq Usman Nagoda",
    description:
      "Software engineering portfolio of Sadiq Usman Nagoda — projects, writing, and engineering approach.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Sadiq Usman Nagoda",
    url: siteUrl,
    jobTitle: "Software Engineering Student",
    email: "sadiqnagoda1848@gmail.com",
    address: { "@type": "PostalAddress", addressLocality: "Kano", addressCountry: "NG" },
    sameAs: [
      "https://github.com/Sadiq-Nagoda",
      "https://linkedin.com/in/sadiq-nagoda-076225383",
    ],
    knowsLanguage: ["English", "Hausa", "Arabic"],
  };

  return (
    <html lang="en" className={`${fraunces.variable} ${plexSans.variable} ${plexMono.variable}`}>
      <body className="flex min-h-screen flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
        <MotionProvider>
          <Navigation />
          <main className="flex-1">{children}</main>
          <Footer />
        </MotionProvider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
