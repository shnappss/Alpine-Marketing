# Replit Prompt: Alpine Marketing — Agency Website Build

## Project Overview

Build a full, responsive, production-grade marketing website for **Alpine Marketing**, a Zurich-based digital marketing agency specializing in **AI-powered lead generation and full-funnel CRM automation for SMBs and mid-market tech companies**. The site should be built with **Next.js (App Router) + Tailwind CSS + Framer Motion**, deployed on Replit.

The agency's core differentiator: **We don't just generate leads — we systematize your entire client acquisition engine and measure what actually matters: Customer Acquisition Cost (CAC) and Lifetime Gross Profit (LTGP), not vanity metrics.** Think of it as plugging every hole in a leaky bucket, not just pouring more water in.

---

## Brand Identity & Design Direction

### Aesthetic: "Swiss Precision Meets Tech-Forward Confidence"
- **Dark-dominant theme** (near-black backgrounds: `#0A0A0F`) with strategic contrast
- **Primary accent**: Electric violet/purple (`#7C3AED`) — used sparingly for CTAs, key metrics, and interactive states
- **Secondary accent**: Cool mint/teal (`#06D6A0`) — used for positive metrics, upward trends, success states
- **Warning/urgency accent**: Warm amber (`#F59E0B`) — used for "leaking" states, problem callouts
- **Typography**: Use a distinctive geometric sans-serif display font (e.g., "Cabinet Grotesk", "Satoshi", or "General Sans" from Google Fonts / CDN) paired with a clean body font ("Plus Jakarta Sans" or "DM Sans"). Avoid Inter, Roboto, Arial.
- **Design motifs**:
  - Subtle dot-grid or fine-line grid backgrounds (Swiss-inspired precision)
  - Metrics rendered as live-feeling dashboard cards with subtle glow effects
  - Animated gradient borders on hover for interactive elements
  - Generous whitespace with intentional density in data-heavy sections
  - Micro-interactions: numbers counting up, progress bars filling, funnel stages animating

### Logo
- The Alpine Marketing logo is a stylized mountain/arrow mark (black on white, white on dark). Use SVG. The logo features angular mountain shapes with upward-pointing arrows integrated into the peaks, spelling out an abstract "AM" shape. Below: "ALPINE MARKETING" in bold geometric caps.

---

## Site Architecture (Single-page scroll with nav anchors + optional separate case study pages)

### Navigation
- Sticky top nav, transparent on hero, solid dark on scroll
- Logo (left) + nav links: Problem · Solution · How It Works · Tech Stack · Results · Team · Contact
- CTA button in nav: "Get Your Free Audit" (accent color, subtle pulse animation)

---

## SECTION 1: HERO

### Layout
Full viewport height. Left-aligned text block (60%) with a right-side animated visualization (40%) showing a stylized funnel diagram where leads flow in at top and money flows out at bottom — but with visible "leak" points that get patched one by one with a looping animation.

### Copy

**Eyebrow (small caps, accent color):**
`FULL-FUNNEL AUTOMATION FOR SMBs`

**Headline (large, 2 lines max):**
`Stop Pouring Leads Into a Leaky Bucket.`

**Subheadline (lighter weight, max 2 lines):**
`Alpine Marketing builds AI-powered acquisition systems that plug every gap — from first click to lifetime profit. We measure what matters: your CAC goes down, your LTGP goes up.`

**CTA buttons (side by side):**
- Primary: `Book Your Free Pipeline Audit` → scrolls to contact/calendly
- Secondary (ghost/outline): `See the Results` → scrolls to case studies

**Social proof strip below CTAs (subtle, smaller text):**
`Trusted by 20+ Swiss SMBs · Average LTV/CAC improvement: 2.1× · Avg. CAC reduction: 32%`

**IMPORTANT DESIGN NOTE:** The hero should NOT look like a generic SaaS landing page. It should feel like a premium consulting firm's site with the energy of a tech startup. Think: dark, confident, data-rich, with one hero animation that immediately communicates "we fix your funnel."

---

## SECTION 2: THE PROBLEM (Why Most Marketing Fails)

