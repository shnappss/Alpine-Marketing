import { motion } from "framer-motion";
import { SiAnthropic, SiN8N } from "react-icons/si";
import { LayoutDashboard } from "lucide-react";

export default function TechStackSection() {
  const tools = [
    {
      name: "Claude AI Agents",
      role: "THE BRAIN",
      color: "text-primary",
      bgColor: "bg-primary/10",
      borderColor: "border-primary/30",
      icon: SiAnthropic,
      desc: "Intelligent lead qualification and real-time intent analysis. Claude reads every incoming lead, scores urgency, determines the best response, and generates personalized human-like messages — all before your team finishes their morning coffee.",
    },
    {
      name: "n8n Workflow Automation",
      role: "THE NERVOUS SYSTEM",
      color: "text-secondary",
      bgColor: "bg-secondary/10",
      borderColor: "border-secondary/30",
      icon: SiN8N,
      desc: "The connective tissue that links your ads, CRM, calendar, and reporting into a single automated pipeline. Custom workflows trigger instantly based on lead behavior — no Zapier tax, no duct tape.",
    },
    {
      name: "GoHighLevel CRM",
      role: "THE COMMAND CENTER",
      color: "text-destructive",
      bgColor: "bg-destructive/10",
      borderColor: "border-destructive/30",
      icon: LayoutDashboard,
      desc: "Pipeline management, automated sequences, appointment booking, and omni-channel communication (SMS / Email / WhatsApp) — all in one platform your team actually uses.",
    },
  ];

  return (
    <section id="tech-stack" className="py-24 bg-background relative overflow-hidden bg-dot-pattern">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-primary font-bold tracking-widest text-sm uppercase mb-4 block"
          >
            The Engine Under The Hood
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            Three Tools. Zero Manual Handoffs. One Unified System.
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {tools.map((tool, i) => (
            <motion.div
              key={tool.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className={`bg-card p-8 rounded-2xl border ${tool.borderColor} relative group overflow-hidden transition-all hover:-translate-y-1`}
            >
              <div className={`absolute inset-0 bg-gradient-to-b ${tool.bgColor} to-transparent opacity-0 group-hover:opacity-50 transition-opacity`} />
              
              <div className={`inline-flex px-3 py-1 rounded-full text-xs font-bold tracking-wider ${tool.bgColor} ${tool.color} mb-6`}>
                {tool.role}
              </div>
              
              <div className="flex items-center gap-4 mb-6">
                <tool.icon className={`w-8 h-8 ${tool.color}`} />
                <h3 className="text-2xl font-bold">{tool.name}</h3>
              </div>
              
              <p className="text-muted-foreground text-sm leading-relaxed relative z-10">
                {tool.desc}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="text-xl font-medium text-white/90">
            The result? A system that works while you sleep, scales without hiring, and gets smarter with every lead it processes.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
