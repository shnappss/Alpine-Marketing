# Workspace

## Overview

pnpm workspace monorepo using TypeScript. Each package manages its own dependencies.

## Artifacts

### Alpine Marketing Website (`artifacts/alpine-marketing`)
- **Type:** React + Vite (static frontend)
- **Preview path:** `/`
- **Purpose:** Full marketing website for Alpine Marketing agency (Zurich-based)
- **Stack:** React, Vite, Tailwind CSS v4, Framer Motion, Wouter, Lucide React, react-icons
- **Fonts:** Syne (display/headings) + DM Sans (body) via Google Fonts
- **Theme:** Dark-dominant (#0A0A0F), violet accent, mint/teal positive, amber warning

#### Key Components
- `src/pages/Home.tsx` — Main single-page composition
- `src/components/Nav.tsx` — Sticky nav with scroll effect
- `src/components/HeroSection.tsx` — Hero + animated SVG funnel
- `src/components/FunnelAnimation.tsx` — Animated leaky bucket funnel SVG (framer-motion)
- `src/components/ProblemSection.tsx` — 3-card problem grid with count-up animations
- `src/components/SolutionSection.tsx` — 4-stage process flow
- `src/components/TechStackSection.tsx` — Claude AI / n8n / GoHighLevel cards
- `src/components/MetricsSection.tsx` — Dashboard-style metrics with count-up
- `src/components/CaseStudiesSection.tsx` — Zurich Dental + Swiss ICT case studies
- `src/components/ComparisonSection.tsx` — AI vs Manual comparison
- `src/components/WhyAlpineSection.tsx` — 6-card differentiator grid
- `src/components/TeamSection.tsx` — Team section with photo
- `src/components/ContactSection.tsx` — CTA + contact form
- `src/components/Footer.tsx` — Footer with logo, links
- `src/hooks/useCountUp.ts` — Framer Motion count-up hook

#### Internationalization (i18n)
- **All 26 languages ship with full native translations**: 24 official EU languages + Ukrainian + Russian
- Locale files: `src/i18n/locales/<code>.json` (en, de, fr, it, uk, ru, es, pt, nl, pl, sv, da, fi, el, cs, sk, sl, hu, ro, bg, hr, et, lv, lt, mt, ga)
- Config: `src/i18n/index.ts` — i18next with browser language detection (querystring `?lng=xx`, localStorage `alpine-lang`, navigator)
- Translation script: `.local/translate-locales.mjs` — uses Anthropic Claude (claude-sonnet-4-6) via Replit AI Integrations to translate `en.json` into a target language; chunks by top-level key for parallel calls; auto-repairs JSON when the model uses ASCII `"` instead of localized closing quotes. Re-run with `node .local/translate-locales.mjs <code>[,<code>...]` after editing en.json to regenerate translations.
- Blog posts are also language-aware: each post exports `getLocalizedMeta(lang)` and a body component selected by current language; posts use the post's localized meta for title/excerpt/date and pick the matching body (English fallback for unsupported languages).

#### Assets
- Logo: `attached_assets/Screenshot_2026-03-22_at_21.14.04_1775773255892.png` (inverted in dark theme)
- Team: `attached_assets/Screenshot_2026-03-23_at_01.32.28_1775773255892.png`

## Stack

- **Monorepo tool**: pnpm workspaces
- **Node.js version**: 24
- **Package manager**: pnpm
- **TypeScript version**: 5.9
- **API framework**: Express 5
- **Database**: PostgreSQL + Drizzle ORM
- **Validation**: Zod (`zod/v4`), `drizzle-zod`
- **API codegen**: Orval (from OpenAPI spec)
- **Build**: esbuild (CJS bundle)

## Key Commands

- `pnpm run typecheck` — full typecheck across all packages
- `pnpm run build` — typecheck + build all packages
- `pnpm --filter @workspace/api-spec run codegen` — regenerate API hooks and Zod schemas from OpenAPI spec
- `pnpm --filter @workspace/db run push` — push DB schema changes (dev only)
- `pnpm --filter @workspace/api-server run dev` — run API server locally

See the `pnpm-workspace` skill for workspace structure, TypeScript setup, and package details.
