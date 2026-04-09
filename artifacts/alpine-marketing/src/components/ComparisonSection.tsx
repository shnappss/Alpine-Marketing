import { motion } from "framer-motion";
import { Check, X } from "lucide-react";

export default function ComparisonSection() {
  const rows = [
    { label: "Response Time", ai: "Under 60 seconds, 24/7", manual: "Whenever available — often hours" },
    { label: "Lead Qualification", ai: "AI-scored, consistent, every lead", manual: "Subjective, varies by rep" },
    { label: "Scaling", ai: "Add volume without adding headcount", manual: "Every new lead = another hire" },
    { label: "Reporting", ai: "Real-time CAC, LTGP, pipeline velocity", manual: "Spreadsheets updated when someone remembers" },
    { label: "Dormant Leads", ai: "Automatically reactivated via campaigns", manual: "Forgotten in a CRM graveyard" },
    { label: "Sales Cycle", ai: "30-40% shorter through automation", manual: "Depends on who's selling that week" },
  ];

  return (
    <section className="py-24 bg-[#0A0A0F] relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">What Changes When You Systematize</h2>
        </motion.div>

        <div className="max-w-5xl mx-auto flex flex-col md:flex-row rounded-2xl overflow-hidden border border-white/10">
          
          {/* AI Side */}
          <div className="flex-1 bg-[#13131F] p-8 md:p-10 relative">
            <div className="absolute inset-0 bg-primary/5 pointer-events-none" />
            <h3 className="text-2xl font-bold text-primary mb-8 relative z-10 flex items-center gap-3">
              Alpine AI Engine
              <span className="flex h-3 w-3 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-primary"></span>
              </span>
            </h3>
            
            <div className="space-y-6 relative z-10">
              {rows.map((row, i) => (
                <div key={i} className="border-b border-white/5 pb-4 last:border-0">
                  <div className="text-xs text-muted-foreground uppercase tracking-wider mb-2">{row.label}</div>
                  <div className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-white font-medium">{row.ai}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Manual Side */}
          <div className="flex-1 bg-black/50 p-8 md:p-10 border-t md:border-t-0 md:border-l border-white/10 relative">
            <h3 className="text-2xl font-bold text-muted-foreground mb-8">Manual Sales Process</h3>
            
            <div className="space-y-6">
              {rows.map((row, i) => (
                <div key={i} className="border-b border-white/5 pb-4 last:border-0 opacity-70">
                  <div className="text-xs text-muted-foreground uppercase tracking-wider mb-2 md:hidden">{row.label}</div>
                  <div className="flex items-start gap-3">
                    <X className="w-5 h-5 text-destructive/70 shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{row.manual}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
