import { motion } from "framer-motion";

export default function WhyAlpineSection() {
  const cards = [
    {
      title: "Full-Funnel, Not Fragment",
      desc: "Most agencies optimize one channel. We systematize your entire acquisition engine — from first impression to lifetime profit.",
    },
    {
      title: "Metrics That Mean Something",
      desc: "We track CAC and LTGP, not clicks and impressions. You'll always know exactly what a customer costs and what they're worth — in profit, not revenue.",
    },
    {
      title: "AI-First, Human-Guided",
      desc: "Claude AI Agents handle triage, qualification, and response. Your team handles relationships and closing. Everyone does what they're best at.",
    },
    {
      title: "Swiss Precision, Startup Speed",
      desc: "GDPR-compliant infrastructure, transparent reporting, real-time tracking — delivered with the urgency of a team that knows speed-to-lead wins.",
    },
    {
      title: "Automation That Compounds",
      desc: "Every lead that enters the system makes it smarter. Reactivation campaigns, A/B-tested sequences, and continuous optimization mean your CAC drops over time, not just once.",
    },
    {
      title: "Proven, Not Promised",
      desc: "3.4:1 to 4.2:1 LTV/CAC ratios across dental, ICT, and professional services. We show you the dashboard, not a pitch deck.",
    },
  ];

  return (
    <section className="py-24 bg-background relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-primary font-bold tracking-widest text-sm uppercase mb-4 block"
          >
            Why Alpine
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            Built for SMBs Who Want Systems, Not Services.
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cards.map((card, i) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-card p-8 rounded-xl border border-white/5 hover:bg-white/[0.02] transition-colors"
            >
              <h3 className="text-xl font-bold mb-4 text-white">{card.title}</h3>
              <p className="text-muted-foreground leading-relaxed text-sm">
                {card.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