### Layout
Dark section with a centered headline, then a 3-column card layout below. Each card has an icon, a metric, and explanation. Below the cards: a full-width animated "leaky bucket" visualization.

### Copy

**Section label (eyebrow):**
`THE CORE PROBLEM`

**Headline:**
`Your Marketing Isn't Broken. Your System Is.`

**Subtext:**
`Most agencies sell you clicks and impressions. But if your pipeline leaks at every stage — slow replies, no follow-up, zero reactivation — more traffic just means more waste. Here's where SMBs typically hemorrhage revenue:`

**Card 1 — The Speed Gap**
- Icon: Lightning bolt with clock
- Stat: `21×` (animated count-up)
- Text: `Leads contacted after 5 minutes are 21× less likely to convert. The average SMB response time? Over 2 hours. Every minute of delay is money evaporating.`

**Card 2 — The Follow-Up Black Hole**
- Icon: Broken chain / gap
- Stat: `78%` (animated count-up)
- Text: `of leads never receive a second touchpoint. No nurture sequence, no SMS, no reactivation. They expressed interest — and heard nothing back.`

**Card 3 — The Metrics Mirage**
- Icon: Dashboard with question mark
- Stat: `0 visibility`
- Text: `Most SMBs track clicks or "leads generated" but can't answer: "What does each customer actually cost me, and what's their lifetime gross profit?" Without CAC and LTGP, you're flying blind.`

**Below cards — Animated "Leaky Bucket" Visualization:**
A stylized bucket/funnel graphic where water (representing leads/revenue) pours in at the top but leaks from multiple holes at different stages: "Slow Reply" · "No Nurture" · "No Reactivation" · "No Tracking." Each hole is labeled. This sets up the solution: we plug each hole.

---

## SECTION 3: THE SOLUTION — Our Approach

### Layout
Transition from dark to slightly lighter dark. Full-width section with a centered headline, then a horizontal process flow (on desktop) / vertical steps (on mobile) showing the 4-stage system.

### Copy

**Section label:**
`THE ALPINE APPROACH`

**Headline:**
`We Don't Fix One Thing. We Systematize Everything.`

**Subtext:**
`Alpine Marketing replaces your patchwork of tools and manual effort with a unified, AI-powered acquisition engine. Every stage of your funnel — from first ad click to repeat purchase — runs on automation, measured by the only metrics that matter.`

**Process Flow — 4 Stages (horizontal connected nodes with arrows):**

**Stage 1: CAPTURE**
- Icon: Magnet/radar
- `Targeted traffic via Meta, Google & LinkedIn Ads, cold outreach, and SEO-optimized landing pages — all feeding into one centralized CRM pipeline.`

**Stage 2: ENGAGE**
- Icon: Lightning/chat bubble
- `AI Claude Agents respond within 60 seconds — 24/7. Intelligent triage determines intent, selects the right channel (SMS, email, WhatsApp), and initiates personalized conversation.`

**Stage 3: NURTURE**
- Icon: Flowchart/sequence
- `Multi-step automated sequences in GoHighLevel keep every lead warm. Reactivation campaigns recover 48%+ of dormant prospects. No lead is ever forgotten.`

**Stage 4: MEASURE & COMPOUND**
- Icon: Chart trending up with gear
- `Real-time dashboards track CAC, LTGP, conversion rates at every stage, and pipeline velocity. We optimize what we measure — and we measure what drives profit, not vanity.`

**Below the process flow, add a key differentiator callout box:**

> **Why LTGP, not just LTV?**
> Most agencies throw around "Lifetime Value" — but LTV ignores your cost of delivery. **Lifetime Gross Profit (LTGP)** is what's left after fulfillment costs. It's the number that tells you whether a client segment is actually worth acquiring. We optimize for profit, not revenue theater.

---

## SECTION 4: HOW IT WORKS (Technical Architecture — Simplified)

### Layout
Dark background with a centered diagram showing the three-tool stack as an interconnected system. Each tool gets a card with logo placeholder, name, and role.

### Copy

**Section label:**
`THE ENGINE UNDER THE HOOD`

