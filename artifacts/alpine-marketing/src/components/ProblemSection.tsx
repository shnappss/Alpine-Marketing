import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { useTranslation } from "react-i18next";
import { useCountUp } from "../hooks/useCountUp";
import { Zap, Link as LinkIcon, HelpCircle } from "lucide-react";

export default function ProblemSection() {
  const { t } = useTranslation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const leakPoints = t("problem.leakPoints", { returnObjects: true }) as string[];

  const speedStat = useCountUp(isInView ? 21 : 0, 2);
  const followUpStat = useCountUp(isInView ? 78 : 0, 2);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <section id="problem" className="py-24 bg-background relative overflow-hidden" ref={ref}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-destructive font-bold tracking-widest text-sm uppercase mb-4 block"
          >
            {t("problem.eyebrow")}
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            {t("problem.title")}
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-muted-foreground"
          >
            {t("problem.subtitle")}
          </motion.p>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16"
        >
          {/* Card 1 */}
          <motion.div variants={itemVariants} className="bg-card p-8 rounded-xl border border-white/5 hover:border-destructive/30 transition-colors group relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-destructive/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="w-12 h-12 rounded-lg bg-destructive/10 text-destructive flex items-center justify-center mb-6">
              <Zap className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold mb-2">{t("problem.cards.speed.title")}</h3>
            <div className="text-5xl font-bold text-white mb-4 tabular-nums">
              {speedStat}<span className="text-destructive">×</span>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              {t("problem.cards.speed.desc")}
            </p>
          </motion.div>

          {/* Card 2 */}
          <motion.div variants={itemVariants} className="bg-card p-8 rounded-xl border border-white/5 hover:border-destructive/30 transition-colors group relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-destructive/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="w-12 h-12 rounded-lg bg-destructive/10 text-destructive flex items-center justify-center mb-6">
              <LinkIcon className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold mb-2">{t("problem.cards.followup.title")}</h3>
            <div className="text-5xl font-bold text-white mb-4 tabular-nums">
              {followUpStat}<span className="text-destructive">%</span>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              {t("problem.cards.followup.desc")}
            </p>
          </motion.div>

          {/* Card 3 */}
          <motion.div variants={itemVariants} className="bg-card p-8 rounded-xl border border-white/5 hover:border-destructive/30 transition-colors group relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-destructive/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="w-12 h-12 rounded-lg bg-destructive/10 text-destructive flex items-center justify-center mb-6">
              <HelpCircle className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold mb-2">{t("problem.cards.metrics.title")}</h3>
            <div className="text-5xl font-bold text-destructive mb-4">
              0<span className="text-2xl text-white ml-2">{t("problem.cards.metrics.valueLabel")}</span>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              {t("problem.cards.metrics.desc")}
            </p>
          </motion.div>
        </motion.div>

        {/* Leak points strip */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="flex flex-wrap md:flex-nowrap items-center justify-between bg-card/50 p-6 rounded-xl border border-white/5 text-sm font-medium text-destructive overflow-hidden relative"
        >
           <div className="absolute inset-x-0 top-1/2 h-px border-t border-dashed border-destructive/30 -z-10 hidden md:block" />
           {leakPoints.map((point, i, arr) => (
             <div key={point} className="flex items-center gap-4 bg-background px-4 py-2 rounded-full border border-destructive/20 shadow-sm whitespace-nowrap mb-2 md:mb-0">
               {point}
               {i < arr.length - 1 && <span className="md:hidden">→</span>}
             </div>
           ))}
        </motion.div>
      </div>
    </section>
  );
}
