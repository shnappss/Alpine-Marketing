import { motion } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";
import { Link } from "wouter";
import EngineAnimation from "./EngineAnimation";

const VIOLET = "#7c3aed";
const MINT   = "#06d6a0";
const AMBER  = "#f59e0b";

const PROOF_STATS = [
  { value: "32%",      label: "Avg. CAC Reduction" },
  { value: "3.4–4.2×", label: "LTGP/CAC Ratio" },
  { value: "<60s",     label: "Lead Response Time" },
  { value: "20+",      label: "Swiss Clients" },
];

/* fade-up variant */
const fadeUp = (delay = 0) => ({
  initial:  { opacity: 0, y: 22 },
  animate:  { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] },
});

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden">

      {/* ── Background ── */}
      <div className="absolute inset-0 bg-[#06060e]" />
      {/* Grid overlay */}
      <div className="absolute inset-0 bg-grid opacity-100 pointer-events-none" />
      {/* Violet radial glow — top left */}
      <div
        className="absolute pointer-events-none"
        style={{
          top: "-10%", left: "-8%",
          width: 700, height: 600,
          background: `radial-gradient(ellipse at center, ${VIOLET}28 0%, transparent 68%)`,
          filter: "blur(2px)",
        }}
      />
      {/* Mint radial glow — bottom right */}
      <div
        className="absolute pointer-events-none"
        style={{
          bottom: "0%", right: "-5%",
          width: 480, height: 400,
          background: `radial-gradient(ellipse at center, ${MINT}12 0%, transparent 68%)`,
        }}
      />

      <div className="relative max-w-7xl mx-auto px-5 md:px-8 z-10 w-full flex flex-col lg:flex-row items-center gap-10 lg:gap-14">

        {/* ── LEFT: Copy ── */}
        <div className="w-full lg:w-[58%] flex flex-col gap-5">

          {/* Eyebrow */}
          <motion.div {...fadeUp(0)}>
            <span
              className="inline-flex items-center gap-2 text-[11px] font-semibold tracking-[0.2em] uppercase px-3.5 py-1.5 rounded-full border"
              style={{
                color: VIOLET,
                borderColor: `${VIOLET}35`,
                background: `${VIOLET}12`,
                fontFamily: "'Space Grotesk', sans-serif",
              }}
            >
              <span
                className="w-1.5 h-1.5 rounded-full animate-pulse"
                style={{ background: VIOLET }}
              />
              For SMBs &amp; Tech Companies in Switzerland
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            {...fadeUp(0.08)}
            className="text-[2.5rem] md:text-[3rem] lg:text-[3.5rem] font-bold text-white leading-[1.06] tracking-tight"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            We Build the Machine That Turns Your Ad Spend Into{" "}
            <span
              className="text-transparent bg-clip-text"
              style={{
                backgroundImage: `linear-gradient(120deg, ${VIOLET} 0%, #a78bfa 45%, ${MINT} 100%)`,
              }}
            >
              Predictable Profit.
            </span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            {...fadeUp(0.16)}
            className="text-[1rem] md:text-[1.1rem] leading-[1.8] max-w-[540px]"
            style={{ color: "rgba(255,255,255,0.5)", fontFamily: "'Inter', sans-serif", fontWeight: 400 }}
          >
            Alpine Marketing builds a full-funnel acquisition engine — from Meta &amp; Google Ads to AI-powered
            follow-up to closed deal — and gives you a dashboard that shows your real CAC and Lifetime Gross
            Profit.{" "}
            <span style={{ color: "rgba(255,255,255,0.82)", fontWeight: 500 }}>
              Not clicks. Not impressions. Profit.
            </span>
          </motion.p>

          {/* CTAs */}
          <motion.div {...fadeUp(0.24)} className="flex flex-col sm:flex-row gap-3 pt-1">
            <Link
              href="/book-audit"
              className="group inline-flex items-center justify-center gap-2.5 px-7 py-3.5 font-semibold text-[15px] text-white rounded-xl transition-all duration-200 active:scale-[0.98]"
              style={{
                background: `linear-gradient(135deg, ${VIOLET} 0%, #9f5ff1 100%)`,
                boxShadow: `0 0 28px ${VIOLET}55, 0 4px 24px rgba(0,0,0,0.35)`,
                fontFamily: "'Space Grotesk', sans-serif",
              }}
              data-testid="button-hero-primary"
              onMouseEnter={e => (e.currentTarget as HTMLElement).style.boxShadow = `0 0 40px ${VIOLET}80, 0 4px 28px rgba(0,0,0,0.4)`}
              onMouseLeave={e => (e.currentTarget as HTMLElement).style.boxShadow = `0 0 28px ${VIOLET}55, 0 4px 24px rgba(0,0,0,0.35)`}
            >
              Get Your Free Pipeline Audit
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </Link>

            <a
              href="/#results"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-[15px] transition-all duration-200 hover:bg-white/[0.05]"
              style={{
                color: "rgba(255,255,255,0.6)",
                border: "1px solid rgba(255,255,255,0.1)",
                fontFamily: "'Space Grotesk', sans-serif",
              }}
              data-testid="button-hero-secondary"
            >
              See Client Results
              <ChevronDown className="w-4 h-4" />
            </a>
          </motion.div>

          {/* Social proof strip */}
          <motion.div
            {...fadeUp(0.34)}
            className="pt-5 border-t flex flex-wrap gap-x-6 gap-y-2"
            style={{ borderColor: "rgba(255,255,255,0.07)" }}
          >
            {PROOF_STATS.map((s, i) => (
              <div key={i} className="flex items-center gap-2">
                <span
                  className="text-[15px] font-bold tabular-nums"
                  style={{
                    color: i === 0 || i === 1 ? MINT : i === 2 ? AMBER : "rgba(255,255,255,0.85)",
                    fontFamily: "'Space Grotesk', sans-serif",
                  }}
                >
                  {s.value}
                </span>
                <span className="text-[12px]" style={{ color: "rgba(255,255,255,0.35)", fontFamily: "'Inter', sans-serif" }}>
                  {s.label}
                </span>
              </div>
            ))}
          </motion.div>
        </div>

        {/* ── RIGHT: Engine animation card ── */}
        <motion.div
          className="w-full lg:w-[42%] flex-shrink-0"
          initial={{ opacity: 0, x: 30, y: 6 }}
          animate={{ opacity: 1, x: 0, y: 0 }}
          transition={{ duration: 0.75, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Card */}
          <div
            className="relative rounded-2xl overflow-hidden"
            style={{
              background: "rgba(12,10,22,0.85)",
              border: "1px solid rgba(124,58,237,0.2)",
              boxShadow: `0 32px 80px rgba(0,0,0,0.55), 0 0 60px ${VIOLET}14`,
            }}
          >
            {/* Top shimmer line */}
            <div
              className="absolute top-0 left-0 right-0 h-px"
              style={{ background: `linear-gradient(90deg, transparent, ${VIOLET}60, ${MINT}40, transparent)` }}
            />

            {/* Card header label */}
            <div
              className="flex items-center gap-2 px-4 pt-3 pb-2 border-b"
              style={{ borderColor: "rgba(255,255,255,0.05)" }}
            >
              <div className="flex gap-1">
                <span className="w-2.5 h-2.5 rounded-full bg-red-500/60" />
                <span className="w-2.5 h-2.5 rounded-full bg-amber-400/60" />
                <span className="w-2.5 h-2.5 rounded-full bg-green-400/60" />
              </div>
              <span
                className="text-[10px] font-medium ml-1"
                style={{ color: "rgba(255,255,255,0.3)", fontFamily: "'Space Grotesk', sans-serif", letterSpacing: "0.08em" }}
              >
                Alpine Growth Engine™ — Live View
              </span>
            </div>

            {/* Animation */}
            <div style={{ minHeight: 390 }}>
              <EngineAnimation />
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
