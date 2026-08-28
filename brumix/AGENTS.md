# brumix

Landing page for Brumix (concreto usinado, litoral norte catarinense).
React + Vite + Tailwind CSS v4. Plain, standard Vite app — no Figma Make
coupling.

## Commands

- `npm run dev` — start the Vite dev server (defaults to port 5173, or `$PORT`)
- `npm run build` — production build to `dist/`
- `npm run preview` — serve the production build locally
- `npm run typecheck` — `tsc --noEmit`
- `npm run format` — format with oxfmt

Node 20+ (pinned to 22 via `.nvmrc` / `.mise.toml`).

## Project structure

- `index.html` — Vite HTML shell, mounts `#root`
- `src/main.tsx` — entrypoint; loads `@fontsource/inter` weights, `src/index.css`, mounts `src/App.tsx`
- `src/App.tsx` — app shell; renders the landing page
- `src/components/BrumixLanding/` — the landing page
  - `BrumixLanding.tsx` — the full page (originally a Figma export, now plain React/Tailwind)
  - `svg-paths.ts` — extracted SVG path data used by the icons
  - `useScrollAnimations.ts` — GSAP + ScrollTrigger scroll-linked animations (progress bar, hero parallax, stat counters, per-section reveal via `[data-reveal]`); no-ops under `prefers-reduced-motion`
  - `*.png` — hero / section imagery
- `src/index.css` — Tailwind v4 entry (`@import "tailwindcss";`) + base font-family
- `vite.config.ts` — React plugin, Tailwind v4 plugin, `@` → `src` alias
- `public/` — static files served as-is: `robots.txt`, `llms.txt`, `sitemap.xml`,
  `.well-known/ai.txt`, `ai/summary.json`, `ai/faq.json`, `og-image.jpg`, `logo.png`
  (see "GEO / AI visibility" below)

## Styling

Tailwind CSS v4 via `@tailwindcss/vite`. No `tailwind.config` and no PostCSS
config needed. Put global CSS and Tailwind theme customization in
`src/index.css` (keep `@import` statements first).

Inter is self-hosted through `@fontsource/inter` (imported in `src/main.tsx`) —
no external font CDN.

## Notes

- `BrumixLanding.tsx` started as machine-generated Figma output (deeply nested
  `Frame*` components, 1440px canvas). It has since had a responsive pass:
  mobile-first with `sm`/`md`/`lg` breakpoints, the desktop pixel values kept
  behind `lg:`. Section padding is `px-5 md:px-10 lg:px-[100px]`; headings use a
  `text-[Npx] sm:text-[Npx] lg:text-[Npx]` scale; rows that were side-by-side
  stack with `flex-col lg:flex-row`; the header collapses to a hamburger
  (`useState`) below `lg`. Keep new elements responsive in the same style.
- Use double quotes for strings containing apostrophes, or escape them.

## GEO / AI visibility

This is a client-rendered SPA (no SSR/SSG), so AI crawlers that don't execute
JavaScript (GPTBot, ClaudeBot, PerplexityBot, etc.) see an empty `<div
id="root">` unless the raw HTML carries real content. Two things cover that:

- `index.html` `<head>` — canonical link, Open Graph/Twitter tags, and three
  `<script type="application/ld+json">` blocks (WebSite, LocalBusiness, FAQPage).
  Static, always sent, always in sync with the code below it.
- `index.html` `<noscript>` — a plain-text mirror of the hero/services/pricing/
  contact copy for non-JS crawlers. **Keep this in sync by hand** whenever that
  copy changes in `BrumixLanding.tsx` — nothing enforces it automatically.

`public/llms.txt`, `public/ai/summary.json`, and `public/ai/faq.json` carry the
same facts (company info, services, phone, address) in the formats those specs
expect — update them together with the JSON-LD/noscript block, not separately.
Every fact in all of these (phone, address, years in business, fleet size,
services) must trace back to real copy in `BrumixLanding.tsx`; never fill a gap
with a placeholder.

Audited and generated with the [`geo-optimizer-skill`](.claude/skills/geo-optimizer/SKILL.md)
project skill (`geo audit --url https://brumixconcreto.com.br`) — see that file
for the full workflow and the `geo` CLI install step.
