import { motion } from "framer-motion";
import { ArrowRight, Megaphone, Settings, BarChart3, FileText, Monitor, Globe } from "lucide-react";
import { Link } from "wouter";
import Nav from "../components/Nav";
import Footer from "../components/Footer";

const SERVICES = [
  {
    icon: Megaphone,
    title: "Performance Marketing",
    slug: "performance-marketing",
    desc: "Paid traffic on Meta, Google, and LinkedIn — built to drive qualified leads, not just impressions. Every campaign is connected to your CRM so we can trace cost-per-acquisition in real time.",
    outcomes: ["Lower CAC within 90 days", "Attribution from click to closed deal", "Audience targeting built on real purchase data"],
  },
  {
    icon: Settings,
    title: "CRM + Automation",
    slug: "crm-automation",
    desc: "GoHighLevel setup, workflow architecture, AI lead qualification, and automated follow-up sequences. Your pipeline runs while you sleep — and every touchpoint is tracked.",
    outcomes: ["<60s first response via Claude AI", "Automated lead routing and scoring", "Dormant lead reactivation campaigns"],
  },
  {
    icon: BarChart3,
    title: "Reporting & Analytics",
    slug: "reporting-analytics",
    desc: "Real-time dashboards that show CAC, LTGP, conversion rates, speed-to-lead, and pipeline velocity. We report on what drives profit, not what looks good in a slide deck.",
    outcomes: ["Custom KPI dashboards", "CAC and LTGP tracking", "Weekly performance reviews"],
  },
  {
    icon: FileText,
    title: "Content Funnels",
    slug: "content-funnels",
    desc: "SEO-driven content, conversion-optimized landing pages, and nurture sequences that move leads through the funnel — not just get clicks.",
    outcomes: ["Conversion-focused landing pages", "Multi-step email and SMS sequences", "SEO content aligned to buying intent"],
  },
  {
    icon: Monitor,
    title: "Funnel Strategy",
    slug: "funnel-strategy",
    desc: "Before we build anything, we audit your current system — traffic sources, CRM structure, follow-up gaps, reporting blind spots. Then we build a roadmap that prioritizes revenue impact.",
    outcomes: ["Free funnel audit", "Gap analysis with revenue impact estimates", "Prioritized 90-day sprint plan"],
  },
  {
    icon: Globe,
    title: "Landing Pages",
    slug: "landing-pages",
    desc: "High-converting, mobile-first landing pages that are designed to capture leads — not to win design awards. A/B tested, CRM-connected, and built for speed.",
    outcomes: ["CRM-integrated form logic", "A/B testing ready", "Built for speed and conversion"],
  },
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col font-sans">
      <Nav />
      <main className="flex-1 pt-28 pb-20">
        <div className="container mx-auto px-4 md:px-6">

          <div className="text-center max-w-3xl mx-auto mb-16">
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-primary font-bold tracking-widest text-sm uppercase mb-4 block"
            >
              What We Do
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-5xl md:text-6xl font-bold mb-6"
            >
              Services Built Around Systems, Not Channels.
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-muted-foreground"
            >
              We do not sell individual tactics. We build and run acquisition systems — from paid traffic to closed client, tracked at every stage.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {SERVICES.map((svc, i) => (
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
                <h2 className="text-xl font-bold text-white mb-3">{svc.title}</h2>
                <p className="text-sm text-muted-foreground leading-relaxed mb-5 flex-grow">{svc.desc}</p>
                <ul className="space-y-1.5 mb-6">
                  {svc.outcomes.map(o => (
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
                  Learn more <ArrowRight className="w-4 h-4" />
                </Link>
              </motion.div>
            ))}
          </div>

          <div className="text-center">
            <Link
              href="/book-audit"
              className="inline-flex items-center gap-2 px-10 py-4 bg-primary text-white rounded-lg font-bold text-lg hover:bg-primary/90 transition-all shadow-[0_0_24px_rgba(61,128,204,0.3)]"
            >
              Book a Free Funnel Audit <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