**Headline:**
`Three Tools. Zero Manual Handoffs. One Unified System.`

**Subtext:**
`We built our stack for one purpose: maximum conversion with minimum human intervention. Every tool earns its place.`

**Tool 1: Claude AI Agents**
- Role tag: `THE BRAIN`
- `Intelligent lead qualification and real-time intent analysis. Claude reads every incoming lead, scores urgency, determines the best response, and generates personalized human-like messages — all before your team finishes their morning coffee.`

**Tool 2: n8n Workflow Automation**
- Role tag: `THE NERVOUS SYSTEM`
- `The connective tissue that links your ads, CRM, calendar, and reporting into a single automated pipeline. Custom workflows trigger instantly based on lead behavior — no Zapier tax, no duct tape.`

**Tool 3: GoHighLevel CRM**
- Role tag: `THE COMMAND CENTER`
- `Pipeline management, automated sequences, appointment booking, and omni-channel communication (SMS / Email / WhatsApp) — all in one platform your team actually uses.`

**Closing line for this section:**
`The result? A system that works while you sleep, scales without hiring, and gets smarter with every lead it processes.`

---

## SECTION 5: THE METRICS THAT MATTER (Dashboard-style section)

### Layout
This section should feel like a live analytics dashboard. Dark background with glowing card elements. Show 4-6 key metrics in large, animated number cards.

### Copy

**Section label:**
`WHAT WE ACTUALLY MEASURE`

**Headline:**
`Forget Vanity Metrics. Here's What Drives Growth.`

**Subtext:**
`Every Alpine client gets a real-time dashboard tracking the numbers that actually determine whether your business is growing profitably — or just growing costs.`

**Metric cards (animated count-up on scroll-into-view):**

| Metric | Display Value | Explanation |
|--------|-------------|-------------|
| CAC (Customer Acquisition Cost) | `↓ 32%` | Average reduction across our clients in the first 90 days |
| LTGP (Lifetime Gross Profit) | `↑ 2.4×` | Average improvement when full-funnel optimization is applied |
| Speed-to-Lead | `< 60s` | Average first response time with our AI system active |
| Pipeline Recovery Rate | `48%+` | Dormant leads reactivated through automated campaigns |
| Sales Cycle Reduction | `30-40%` | Faster from first touch to closed deal |
| LTV/CAC Ratio | `3.4 – 4.2:1` | Proven across dental, ICT, and professional services verticals |

**Below metrics, add a callout:**
`These aren't projections. They're measured results from live client dashboards. We show you the same numbers we use to optimize.`

---

## SECTION 6: CASE STUDIES / PROOF

### Layout
Two side-by-side case study cards (stacked on mobile). Each card is a dark, bordered panel with key results prominently displayed as large numbers.

### Copy

**Section label:**
`PROVEN RESULTS`

**Headline:**
`Real Numbers. Real Clients. Real Profit.`

---

**Case Study 1: Zurich Dental Clinic**

- **Industry badge:** Healthcare / Dental
- **Challenge:** `Grow patient pipeline while keeping acquisition costs sustainable.`
- **Approach:** `Meta Ads lead capture → Claude AI triage & qualification → GHL-driven nurture sequences + dormant patient reactivation.`
- **Timeline:** `3 months`
- **Results grid (large numbers with labels):**
  - `166` Leads Generated
  - `41` Patients Converted → `24.7%` conversion rate
  - `CHF 171` New CAC → `↓29%` reduction (from CHF 241)
  - `3.4:1` LTV/CAC Ratio → up from `1.9:1`
- **Source insight:** `51% from Meta Ads · 49% from AI Reactivation — nearly half the patients came from leads the clinic had already given up on.`

---

**Case Study 2: Swiss ICT Company**

- **Industry badge:** B2B Technology
- **Challenge:** `Accelerate enterprise software sales pipeline and reduce long sales cycles.`
- **Approach:** `LinkedIn & email campaigns → Claude AI lead qualification → n8n workflow automation → GHL CRM pipeline management.`
- **Timeline:** `12 months`
- **Results grid:**
  - `312` Qualified Leads
  - `67` Sales Meetings Booked → `21.5%` meeting rate
  - `28 days` Sales Cycle → `↓38%` (from 45 days)
  - `CHF 377` CAC → `↓35%` (from CHF 580)
  - `4.2:1` LTV/CAC → up from `2.1:1`
  - `CHF 487K` Revenue Impact in new contracts

