import { motion } from "framer-motion";
import { Megaphone, MousePointerClick, GitBranch, MessageSquare, RefreshCw, BarChart3 } from "lucide-react";

const STEPS = [
  {
    number: "01",
    icon: Megaphone,
    title: "Attract",
    desc: "Paid traffic on Meta, Google & LinkedIn targets the right prospects. Landing pages built to convert, not impress. Full-funnel ad architecture: TOF awareness, MOF retargeting, BOF conversion.",
    accent: "cyan",
  },
  {
    number: "02",
    icon: MousePointerClick,
    title: "Capture",
    desc: "Every lead from every source lands in one centralized CRM pipeline — no spreadsheets, no duplicates. Attribution tracked from first click so every CHF of ad spend is accountable.",
    accent: "cyan",
  },
  {
    number: "03",
    icon: GitBranch,
    title: "Route & Score",
    desc: "Leads are automatically scored, segmented, and routed by intent signal, source, and service type. The right lead hits the right workflow in seconds — not hours.",
    accent: "emerald",
  },
  {
    number: "04",
    icon: MessageSquare,
    title: "Engage (AI, <60s)",
    desc: "Claude AI responds within 60 seconds, 24/7. It qualifies, books, and hands off to your team only when the lead is ready. No human time wasted on cold or unqualified conversations.",
    accent: "emerald",
  },
  {
    number: "05",
    icon: RefreshCw,
    title: "Nurture & Reactivate",
    desc: "Multi-step sequences keep every lead warm across email, SMS and WhatsApp. Dormant contacts get reactivation campaigns. Our reactivation sequences alone recover 48%+ of lost opportunities.",
    accent: "amber",
  },
  {
    number: "06",
    icon: BarChart3,
    title: "Measure & Compound",
    desc: "Real-time dashboards track CAC, LTGP, speed-to-lead, show-up rates and pipeline velocity. We optimize what we measure — and we only measure what drives profit, not vanity.",
    accent: "amber",
  },
];

const ACCENT_MAP: Record<string, { text: string; border: string; bg: string; glow: string }> = {
  cyan:    { text: "text-primary",     border: "border-primary/20",     bg: "bg-primary/8",     glow: "rgba(34,211,238,0.15)" },
  emerald: { text: "text-secondary",   border: "border-secondary/20",   bg: "bg-secondary/8",   glow: "rgba(16,185,129,0.12)" },
  amber:   { text: "text-amber-400",   border: "border-amber-400/20",   bg: "bg-amber-400/8",   glow: "rgba(245,158,11,0.12)" },
};

export default function SystemSection() {
  return (
    <section id="how-it-works" className="py-24 border-t border-white/5 relative overflow-hidden"
             style={{ background: "#0a1120" }}>
      <div className="absolute inset-0 bg-grid opacity-60 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-5 md:px-8 relative z-10">

        {/* ── Header ── */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.span
            initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
            className="text-primary font-bold tracking-widest text-xs uppercase mb-4 block"
            style={{ fontFamily: "'Space Grotesk', sans-serif", letterSpacing: "0.2em" }}>
            The Alpine Approach
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold mb-5 text-white">
            We Don't Fix One Thing.<br className="hidden sm:block" /> We Systematize Everything.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ delay: 0.18 }}
            className="text-lg text-muted-foreground leading-relaxed">
            Six interlocking steps. One engine. Every lead tracked from first click to closed deal — 
            measured by the only metrics that actually determine profitability.
          </motion.p>
        </div>

        {/* ── Step grid ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-14">
          {STEPS.map((step, i) => {
            const a = ACCENT_MAP[step.accent];
            return (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ delay: i * 0.08, duration: 0.5 }}
                className={`relative bg-card rounded-xl border ${a.border} p-7 flex flex-col gap-4 group hover:bg-white/[0.02] transition-all duration-300`}
                style={{ boxShadow: `0 0 0 transparent` }}
                onMouseEnter={e => (e.currentTarget as HTMLElement).style.boxShadow = `0 8px 40px ${a.glow}`}
                onMouseLeave={e => (e.currentTarget as HTMLElement).style.boxShadow = `0 0 0 transparent`}>

                <div className="flex items-start justify-between">
                  <div className={`w-11 h-11 rounded-xl ${a.bg} border ${a.border} flex items-center justify-center flex-shrink-0`}>
                    <step.icon className={`w-5 h-5 ${a.text}`} />
                  </div>
                  <span className="text-[3rem] font-extrabold leading-none select-none"
                        style={{ color: "rgba(255,255,255,0.04)" }}>
                    {step.number}
                  </span>
                </div>

                <div>
                  <h3 className={`text-lg font-bold text-white mb-2 ${a.text}`}
                      style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                    {step.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{step.desc}</p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* ── LTGP callout ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="relative bg-card rounded-2xl border border-primary/20 max-w-4xl mx-auto overflow-hidden p-8"
          style={{ boxShadow: "0 0 60px rgba(34,211,238,0.06)" }}>
          {/* Left accent bar */}
          <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-primary via-secondary to-primary/0 rounded-l-2xl" />
          <div className="pl-2">
            <h4 className="text-xl font-bold mb-3 text-white" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
              Why LTGP, not just LTV?
            </h4>
            <p className="text-muted-foreground leading-relaxed text-[15px]">
              Most agencies track "Lifetime Value" — but LTV ignores your cost of delivery.{" "}
              <strong className="text-white font-semibold">Lifetime Gross Profit (LTGP)</strong> is what
              remains after fulfillment costs. It's the number that tells you whether a client segment is
              actually worth acquiring. A customer worth CHF&nbsp;5,000 in LTV but costing CHF&nbsp;4,000
              to serve has an LTGP of CHF&nbsp;1,000 — and that changes every decision about how much you
              spend to acquire them. We optimize for profit, not revenue theater.
            </p>
          </div>
        </motion.div>

        {/* Disclaimer */}
        <p className="text-center text-xs text-muted-foreground mt-10 opacity-60">
          Results vary by market, offer, budget, and sales process. All figures based on delivered client work.
        </p>
      </div>
    </section>
  );
}
