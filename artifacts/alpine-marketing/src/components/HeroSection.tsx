import { motion } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";
import { Link } from "wouter";
import FunnelAnimation from "./FunnelAnimation";

const CYAN   = "#f59e0b";
const EMERALD= "#10b981";
const AMBER  = "#f97316";

const PROOF_STATS = [
  { value: "32%",       label: "Avg. CAC Reduction",   color: EMERALD },
  { value: "3.4–4.2×",  label: "LTGP/CAC Ratio",       color: EMERALD },
  { value: "<60s",      label: "Lead Response Time",    color: AMBER   },
  { value: "20+",       label: "Swiss Clients",         color: "rgba(255,255,255,0.75)" },
];

const fadeUp = (delay = 0) => ({
  initial:  { opacity: 0, y: 22 },
  animate:  { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] as const },
});

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center pt-24 pb-12 overflow-hidden">

      {/* ── Background ── */}
      <div className="absolute inset-0" style={{ background: "#040c14" }} />
      {/* Fine grid */}
      <div className="absolute inset-0 bg-grid pointer-events-none" />
      {/* Cyan sweep top-left */}
      <div className="absolute pointer-events-none"
        style={{ top: "-12%", left: "-10%", width: 680, height: 580,
          background: `radial-gradient(ellipse at center, ${CYAN}1c 0%, transparent 68%)` }} />
      {/* Emerald accent bottom-right */}
      <div className="absolute pointer-events-none"
        style={{ bottom: "0", right: "0", width: 420, height: 340,
          background: `radial-gradient(ellipse at center, ${EMERALD}0f 0%, transparent 70%)` }} />

      <div className="relative max-w-7xl mx-auto px-5 md:px-8 z-10 w-full flex flex-col lg:flex-row items-center gap-10 lg:gap-12">

        {/* ── LEFT copy ── */}
        <div className="w-full lg:w-[56%] flex flex-col gap-5">

          {/* Eyebrow */}
          <motion.div {...fadeUp(0)}>
            <span className="inline-flex items-center gap-2 text-[11px] font-semibold tracking-[0.2em] uppercase px-3.5 py-1.5 rounded-full border"
              style={{ color: CYAN, borderColor: `${CYAN}30`, background: `${CYAN}0f`,
                       fontFamily: "'Space Grotesk', sans-serif" }}>
              <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: CYAN }} />
              For SMBs &amp; Tech Companies in Switzerland
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1 {...fadeUp(0.08)}
            className="text-[2.5rem] md:text-[3.1rem] lg:text-[3.5rem] font-bold text-white leading-[1.06] tracking-tight"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
            We Build the Machine That Turns Your Ad Spend Into{" "}
            <span className="text-transparent bg-clip-text"
              style={{ backgroundImage: `linear-gradient(120deg, ${CYAN} 0%, #fbbf24 45%, ${EMERALD} 100%)` }}>
              Predictable Profit.
            </span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p {...fadeUp(0.16)}
            className="text-[1rem] md:text-[1.08rem] leading-[1.8] max-w-[520px]"
            style={{ color: "rgba(255,255,255,0.48)", fontFamily: "'Inter', sans-serif", fontWeight: 400 }}>
            Alpine Marketing builds a full-funnel acquisition engine — from Meta &amp; Google Ads to
            AI-powered follow-up to closed deal — and gives you a dashboard showing your real CAC and
            Lifetime Gross Profit.{" "}
            <span style={{ color: "rgba(255,255,255,0.8)", fontWeight: 500 }}>
              Not clicks. Not impressions. Profit.
            </span>
          </motion.p>

          {/* CTAs */}
          <motion.div {...fadeUp(0.24)} className="flex flex-col sm:flex-row gap-3 pt-1">
            <Link href="/book-audit"
              className="group inline-flex items-center justify-center gap-2.5 px-7 py-3.5 font-semibold text-[15px] rounded-xl transition-all duration-200 active:scale-[0.98]"
              style={{ background: `linear-gradient(135deg, ${CYAN} 0%, #fbbf24 100%)`,
                       color: "#1a0e00", boxShadow: `0 0 28px ${CYAN}66, 0 4px 24px rgba(0,0,0,0.35)`,
                       fontFamily: "'Space Grotesk', sans-serif" }}
              data-testid="button-hero-primary">
              Get Your Free Pipeline Audit
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </Link>
            <a href="/#results"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-[15px] transition-all duration-200"
              style={{ color: "rgba(255,255,255,0.55)", border: "1px solid rgba(255,255,255,0.1)",
                       fontFamily: "'Space Grotesk', sans-serif" }}
              data-testid="button-hero-secondary">
              See Client Results
              <ChevronDown className="w-4 h-4" />
            </a>
          </motion.div>

          {/* Trust strip */}
          <motion.div {...fadeUp(0.32)} className="pt-5 border-t flex flex-wrap gap-x-5 gap-y-2"
            style={{ borderColor: "rgba(255,255,255,0.07)" }}>
            {PROOF_STATS.map((s, i) => (
              <div key={i} className="flex items-center gap-2">
                <span className="text-[15px] font-bold tabular-nums"
                  style={{ color: s.color, fontFamily: "'Space Grotesk', sans-serif" }}>
                  {s.value}
                </span>
                <span className="text-[12px]" style={{ color: "rgba(255,255,255,0.32)" }}>
                  {s.label}
                </span>
              </div>
            ))}
          </motion.div>
        </div>

        {/* ── RIGHT — Funnel animation card ── */}
        <motion.div className="w-full lg:w-[44%] flex-shrink-0"
          initial={{ opacity: 0, x: 28, y: 6 }}
          animate={{ opacity: 1, x: 0, y: 0 }}
          transition={{ duration: 0.75, delay: 0.28, ease: [0.22, 1, 0.36, 1] }}>

          <div className="relative rounded-2xl overflow-hidden"
            style={{ background: "rgba(8,16,28,0.9)", border: `1px solid ${CYAN}22`,
                     boxShadow: `0 32px 80px rgba(0,0,0,0.55), 0 0 60px ${CYAN}12` }}>
            {/* Top shimmer */}
            <div className="absolute top-0 left-0 right-0 h-px"
              style={{ background: `linear-gradient(90deg, transparent, ${CYAN}55, ${EMERALD}35, transparent)` }} />

            {/* Card titlebar */}
            <div className="flex items-center gap-2 px-4 pt-3 pb-2 border-b"
              style={{ borderColor: "rgba(255,255,255,0.05)" }}>
              <div className="flex gap-1">
                <span className="w-2.5 h-2.5 rounded-full bg-red-500/50" />
                <span className="w-2.5 h-2.5 rounded-full bg-amber-400/50" />
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400/50" />
              </div>
              <span className="text-[10px] font-medium ml-1 tracking-wider"
                style={{ color: "rgba(255,255,255,0.28)", fontFamily: "'Space Grotesk', sans-serif" }}>
                Pipeline Visualizer — Live
              </span>
            </div>

            {/* Animation */}
            <div style={{ minHeight: 420 }}>
              <FunnelAnimation />
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
