import { motion } from "framer-motion";
import { Megaphone, MousePointerClick, GitBranch, MessageSquare, RefreshCw, BarChart3 } from "lucide-react";

const STEPS = [
  {
    number: "01",
    icon: Megaphone,
    title: "Attract",
    desc: "Targeted ads on Meta, Google & LinkedIn. Landing pages built to convert, not impress.",
    accent: "blue",
  },
  {
    number: "02",
    icon: MousePointerClick,
    title: "Capture",
    desc: "Every lead, every source — one CRM. No lost contacts, full attribution from first click.",
    accent: "blue",
  },
  {
    number: "03",
    icon: GitBranch,
    title: "Route & Score",
    desc: "Leads auto-scored and sent to the right workflow in seconds — not hours.",
    accent: "emerald",
  },
  {
    number: "04",
    icon: MessageSquare,
    title: "Engage in <60s",
    desc: "Claude AI responds 24/7, qualifies the lead, and hands off only when they're ready.",
    accent: "emerald",
  },
  {
    number: "05",
    icon: RefreshCw,
    title: "Nurture & Reactivate",
    desc: "Automated sequences via email, SMS & WhatsApp. Dormant leads don't go to waste.",
    accent: "amber",
  },
  {
    number: "06",
    icon: BarChart3,
    title: "Measure & Improve",
    desc: "Live dashboards. CAC, LTGP, pipeline velocity — only the numbers that drive profit.",
    accent: "amber",
  },
];

const ACCENT_MAP: Record<string, { text: string; border: string; bg: string; glow: string }> = {
  blue:    { text: "text-primary",   border: "border-primary/20",   bg: "bg-primary/8",   glow: "rgba(8,145,178,0.18)" },
  emerald: { text: "text-secondary", border: "border-secondary/20", bg: "bg-secondary/8", glow: "rgba(16,185,129,0.14)" },
  amber:   { text: "text-sky-400",   border: "border-sky-400/20",   bg: "bg-sky-400/8",   glow: "rgba(56,189,248,0.12)" },
};

export default function SystemSection() {
  return (
    <section id="how-it-works" className="py-24 border-t border-white/5 relative overflow-hidden"
             style={{ background: "#070d18" }}>
      <div className="absolute inset-0 bg-grid opacity-50 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-5 md:px-8 relative z-10">

        {/* ── Header ── */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <motion.span
            initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
            className="text-primary font-bold tracking-widest text-xs uppercase mb-4 block"
            style={{ fontFamily: "'Space Grotesk', sans-serif", letterSpacing: "0.2em" }}>
            The Alpine Approach
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold mb-4 text-white">
            We Don't Fix One Thing. We Systematize Everything.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ delay: 0.16 }}
            className="text-base text-muted-foreground">
            Six steps. One engine. Every lead tracked from first click to closed deal.
          </motion.p>
        </div>

        {/* ── Step grid ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {STEPS.map((step, i) => {
            const a = ACCENT_MAP[step.accent];
            return (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ delay: i * 0.07, duration: 0.45 }}
                className={`relative bg-card rounded-xl border ${a.border} p-6 flex flex-col gap-3 group hover:bg-white/[0.02] transition-all duration-300`}
                onMouseEnter={e => (e.currentTarget as HTMLElement).style.boxShadow = `0 8px 36px ${a.glow}`}
                onMouseLeave={e => (e.currentTarget as HTMLElement).style.boxShadow = `none`}>

                <div className="flex items-center justify-between">
                  <div className={`w-10 h-10 rounded-lg ${a.bg} border ${a.border} flex items-center justify-center flex-shrink-0`}>
                    <step.icon className={`w-5 h-5 ${a.text}`} />
                  </div>
                  <span className="text-[2.4rem] font-extrabold leading-none select-none"
                        style={{ color: "rgba(255,255,255,0.04)" }}>
                    {step.number}
                  </span>
                </div>

                <div>
                  <h3 className={`text-base font-bold mb-1.5 ${a.text}`}
                      style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                    {step.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{step.desc}</p>
                </div>
              </motion.div>
            );
          })}
        </div>

        <p className="text-center text-xs text-muted-foreground mt-8 opacity-50">
          Results vary by market, offer, budget, and sales process. Figures based on delivered client work.
        </p>
      </div>
    </section>
  );
}