---

## SECTION 7: AI vs. MANUAL — The Comparison

### Layout
Side-by-side comparison styled as two contrasting panels. Left panel (AI/Alpine): dark with accent glow, checkmarks. Right panel (Manual): slightly faded/greyed out, X marks.

### Copy

**Headline:**
`What Changes When You Systematize`

| Dimension | With Alpine AI Engine | With a Manual Sales Process |
|-----------|----------------------|---------------------------|
| Response Time | Under 60 seconds, around the clock | Whenever someone's available — often hours |
| Lead Qualification | Consistent, AI-scored, every single lead | Subjective, varies by rep, inconsistent |
| Scaling | Add volume without adding headcount | Every new lead needs another hire |
| Reporting | Real-time CAC, LTGP, pipeline velocity | Spreadsheets updated when someone remembers |
| Dormant Leads | Automatically reactivated via campaigns | Forgotten in a CRM graveyard |
| Sales Cycle | 30-40% shorter through automation | Depends on who's selling that week |

---

## SECTION 8: WHY ALPINE (Differentiators)

### Layout
Centered headline with a 2×2 or 2×3 grid of differentiator cards below.

### Copy

**Section label:**
`WHY ALPINE`

**Headline:**
`Built for SMBs Who Want Systems, Not Services.`

**Card 1: Full-Funnel, Not Fragment**
`Most agencies optimize one channel. We systematize your entire acquisition engine — from first impression to lifetime profit.`

**Card 2: Metrics That Mean Something**
`We track CAC and LTGP, not clicks and impressions. You'll always know exactly what a customer costs and what they're worth — in profit, not revenue.`

**Card 3: AI-First, Human-Guided**
`Claude AI Agents handle triage, qualification, and response. Your team handles relationships and closing. Everyone does what they're best at.`

**Card 4: Swiss Precision, Startup Speed**
`GDPR-compliant infrastructure, transparent reporting, real-time tracking — delivered with the urgency of a team that knows speed-to-lead wins.`

**Card 5: Automation That Compounds**
`Every lead that enters the system makes it smarter. Reactivation campaigns, A/B-tested sequences, and continuous optimization mean your CAC drops over time, not just once.`

**Card 6: Proven, Not Promised**
`3.4:1 to 4.2:1 LTV/CAC ratios across dental, ICT, and professional services. We show you the dashboard, not a pitch deck.`

---

## SECTION 9: TEAM

### Layout
Section with team photo circles in a clean grid. Each person has name + role. Keep it minimal and human.

### Copy

**Section label:**
`THE TEAM`

**Headline:**
`Operators, Not Theorists.`

**Subtext:**
`Every person on our team builds and runs the systems we sell. No account managers reading scripts — just specialists who've shipped automation for dozens of SMBs.`

**Team members (photo circle + name + role):**
1. **Roman Siladii** — Founder · CRM Funnels & Automation Strategy
2. **Alex Skylar** — Performance Marketing · Google & Meta Ads
3. **Eugen Kokayko** — Web Development & Automation Engineering
4. **Kate Dudnik** — SEO & Conversion Copywriting
5. **Alex Haladzhi** — Photo & Video Production
6. **Illya Mikulin** — Video Editing & Motion Design

---

## SECTION 10: CTA / CONTACT

### Layout
Full-width dark section with centered text and a prominent CTA. Below: embedded Calendly widget or a simple contact form (Name, Email, Company, "Biggest growth challenge" textarea).

### Copy

**Headline:**
`Ready to Stop the Leak?`

**Subtext:**
`Start with a free pipeline audit. We'll map your current funnel, identify where leads and revenue are falling through, and show you exactly what a systematized engine looks like for your business.`

