import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight } from "lucide-react";
import { useTranslation } from "react-i18next";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import TeamSection from "../components/TeamSection";

type Principle = { title: string; desc: string };

export default function AboutPage() {
  const { t } = useTranslation();
  const principles = t("aboutPage.principles", { returnObjects: true }) as Principle[];

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col font-sans">
      <Nav />
      <main className="flex-1 pt-28">

        <section className="py-20 bg-dot-pattern border-b border-white/5 relative overflow-hidden">
          <div className="absolute top-0 left-1/4 w-[600px] h-[400px] bg-primary/10 rounded-full blur-[120px] pointer-events-none" />
          <div className="container mx-auto px-4 md:px-6 relative z-10 max-w-3xl">
            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }}
              className="text-primary font-bold tracking-widest text-sm uppercase mb-4 block"
            >
              {t("aboutPage.eyebrow")}
            </motion.p>
            <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
              className="text-5xl md:text-6xl font-bold mb-6 leading-[1.1]"
            >
              {t("aboutPage.title")}
            </motion.h1>
            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
              className="text-xl text-muted-foreground leading-relaxed"
            >
              {t("aboutPage.subtitle")}
            </motion.p>
          </div>
        </section>

        <section className="py-24 border-b border-white/5">
          <div className="container mx-auto px-4 md:px-6 max-w-4xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
              <div>
                <h2 className="text-3xl font-bold mb-6">{t("aboutPage.why.title")}</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">{t("aboutPage.why.p1")}</p>
                <p className="text-muted-foreground leading-relaxed mb-4">{t("aboutPage.why.p2")}</p>
                <p className="text-muted-foreground leading-relaxed">{t("aboutPage.why.p3")}</p>
              </div>
              <div>
                <h2 className="text-3xl font-bold mb-6">{t("aboutPage.fullFunnel.title")}</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">{t("aboutPage.fullFunnel.p1")}</p>
                <p className="text-muted-foreground leading-relaxed">{t("aboutPage.fullFunnel.p2")}</p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-24 bg-[#0D0D16] border-b border-white/5">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-3xl font-bold mb-10 text-center">{t("aboutPage.principlesTitle")}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {principles.map((p, i) => (
                <motion.div
                  key={p.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="bg-card border border-white/8 rounded-xl p-6"
                >
                  <h3 className="font-bold text-white mb-3">{p.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <TeamSection />

        <section className="py-20 border-t border-white/5 text-center">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-3xl font-bold mb-4">{t("aboutPage.ctaTitle")}</h2>
            <p className="text-muted-foreground mb-8 max-w-xl mx-auto">{t("aboutPage.ctaDesc")}</p>
            <Link
              href="/book-audit"
              className="inline-flex items-center gap-2 px-10 py-4 bg-primary text-white rounded-lg font-bold text-lg hover:bg-primary/90 transition-all shadow-[0_0_24px_rgba(8,145,178,0.3)]"
            >
              {t("aboutPage.ctaButton")} <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}
