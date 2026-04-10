import { motion } from "framer-motion";
import logoPath from "../../../../attached_assets/Screenshot_2026-03-22_at_21.14.04_1775773255892.png";

const CARDS = [
  {
    title: "Full-Funnel, Not Fragment",
    desc: "Most agencies optimize one channel. We systematize your entire acquisition engine — from first impression to lifetime profit.",
  },
  {
    title: "Metrics That Mean Something",
    desc: "We track CAC and LTGP, not clicks. You'll always know what a customer costs to acquire and what they're worth in profit.",
  },
  {
    title: "AI-First, Human-Guided",
    desc: "Claude AI handles triage, qualification, and response. Your team handles relationships and closing.",
  },
  {
    title: "Swiss Precision, Startup Speed",
    desc: "GDPR-compliant infrastructure, transparent reporting, real-time tracking — delivered with urgency.",
  },
  {
    title: "Automation That Compounds",
    desc: "Every lead makes the system smarter. A/B-tested sequences and continuous optimization lower your CAC over time.",
  },
  {
    title: "Proven, Not Promised",
    desc: "3.4:1 to 4.2:1 LTGP/CAC ratios across dental, ICT, and professional services. Dashboard, not a pitch deck.",
  },
];

export default function WhyAlpineSection() {
  return (
    <section className="py-24 bg-background border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto px-5 md:px-8">

        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <motion.div
            initial={{ opacity: 0, y: -8 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} className="flex justify-center mb-5">
            <img
              src={logoPath}
              alt="Alpine Marketing"
              className="h-12 w-auto invert brightness-[2.5] opacity-90"
            />
          </motion.div>
          <motion.span
            initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
            className="text-primary font-bold tracking-widest text-xs uppercase mb-4 block"
            style={{ letterSpacing: "0.2em" }}>
            Why Alpine
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold">
            Why Choose Alpine Marketing?
          </motion.h2>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {CARDS.map((card, i) => (
            <motion.div
              key={card.title}
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
