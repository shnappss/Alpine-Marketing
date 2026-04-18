import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { Megaphone, MousePointerClick, GitBranch, MessageSquare, RefreshCw, BarChart3 } from "lucide-react";

const STEP_KEYS = [
  { key: "attract",  number: "01", icon: Megaphone,         accent: "blue" },
  { key: "capture",  number: "02", icon: MousePointerClick, accent: "blue" },
  { key: "route",    number: "03", icon: GitBranch,         accent: "emerald" },
  { key: "engage",   number: "04", icon: MessageSquare,     accent: "emerald" },
  { key: "nurture",  number: "05", icon: RefreshCw,         accent: "amber" },
  { key: "measure",  number: "06", icon: BarChart3,         accent: "amber" },
] as const;

const ACCENT_MAP: Record<string, { text: string; border: string; bg: string; glow: string }> = {
  blue:    { text: "text-primary",   border: "border-primary/20",   bg: "bg-primary/8",   glow: "rgba(8,145,178,0.18)" },
  emerald: { text: "text-secondary", border: "border-secondary/20", bg: "bg-secondary/8", glow: "rgba(16,185,129,0.14)" },
  amber:   { text: "text-sky-400",   border: "border-sky-400/20",   bg: "bg-sky-400/8",   glow: "rgba(56,189,248,0.12)" },
};

export default function SystemSection() {
  const { t } = useTranslation();
  return (
    <section id="how-it-works" className="py-24 border-t border-white/5 relative overflow-hidden"
             style={{ background: "#070d18" }}>
      <div className="absolute inset-0 bg-grid opacity-50 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-5 md:px-8 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <motion.span
            initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
            className="text-primary font-bold tracking-widest text-xs uppercase mb-4 block"
            style={{ fontFamily: "'Space Grotesk', sans-serif", letterSpacing: "0.2em" }}>
            {t("system.eyebrow")}
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold mb-4 text-white">
            {t("system.title")}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ delay: 0.16 }}
            className="text-base text-muted-foreground">
            {t("system.subtitle")}
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {STEP_KEYS.map((step, i) => {
            const a = ACCENT_MAP[step.accent];
            const Icon = step.icon;
            return (
              <motion.div
                key={step.key}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ delay: i * 0.07, duration: 0.45 }}
                className={`relative bg-card rounded-xl border ${a.border} p-6 flex flex-col gap-3 group hover:bg-white/[0.02] transition-all duration-300`}
                onMouseEnter={e => (e.currentTarget as HTMLElement).style.boxShadow = `0 8px 36px ${a.glow}`}
                onMouseLeave={e => (e.currentTarget as HTMLElement).style.boxShadow = `none`}>

                <div className="flex items-center justify-between">
                  <div className={`w-10 h-10 rounded-lg ${a.bg} border ${a.border} flex items-center justify-center flex-shrink-0`}>
                    <Icon className={`w-5 h-5 ${a.text}`} />
                  </div>
                  <span className="text-[2.4rem] font-extrabold leading-none select-none"
                        style={{ color: "rgba(255,255,255,0.04)" }}>
                    {step.number}
                  </span>
                </div>

                <div>
                  <h3 className={`text-base font-bold mb-1.5 ${a.text}`}
                      style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                    {t(`system.steps.${step.key}.title`)}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {t(`system.steps.${step.key}.desc`)}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        <p className="text-center text-xs text-muted-foreground mt-8 opacity-50">
          {t("system.disclaimer")}
        </p>
      </div>
    </section>
  );
}
