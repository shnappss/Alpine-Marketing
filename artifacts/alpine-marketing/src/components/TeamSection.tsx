import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import romanPic from "@assets/roman-pic_1775775400184.png";
import alexSkylarPic from "@assets/alex-sklyar-pic_1775775400184.png";
import zhenyaPic from "@assets/zhenya-pic_1775775400184.png";
import katyaPic from "@assets/katya-pic_1775775400184.png";
import alexHalaPic from "@assets/alex-hala-pic_1775775400184.png";
import illyaPic from "@assets/illya-pic_1775775400184.png";

const MEMBERS = [
  { name: "Roman Siladii",   roleKey: "founder",     photo: romanPic },
  { name: "Alex Skylar",     roleKey: "performance", photo: alexSkylarPic },
  { name: "Eugen Kokayko",   roleKey: "engineering", photo: zhenyaPic },
  { name: "Kate Dudnik",     roleKey: "content",     photo: katyaPic },
  { name: "Alex Haladzhi",   roleKey: "creative",    photo: alexHalaPic },
  { name: "Illya Mikulin",   roleKey: "motion",      photo: illyaPic },
] as const;

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } },
};

export default function TeamSection() {
  const { t } = useTranslation();

  return (
    <section id="team" className="py-24 bg-[#0A0A0F] border-t border-white/5 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-primary/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-secondary font-bold tracking-widest text-sm uppercase mb-4 block"
          >
            {t("team.eyebrow")}
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            {t("team.title")}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-muted-foreground"
          >
            {t("team.subtitle")}
          </motion.p>
        </div>

        <motion.div
          className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-5xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          {MEMBERS.map((member) => (
            <motion.div
              key={member.name}
              variants={cardVariants}
              className="group relative flex flex-col items-center text-center p-6 rounded-2xl bg-card border border-white/8 hover:border-primary/30 transition-colors duration-300"
              data-testid={`card-team-${member.name.replace(/\s+/g, "-").toLowerCase()}`}
            >
              <div className="absolute inset-0 rounded-2xl bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

              <div className="mb-3">
                <div className="w-24 h-24 rounded-full overflow-hidden ring-2 ring-white/10 group-hover:ring-primary/40 transition-all duration-300 shadow-lg mx-auto">
                  <img
                    src={member.photo}
                    alt={member.name}
                    className="w-full h-full object-cover object-top"
                  />
                </div>
              </div>

              <span className="px-2.5 py-0.5 mb-3 text-[10px] font-bold tracking-wider uppercase bg-primary/20 text-primary border border-primary/30 rounded-full whitespace-nowrap">
                {t(`team.roles.${member.roleKey}`)}
              </span>

              <div>
                <h4 className="text-base font-bold text-white mb-1">{member.name}</h4>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  {t(`team.specialties.${member.roleKey}`)}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
