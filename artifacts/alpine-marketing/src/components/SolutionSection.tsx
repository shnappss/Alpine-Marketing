import { motion } from "framer-motion";
import { Magnet, Zap, Workflow, TrendingUp, ArrowRight } from "lucide-react";

export default function SolutionSection() {
  const stages = [
    {
      title: "CAPTURE",
      icon: Magnet,
      desc: "Targeted traffic via Meta, Google & LinkedIn Ads, cold outreach, and SEO-optimized landing pages — all feeding into one centralized CRM pipeline.",
    },
    {
      title: "ENGAGE",
      icon: Zap,
      desc: "AI Claude Agents respond within 60 seconds — 24/7. Intelligent triage determines intent, selects the right channel (SMS, email, WhatsApp), and initiates personalized conversation.",
    },
    {
      title: "NURTURE",
      icon: Workflow,
      desc: "Multi-step automated sequences in GoHighLevel keep every lead warm. Reactivation campaigns recover 48%+ of dormant prospects. No lead is ever forgotten.",
    },
    {
      title: "MEASURE & COMPOUND",
      icon: TrendingUp,
      desc: "Real-time dashboards track CAC, LTGP, conversion rates at every stage, and pipeline velocity. We optimize what we measure — and we measure what drives profit, not vanity.",
    },
  ];

  return (
    <section id="solution" className="py-24 bg-[#11111A] border-t border-white/5 relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-secondary font-bold tracking-widest text-sm uppercase mb-4 block"
          >
            The Alpine Approach
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            We Don't Fix One Thing. We Systematize Everything.
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-muted-foreground"
          >
            Alpine Marketing replaces your patchwork of tools and manual effort with a unified, AI-powered acquisition engine. Every stage — from first ad click to repeat purchase — runs on automation, measured by the only metrics that matter.
          </motion.p>
        </div>

        <div className="flex flex-col lg:flex-row items-stretch lg:items-start gap-6 lg:gap-4 mb-16 relative">
           {/* Desktop connecting line */}
           <div className="hidden lg:block absolute top-12 left-[10%] right-[10%] h-px border-t-2 border-dashed border-secondary/20 z-0" />
           
           {stages.map((stage, i) => (
             <motion.div 
               key={stage.title}
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ delay: i * 0.15 }}
               className="flex-1 flex flex-col items-center text-center relative z-10 group"
             >
               <div className="w-24 h-24 rounded-2xl bg-card border border-secondary/30 flex items-center justify-center mb-6 shadow-[0_0_15px_rgba(0,193,140,0.15)] group-hover:shadow-[0_0_25px_rgba(0,193,140,0.3)] transition-all">
                 <stage.icon className="w-10 h-10 text-secondary" />
               </div>
               
               <h3 className="text-xl font-bold tracking-wide mb-4 flex items-center gap-2">
                 <span className="text-secondary/50 text-sm">0{i+1}</span> {stage.title}
               </h3>
               <p className="text-muted-foreground text-sm leading-relaxed px-2">
                 {stage.desc}
               </p>

               {i < stages.length - 1 && (
                 <div className="lg:hidden my-6 text-secondary/30">
                   <ArrowRight className="w-6 h-6 rotate-90" />
                 </div>
               )}
             </motion.div>
           ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-card p-8 rounded-2xl border border-secondary/20 max-w-4xl mx-auto relative overflow-hidden"
        >
          <div className="absolute left-0 top-0 bottom-0 w-2 bg-secondary" />
          <h4 className="text-xl font-bold mb-3">Why LTGP, not just LTV?</h4>
          <p className="text-muted-foreground leading-relaxed">
            LTV counts revenue before your delivery costs. <strong className="text-white font-semibold">Lifetime Gross Profit (LTGP)</strong> is what's left after fulfillment — the true ceiling on a viable CAC. We build campaigns around that number because it's the only one that determines whether growth is actually profitable.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
