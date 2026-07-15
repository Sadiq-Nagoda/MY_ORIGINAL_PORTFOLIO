# Studio Obsidian

Sadiq Usman Nagoda's software engineering portfolio. Next.js (App Router) + TypeScript + Tailwind CSS v4 + Framer Motion.

## Getting started

```bash
npm install
cp .env.example .env.local   # fill in RESEND_API_KEY when ready
npm run dev
```

## Scripts

- `npm run dev` — local development server
- `npm run build` — production build
- `npm run start` — serve the production build locally
- `npm run lint` — ESLint
- `npm run a11y` — runs a real axe-core accessibility audit against a running server. Start the server first (`npm run start` in one terminal), then run this in another.
- `npm run screenshot` — captures real screenshots of key pages at desktop and mobile viewports (`npx playwright install chromium` once, first time only; then start the server before running this, same as `a11y`).

## Resume

The downloadable resume is stored at:

public/resume.pdf

To update the resume, replace `public/resume.pdf` with the latest version.

## Environment variables

See `.env.example`. `NEXT_PUBLIC_SITE_URL` is the single place the domain is configured — update it once a real domain exists; nothing else in the project needs to change.

## Known open items

See `PROJECT_STATE.md` for the full list. The two that affect this project's content directly:

1. **Academic level** — the uploaded résumé states Level 400; earlier conversation confirmed Level 300. `content/resume.ts` deliberately omits a specific level until this is confirmed.
2. **Two résumé lines were too garbled to publish confidently** (a Microsoft-adjacent ML certification, and a "DevTown / 2027" entry) — held out of `content/resume.ts` and the generated PDF rather than guessed at.

## Content that's structurally ready but currently empty

- **Journal** (`content/journal/index.ts`) — no articles exist yet. The index page shows an honest empty state rather than placeholder posts. Add real entries to `articles: Article[]` (or wire up MDX rendering) once there's something to publish.
- **Project screenshots** — every project currently renders a "Visual documentation in progress" placeholder (`components/content/ScreenshotBlock.tsx`). Set `screenshots: { state: "available", images: [...] }` in the relevant `content/projects/*.ts` file once real screenshots exist — no redesign needed.
- **Per-project GitHub links** — currently default to the general profile (`github.com/Sadiq-Nagoda`). Update `githubUrl` in each project file with exact repo paths whenever convenient.
