import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import logoPath from "../../../../attached_assets/Logo_White_Vers_1775782653069.jpg";

interface Card { title: string; desc: string; }

export default function WhyAlpineSection() {
  const { t } = useTranslation();
  const cards = t("whyAlpine.cards", { returnObjects: true }) as Card[];

  return (
    <section className="py-24 bg-background border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto px-5 md:px-8">

        <div className="text-center max-w-2xl mx-auto mb-14">
          <motion.div
            initial={{ opacity: 0, y: -8 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} className="flex justify-center mb-5">
            <img
              src={logoPath}
              alt="Alpine Marketing"
              className="h-20 w-auto"
              style={{ mixBlendMode: "screen" }}
            />
          </motion.div>
          <motion.span
            initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
            className="text-primary font-bold tracking-widest text-xs uppercase mb-4 block"
            style={{ letterSpacing: "0.2em" }}>
            {t("whyAlpine.eyebrow")}
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold">
            {t("whyAlpine.title")}
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {cards.map((card, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.09 }}
              className="bg-card p-7 rounded-xl border border-white/5 hover:bg-white/[0.025] hover:border-primary/15 transition-all duration-300 group">
              <div className="w-1.5 h-6 rounded-full bg-primary/60 mb-4 group-hover:bg-primary transition-colors" />
              <h3 className="text-base font-bold mb-2 text-white"
                  style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                {card.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{card.desc}</p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
