import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

export default function CaseStudiesSection() {
  const cases = [
    {
      badge: "Healthcare / Dental",
      title: "Zurich Dental Clinic",
      challenge: "Grow patient pipeline while keeping acquisition costs sustainable.",
      approach: "Meta Ads lead capture → Claude AI triage → GHL nurture sequences + dormant patient reactivation.",
      timeline: "3 months",
      results: [
        "166 Leads",
        "41 Patients (24.7% conversion)",
        "CAC ↓29% (CHF 241 → CHF 171)",
        "LTV/CAC 3.4:1 (from 1.9:1)"
      ],
      insight: "51% from Meta Ads · 49% from AI Reactivation — nearly half the patients came from leads the clinic had already given up on."
    },
    {
      badge: "B2B Technology",
      title: "Swiss ICT Company",
      challenge: "Accelerate enterprise software sales and reduce long sales cycles.",
      approach: "LinkedIn & email campaigns → Claude AI qualification → n8n automation → GHL pipeline management.",
      timeline: "12 months",
      results: [
        "312 Qualified Leads",
        "67 Sales Meetings (21.5% rate)",
        "Sales Cycle ↓38% (45→28 days)",
        "CAC ↓35% (CHF 580→CHF 377)",
        "LTV/CAC 4.2:1 (from 2.1:1)",
        "CHF 487K revenue impact"
      ],
      insight: "Automated qualification eliminated 80 hours of manual sales follow-up per month, letting reps focus only on ready-to-buy prospects." // Expanded slightly for symmetry
    }
  ];

  return (
    <section id="results" className="py-24 bg-background relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-primary font-bold tracking-widest text-sm uppercase mb-4 block"
          >
            Proven Results
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            Real Numbers. Real Clients. Real Profit.
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {cases.map((study, i) => (
            <motion.div
              key={study.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="bg-card rounded-2xl border border-white/10 p-8 md:p-10 flex flex-col"
            >
              <div className="inline-block px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-muted-foreground w-fit mb-6">
                {study.badge}
              </div>
              <h3 className="text-3xl font-bold mb-8">{study.title}</h3>
              
              <div className="space-y-6 flex-grow">
                <div>
                  <h4 className="text-sm font-bold uppercase tracking-wider text-muted-foreground mb-2">Challenge</h4>
                  <p className="text-white/90">{study.challenge}</p>
                </div>
                <div>
                  <h4 className="text-sm font-bold uppercase tracking-wider text-muted-foreground mb-2">Approach</h4>
                  <p className="text-white/90 leading-relaxed">{study.approach}</p>
                </div>
                <div>
                  <h4 className="text-sm font-bold uppercase tracking-wider text-muted-foreground mb-2">Timeline: {study.timeline}</h4>
                </div>
                <div className="pt-4">
                  <h4 className="text-sm font-bold uppercase tracking-wider text-primary mb-3">Results</h4>
                  <ul className="space-y-2">
                    {study.results.map((res, j) => (
                      <li key={j} className="flex items-start gap-2 text-white/90">
                        <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                        <span className="font-medium">{res}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-white/10">
                <p className="text-sm italic text-muted-foreground leading-relaxed">
                  "{study.insight}"
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
