import { motion } from "framer-motion";
import { Megaphone, MousePointerClick, GitBranch, MessageSquare, RefreshCw, BarChart3 } from "lucide-react";

const STEPS = [
  {
    number: "01",
    icon: Megaphone,
    title: "Attract",
    desc: "Paid traffic on Meta, Google & LinkedIn targets the right prospects — not just anyone with a budget. Landing pages built to convert, not to impress.",
    color: "text-primary",
    border: "border-primary/20",
    bg: "bg-primary/10",
  },
  {
    number: "02",
    icon: MousePointerClick,
    title: "Capture",
    desc: "Every lead lands in one centralized CRM pipeline — no spreadsheets, no duplicates, no lost submissions. Attribution tracked from first touch.",
    color: "text-primary",
    border: "border-primary/20",
    bg: "bg-primary/10",
  },
  {
    number: "03",
    icon: GitBranch,
    title: "Route",
    desc: "Leads are automatically scored, segmented, and routed by intent signal, source, and service type. The right lead hits the right workflow in seconds.",
    color: "text-secondary",
    border: "border-secondary/20",
    bg: "bg-secondary/10",
  },
  {
    number: "04",
    icon: MessageSquare,
    title: "Engage",
    desc: "Claude AI responds within 60 seconds — 24/7. It qualifies, books, and hands off to your team only when the lead is ready. No human time wasted on cold leads.",
    color: "text-secondary",
    border: "border-secondary/20",
    bg: "bg-secondary/10",
  },
  {
    number: "05",
    icon: RefreshCw,
    title: "Nurture",
    desc: "Multi-step sequences keep every lead warm. Dormant contacts get reactivation campaigns. No lead is abandoned — they're just in a different stage of the funnel.",
    color: "text-destructive",
    border: "border-destructive/20",
    bg: "bg-destructive/10",
  },
  {
    number: "06",
    icon: BarChart3,
    title: "Report & Improve",
    desc: "Real-time dashboards track CAC, LTGP, speed-to-lead, show-up rates, and pipeline velocity. We optimize what we measure — and we only measure what drives profit.",
    color: "text-destructive",
    border: "border-destructive/20",
    bg: "bg-destructive/10",
  },
];

export default function HowItWorksSection() {
  return (
    <section id="how-it-works" className="py-24 bg-[#0D0D16] border-t border-white/5 relative overflow-hidden">
      <div className="absolute inset-0 bg-dot-pattern opacity-30 pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-secondary font-bold tracking-widest text-sm uppercase mb-4 block"
          >
            How It Works
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            A System, Not a Service.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-muted-foreground"
          >
            Six steps. One engine. Every lead tracked from first click to closed deal — and back again.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {STEPS.map((step, i) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className={`relative bg-card rounded-xl border ${step.border} p-8 flex flex-col gap-4 group hover:bg-white/[0.02] transition-colors`}
            >
              <div className="flex items-start justify-between">
                <div className={`w-12 h-12 rounded-xl ${step.bg} border ${step.border} flex items-center justify-center flex-shrink-0`}>
                  <step.icon className={`w-6 h-6 ${step.color}`} />
                </div>
                <span className="text-4xl font-extrabold text-white/5 leading-none select-none">
                  {step.number}
                </span>
              </div>

              <div>
                <h3 className="text-xl font-bold text-white mb-2">{step.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{step.desc}</p>
              </div>

              {i < STEPS.length - 1 && i % 3 !== 2 && (
                <div className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 w-6 h-px bg-white/10 z-10" />
              )}
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center text-sm text-muted-foreground mt-10 italic"
        >
          Results vary by market, offer, budget, and sales process. All figures based on delivered client work.
        </motion.p>
      </div>
    </section>
  );
}
