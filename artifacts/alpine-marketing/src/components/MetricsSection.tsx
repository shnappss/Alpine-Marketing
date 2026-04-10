import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { useCountUp } from "../hooks/useCountUp";

export default function MetricsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const cacStat      = useCountUp(isInView ? 32 : 0, 2);
  const ltgpStat     = useCountUp(isInView ? 24 : 0, 2);
  const speedStat    = useCountUp(isInView ? 60 : 0, 1.5);
  const recoveryStat = useCountUp(isInView ? 48 : 0, 2);
  const cycleStat    = useCountUp(isInView ? 38 : 0, 2);

  const metrics = [
    {
      title: "CAC Reduction",
      value: (<><span className="text-secondary text-2xl mr-1">↓</span>{cacStat}%</>),
      desc: "Average reduction across clients in the first 90 days",
      glow: "group-hover:shadow-[0_0_30px_rgba(16,185,129,0.15)]",
    },
    {
      title: "LTGP Improvement",
      value: (<><span className="text-secondary text-2xl mr-1">↑</span>{(ltgpStat / 10).toFixed(1)}×</>),
      desc: "Average improvement with full-funnel optimization",
      glow: "group-hover:shadow-[0_0_30px_rgba(16,185,129,0.15)]",
    },
    {
      title: "Speed-to-Lead",
      value: (<><span className="text-primary text-2xl mr-1">&lt;</span>{speedStat}s</>),
      desc: "Average first response time with our AI system active",
      glow: "group-hover:shadow-[0_0_30px_rgba(37,99,235,0.15)]",
    },
    {
      title: "Pipeline Recovery",
      value: <>{recoveryStat}%+</>,
      desc: "Dormant leads reactivated through automated campaigns",
      glow: "group-hover:shadow-[0_0_30px_rgba(37,99,235,0.15)]",
    },
    {
      title: "Sales Cycle",
      value: (<><span className="text-secondary text-2xl mr-1">−</span>{cycleStat}%</>),
      desc: "Faster from first touch to closed deal",
      glow: "group-hover:shadow-[0_0_30px_rgba(16,185,129,0.15)]",
    },
    {
      title: "LTGP/CAC Ratio",
      value: "3.4–4.2:1",
      desc: "Proven across dental, ICT, and professional services",
      glow: "group-hover:shadow-[0_0_30px_rgba(37,99,235,0.15)]",
    },
  ];

  return (
    <section className="py-24 bg-background border-t border-white/5 relative" ref={ref}>
      <div className="max-w-7xl mx-auto px-5 md:px-8">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <motion.span
            initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
            className="text-secondary font-bold tracking-widest text-xs uppercase mb-4 block"
            style={{ letterSpacing: "0.2em" }}>
            What We Actually Measure
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold mb-4">
            Forget Vanity Metrics. Here's What Drives Growth.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ delay: 0.2 }}
            className="text-base text-muted-foreground">
            Every Alpine client gets a real-time dashboard tracking the numbers that actually determine profitable growth.
          </motion.p>
        </div>

        {/* Metrics grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-10">
          {metrics.map((m, i) => (
            <motion.div
              key={m.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.09 }}
              className={`bg-card p-6 rounded-xl border border-white/5 transition-all group ${m.glow}`}>
              <h3 className="text-xs font-semibold text-muted-foreground uppercase tracking-widest mb-2">
                {m.title}
              </h3>
              <div className="text-5xl font-bold text-white mb-3 tabular-nums">{m.value}</div>
              <p className="text-sm text-muted-foreground leading-relaxed">{m.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* ── LTGP explainer callout ── */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative bg-card rounded-2xl border border-primary/20 max-w-3xl mx-auto p-6 overflow-hidden mb-8">
          <div className="absolute left-0 top-0 bottom-0 w-1 rounded-l-2xl"
               style={{ background: "linear-gradient(to bottom, #2563eb, #10b981, transparent)" }} />
          <div className="pl-3">
            <p className="text-xs font-bold tracking-widest uppercase text-primary mb-2"
               style={{ letterSpacing: "0.18em" }}>Why LTGP and not just LTV?</p>
            <p className="text-sm text-muted-foreground leading-relaxed">
              LTV tells you what a customer spends. <strong className="text-white">LTGP (Lifetime Gross Profit)</strong> tells
              you what's left after your delivery costs — which is the real number that decides how much you can afford to
              spend acquiring them. We optimize for that number, not revenue theater.
            </p>
          </div>
        </motion.div>

        {/* Disclaimer */}
        <motion.p
          initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
          className="text-center text-xs text-muted-foreground">
          These are measured results from live client dashboards, not projections.
        </motion.p>

      </div>
    </section>
  );
}