**3-step process (horizontal, simple):**
1. `Free Pipeline Audit` — We diagnose where your funnel leaks.
2. `Custom 90-Day Sprint` — You get a tailored automation buildout plan with projected CAC/LTGP targets.
3. `Launch & Optimize` — We build, deploy, and continuously improve — with real-time metrics you can see anytime.

**CTA button (large, accent, centered):**
`Book Your Free Audit →`

**Below CTA, small trust line:**
`No commitment. No pitch deck. Just a 30-minute conversation about your numbers.`

---

## FOOTER

- Logo + tagline: `Alpine Marketing · Systematized Growth for SMBs`
- Links: Privacy Policy · Impressum · LinkedIn · Email
- Location: `Zurich, Switzerland`
- Small print: `© 2026 Alpine Marketing. All rights reserved.`

---

## Technical Requirements

1. **Framework:** Next.js 14+ with App Router, Tailwind CSS, Framer Motion for animations
2. **Responsive:** Mobile-first, breakpoints at 640/768/1024/1280px
3. **Performance:** Lazy-load below-fold sections, optimize images, aim for 90+ Lighthouse
4. **Animations:**
   - Hero funnel animation (CSS/SVG preferred, Lottie acceptable)
   - Scroll-triggered count-up animations for all metric numbers
   - Smooth scroll between sections
   - Subtle parallax on background grid elements
   - Card hover states with gradient border glow
5. **SEO:** Proper meta tags, Open Graph, semantic HTML, structured data for LocalBusiness
6. **Forms:** Contact form with basic validation, connected to email or webhook (n8n-ready)
7. **Accessibility:** WCAG 2.1 AA compliant, proper contrast ratios, keyboard navigation
8. **Fonts:** Load from Google Fonts CDN — primary display + body pair as specified in design direction
9. **No stock photos of smiling people.** Use abstract data visualizations, subtle grid patterns, and the animated funnel/bucket motif as primary visual elements. Team photos are the only real photos on the site.

---

## Copy Tone Guide

- **Voice:** Confident, direct, zero fluff. We're operators, not brand poets.
- **Perspective:** "We" (Alpine) speaking to "you" (the SMB owner/marketing lead).
- **Avoid:** Buzzwords without substance ("synergy," "leverage," "disrupt"), generic agency language ("we're passionate about results"), and anything that sounds like it was written by a committee.
- **Embrace:** Specific numbers, technical credibility (name the tools), honest framing of problems, and the occasional sharp line that makes a prospect think "these people actually get it."
- **Metric language:** Always pair a number with context. Not just "32% reduction" but "32% CAC reduction in the first 90 days." Not just "LTV/CAC 3.4:1" but "3.4:1 — meaning every franc you spend on acquisition returns 3.4 in customer value."
- **Key phrases to weave throughout:**
  - "Systematized growth" (not just "growth")
  - "Leaky bucket" (the problem metaphor)
  - "Full-funnel" (not single-channel)
  - "CAC and LTGP" (the metrics that matter)
  - "Automation that compounds" (gets better over time)
  - "Plug every hole" (the solution metaphor)

---

## Glossary of Key Terms (for consistent usage across the site)

- **CAC** = Customer Acquisition Cost. Total spend to acquire one paying customer.
- **LTGP** = Lifetime Gross Profit. Total revenue from a customer minus cost of delivery — NOT the same as LTV, which ignores fulfillment costs. This is the number that actually tells you if a customer segment is profitable.
- **LTV/CAC Ratio** = How many francs of customer value you get per franc spent acquiring them. Target: ≥ 3:1.
- **Speed-to-Lead** = Time between a lead submitting and receiving first contact. Industry data: after 5 minutes, conversion drops 21×.
- **Pipeline Velocity** = Speed at which leads move through your funnel stages. Faster = shorter sales cycles = lower CAC.
- **Reactivation Rate** = Percentage of dormant/lost leads recovered through re-engagement campaigns.
- **GHL** = GoHighLevel, an all-in-one CRM platform for SMBs.
- **n8n** = Open-source workflow automation tool (alternative to Zapier, more flexible and cost-effective at scale).
- **Claude AI Agents** = Anthropic's AI used for lead qualification, intent analysis, and personalized response generation.
