import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight } from "lucide-react";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import TeamSection from "../components/TeamSection";

const PRINCIPLES = [
  {
    title: "Measure what matters.",
    desc: "CAC and LTGP. Not clicks. Not impressions. Not 'brand awareness'. If it doesn't connect to profit, we do not optimize for it.",
  },
  {
    title: "Systems over tactics.",
    desc: "A tactic produces a result once. A system produces results compoundingly. We build the engine, not the individual campaign.",
  },
  {
    title: "Honest about what we don't know.",
    desc: "We will tell you if a market is too competitive, if your offer needs work, or if your sales process is the real bottleneck. We are not here to take your budget and disappear.",
  },
  {
    title: "Privacy-aware by design.",
    desc: "We operate across Swiss, EU, and US markets. Consent-aware architecture is not an afterthought — it is how we build every funnel.",
  },
  {
    title: "Operators, not theorists.",
    desc: "Every system we recommend, we have built and run for real clients. We do not consult on theory. We build and manage the operational infrastructure.",
  },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col font-sans">
      <Nav />
      <main className="flex-1 pt-28">

        {/* Hero */}
        <section className="py-20 bg-dot-pattern border-b border-white/5 relative overflow-hidden">
          <div className="absolute top-0 left-1/4 w-[600px] h-[400px] bg-primary/10 rounded-full blur-[120px] pointer-events-none" />
          <div className="container mx-auto px-4 md:px-6 relative z-10 max-w-3xl">
            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }}
              className="text-primary font-bold tracking-widest text-sm uppercase mb-4 block"
            >
              About Alpine Marketing
            </motion.p>
            <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
              className="text-5xl md:text-6xl font-bold mb-6 leading-[1.1]"
            >
              Commercially minded. Systems-oriented. Anti-vanity-metric.
            </motion.h1>
            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
              className="text-xl text-muted-foreground leading-relaxed"
            >
              Alpine Marketing was built around a simple observation: most SMBs don't have a lead problem. They have a system problem. Leads come in and disappear — into slow follow-up, disconnected CRMs, and reporting that shows activity, not profit.
            </motion.p>
          </div>
        </section>

        {/* Why Alpine Exists */}
        <section className="py-24 border-b border-white/5">
          <div className="container mx-auto px-4 md:px-6 max-w-4xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
              <div>
                <h2 className="text-3xl font-bold mb-6">Why we exist.</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Most agencies optimize one part of the funnel — usually the part they're comfortable selling. Ads, or content, or "strategy". The client gets a deliverable, not a working system.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Alpine Marketing was founded to fix this. We work across the entire acquisition stack: paid traffic, CRM, automation, follow-up, reactivation, and reporting — connected into one engine that actually closes clients.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  We are based in Zurich and work with businesses in Switzerland, the EU, and internationally. We speak plain English, operate in CHF and EUR, and we hold ourselves accountable to the same metrics we ask our clients to care about.
                </p>
              </div>
              <div>
                <h2 className="text-3xl font-bold mb-6">What full-funnel thinking means.</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Full-funnel is not a marketing phrase. It means: we care what happens to a lead after it fills out a form. We care about speed-to-lead. We care about whether the CRM nurtures or forgets. We care about reactivation. We care about reporting that connects ad spend to closed revenue.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  This requires more coordination than running ads. But it produces a fundamentally different result: lower CAC, higher LTGP, and a system that compounds instead of plateaus.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Principles */}
        <section className="py-24 bg-[#0D0D16] border-b border-white/5">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-3xl font-bold mb-10 text-center">Operating Principles.</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {PRINCIPLES.map((p, i) => (
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

        {/* Team */}
        <TeamSection />

        {/* CTA */}
        <section className="py-20 border-t border-white/5 text-center">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-3xl font-bold mb-4">Ready to talk?</h2>
            <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
              Book a free funnel audit and we'll show you exactly what we'd fix and in what order — before you commit to anything.
            </p>
            <Link
              href="/book-audit"
              className="inline-flex items-center gap-2 px-10 py-4 bg-primary text-white rounded-lg font-bold text-lg hover:bg-primary/90 transition-all shadow-[0_0_24px_rgba(8,145,178,0.3)]"
            >
              Book Your Free Audit <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}
