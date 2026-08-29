import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { useTranslation, Trans } from "react-i18next";
import { useCountUp } from "../hooks/useCountUp";

export default function MetricsSection() {
  const { t } = useTranslation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const cacStat      = useCountUp(isInView ? 32 : 0, 2);
  const ltgpStat     = useCountUp(isInView ? 24 : 0, 2);
  const speedStat    = useCountUp(isInView ? 60 : 0, 1.5);
  const recoveryStat = useCountUp(isInView ? 48 : 0, 2);
  const cycleStat    = useCountUp(isInView ? 38 : 0, 2);

  const metrics = [
    {
      key: "cac",
      value: (<><span className="text-secondary text-2xl mr-1">↓</span>{cacStat}%</>),
      glow: "group-hover:shadow-[0_0_30px_rgba(16,185,129,0.15)]",
    },
    {
      key: "ltgp",
      value: (<><span className="text-secondary text-2xl mr-1">↑</span>{(ltgpStat / 10).toFixed(1)}×</>),
      glow: "group-hover:shadow-[0_0_30px_rgba(16,185,129,0.15)]",
    },
    {
      key: "speed",
      value: (<><span className="text-primary text-2xl mr-1">&lt;</span>{speedStat}s</>),
      glow: "group-hover:shadow-[0_0_30px_rgba(8,145,178,0.15)]",
    },
    {
      key: "recovery",
      value: <>{recoveryStat}%+</>,
      glow: "group-hover:shadow-[0_0_30px_rgba(8,145,178,0.15)]",
    },
    {
      key: "cycle",
      value: (<><span className="text-secondary text-2xl mr-1">−</span>{cycleStat}%</>),
      glow: "group-hover:shadow-[0_0_30px_rgba(16,185,129,0.15)]",
    },
    {
      key: "ratio",
      value: "3.4–4.2:1",
      glow: "group-hover:shadow-[0_0_30px_rgba(8,145,178,0.15)]",
    },
  ];

  return (
    <section className="py-24 bg-background border-t border-white/5 relative" ref={ref}>
      <div className="max-w-7xl mx-auto px-5 md:px-8">

        <div className="text-center max-w-3xl mx-auto mb-14">
          <motion.span
            initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
            className="text-secondary font-bold tracking-widest text-xs uppercase mb-4 block"
            style={{ letterSpacing: "0.2em" }}>
            {t("metrics.eyebrow")}
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold mb-4">
            {t("metrics.title")}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ delay: 0.2 }}
            className="text-base text-muted-foreground">
            {t("metrics.subtitle")}
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-10">
          {metrics.map((m, i) => (
            <motion.div
              key={m.key}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.09 }}
              className={`bg-card p-6 rounded-xl border border-white/5 transition-all group ${m.glow}`}>
              <h3 className="text-xs font-semibold text-muted-foreground uppercase tracking-widest mb-2">
                {t(`metrics.items.${m.key}.title`)}
              </h3>
              <div className="text-5xl font-bold text-white mb-3 tabular-nums">{m.value}</div>
              <p className="text-sm text-muted-foreground leading-relaxed">{t(`metrics.items.${m.key}.desc`)}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative bg-card rounded-2xl border border-primary/20 max-w-3xl mx-auto p-6 overflow-hidden mb-8">
          <div className="absolute left-0 top-0 bottom-0 w-1 rounded-l-2xl"
               style={{ background: "linear-gradient(to bottom, #0891b2, #10b981, transparent)" }} />
          <div className="pl-3">
            <p className="text-xs font-bold tracking-widest uppercase text-primary mb-2"
               style={{ letterSpacing: "0.18em" }}>{t("metrics.callout.label")}</p>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {t("metrics.callout.lead")}{" "}
              <strong className="text-white">{t("metrics.callout.ltgpName")}</strong>{" "}
              {t("metrics.callout.body")}
            </p>
          </div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
          className="text-center text-xs text-muted-foreground">
          {t("metrics.disclaimer")}
        </motion.p>

      </div>
    </section>
  );
}
