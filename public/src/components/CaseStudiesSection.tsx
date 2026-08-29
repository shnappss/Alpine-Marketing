import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { CheckCircle2 } from "lucide-react";

const CASE_KEYS = ["dental", "ict"] as const;

export default function CaseStudiesSection() {
  const { t } = useTranslation();

  return (
    <section id="results" className="py-24 bg-background relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-primary font-bold tracking-widest text-sm uppercase mb-4 block"
          >
            {t("cases.eyebrow")}
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            {t("cases.title")}
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {CASE_KEYS.map((key, i) => {
            const results = t(`cases.${key}.results`, { returnObjects: true }) as string[];
            return (
              <motion.div
                key={key}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className="bg-card rounded-2xl border border-white/10 p-8 md:p-10 flex flex-col"
              >
                <div className="inline-block px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-muted-foreground w-fit mb-6">
                  {t(`cases.${key}.badge`)}
                </div>
                <h3 className="text-3xl font-bold mb-8">{t(`cases.${key}.title`)}</h3>

                <div className="space-y-6 flex-grow">
                  <div>
                    <h4 className="text-sm font-bold uppercase tracking-wider text-muted-foreground mb-2">{t("cases.challenge")}</h4>
                    <p className="text-white/90">{t(`cases.${key}.challenge`)}</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-bold uppercase tracking-wider text-muted-foreground mb-2">{t("cases.approach")}</h4>
                    <p className="text-white/90 leading-relaxed">{t(`cases.${key}.approach`)}</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-bold uppercase tracking-wider text-muted-foreground mb-2">{t("cases.timeline")}: {t(`cases.${key}.timeline`)}</h4>
                  </div>
                  <div className="pt-4">
                    <h4 className="text-sm font-bold uppercase tracking-wider text-primary mb-3">{t("cases.results")}</h4>
                    <ul className="space-y-2">
                      {results.map((res, j) => (
                        <li key={j} className="flex items-start gap-2 text-white/90">
                          <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                          <span className="font-medium">{res}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-white/10">
                  <p className="text-sm italic text-muted-foreground leading-relaxed">
                    "{t(`cases.${key}.insight`)}"
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
