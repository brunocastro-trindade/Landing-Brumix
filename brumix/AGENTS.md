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
