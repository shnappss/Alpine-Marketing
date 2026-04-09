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
