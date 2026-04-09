import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { useCountUp } from "../hooks/useCountUp";

export default function MetricsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const cacStat = useCountUp(isInView ? 32 : 0, 2);
  const ltgpStat = useCountUp(isInView ? 24 : 0, 2); // 2.4 will be formatted
  const speedStat = useCountUp(isInView ? 60 : 0, 1.5);
  const recoveryStat = useCountUp(isInView ? 48 : 0, 2);
  const cycleStat = useCountUp(isInView ? 38 : 0, 2);

  const metrics = [
    {
      title: "CAC Reduction",
      value: (
        <>
          <span className="text-secondary text-2xl mr-1">↓</span>
          {cacStat}%
        </>
      ),
      desc: "Average reduction across clients in the first 90 days",
      glow: "group-hover:shadow-[0_0_30px_rgba(0,193,140,0.15)]",
    },
    {
      title: "LTGP Improvement",
      value: (
        <>
          <span className="text-secondary text-2xl mr-1">↑</span>
          {(ltgpStat / 10).toFixed(1)}×
        </>
      ),
      desc: "Average improvement with full-funnel optimization",
      glow: "group-hover:shadow-[0_0_30px_rgba(0,193,140,0.15)]",
    },
    {
      title: "Speed-to-Lead",
      value: (
        <>
          <span className="text-primary text-2xl mr-1">&lt;</span>
          {speedStat}s
        </>
      ),
      desc: "Average first response time with our AI system active",
      glow: "group-hover:shadow-[0_0_30px_rgba(61,128,204,0.15)]",
    },
    {
      title: "Pipeline Recovery",
      value: <>{recoveryStat}%+</>,
      desc: "Dormant leads reactivated through automated campaigns",
      glow: "group-hover:shadow-[0_0_30px_rgba(61,128,204,0.15)]",
    },
    {
      title: "Sales Cycle",
      value: (
        <>
          <span className="text-secondary text-2xl mr-1">−</span>
          {cycleStat}%
        </>
      ),
      desc: "Faster from first touch to closed deal",
      glow: "group-hover:shadow-[0_0_30px_rgba(0,193,140,0.15)]",
    },
    {
      title: "LTGP/CAC Ratio",
      value: "3.4–4.2:1", // Static since it's a range, or we could animate parts. Keeping static for clarity.
      desc: "Proven across dental, ICT, and professional services",
      glow: "group-hover:shadow-[0_0_30px_rgba(61,128,204,0.15)]",
    },
  ];

  return (
    <section className="py-24 bg-[#05050A] border-t border-white/5 relative" ref={ref}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-secondary font-bold tracking-widest text-sm uppercase mb-4 block"
          >
            What We Actually Measure
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            Forget Vanity Metrics. Here's What Drives Growth.
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-muted-foreground"
          >
            Every Alpine client gets a real-time dashboard tracking the numbers that actually determine whether your business is growing profitably.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {metrics.map((m, i) => (
            <motion.div
              key={m.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`bg-card p-6 rounded-xl border border-white/5 transition-all group ${m.glow}`}
            >
              <h3 className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-2">
                {m.title}
              </h3>
              <div className="text-5xl font-bold text-white mb-4 tabular-nums">
                {m.value}
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {m.desc}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="text-sm text-muted-foreground px-6 py-3 rounded-full bg-white/5 inline-block border border-white/10">
            These aren't projections. They're measured results from live client dashboards. We show you the same numbers we use to optimize.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
