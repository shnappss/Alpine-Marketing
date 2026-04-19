import { motion } from "framer-motion";
import { ArrowRight, Megaphone, Settings, BarChart3, FileText, Monitor, Globe } from "lucide-react";
import { Link } from "wouter";
import { useTranslation } from "react-i18next";
import Nav from "../components/Nav";
import Footer from "../components/Footer";

type ServiceItem = { title: string; desc: string; outcomes: string[] };

const SERVICE_KEYS = [
  { key: "performance", icon: Megaphone, slug: "performance-marketing" },
  { key: "crm", icon: Settings, slug: "crm-automation" },
  { key: "reporting", icon: BarChart3, slug: "reporting-analytics" },
  { key: "content", icon: FileText, slug: "content-funnels" },
  { key: "funnel", icon: Monitor, slug: "funnel-strategy" },
  { key: "landing", icon: Globe, slug: "landing-pages" },
] as const;

export default function ServicesPage() {
  const { t } = useTranslation();
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col font-sans">
      <Nav />
      <main className="flex-1 pt-28 pb-20">
        <div className="container mx-auto px-4 md:px-6">

          <div className="text-center max-w-3xl mx-auto mb-16">
            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }}
              className="text-primary font-bold tracking-widest text-sm uppercase mb-4 block"
            >
              {t("servicesPage.eyebrow")}
            </motion.p>
            <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
              className="text-5xl md:text-6xl font-bold mb-6"
            >
              {t("servicesPage.title")}
            </motion.h1>
            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
              className="text-xl text-muted-foreground"
            >
              {t("servicesPage.subtitle")}
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {SERVICE_KEYS.map((svc, i) => {
              const item = t(`servicesPage.items.${svc.key}`, { returnObjects: true }) as ServiceItem;
              return (
                <motion.div
                  key={svc.slug}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + i * 0.08 }}
                  className="group bg-card border border-white/8 rounded-xl p-8 flex flex-col hover:border-primary/30 transition-colors"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-6">
                    <svc.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h2 className="text-xl font-bold text-white mb-3">{item.title}</h2>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-5 flex-grow">{item.desc}</p>
                  <ul className="space-y-1.5 mb-6">
                    {item.outcomes.map(o => (
                      <li key={o} className="flex items-start gap-2 text-xs text-secondary">
                        <span className="mt-0.5 flex-shrink-0">✓</span>
                        <span className="text-white/70">{o}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    href={`/services/${svc.slug}`}
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary group-hover:gap-3 transition-all"
                  >
                    {t("servicesPage.learnMore")} <ArrowRight className="w-4 h-4" />
                  </Link>
                </motion.div>
              );
            })}
          </div>

          <div className="text-center">
            <Link
              href="/book-audit"
              className="inline-flex items-center gap-2 px-10 py-4 bg-primary text-white rounded-lg font-bold text-lg hover:bg-primary/90 transition-all shadow-[0_0_24px_rgba(8,145,178,0.3)]"
            >
              {t("servicesPage.cta")} <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
