import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const FAQS = [
  {
    q: "Do you only run ads?",
    a: "No. Ads are one input to a system. We build the full acquisition engine — paid traffic, landing pages, CRM setup, lead routing, AI follow-up, nurture sequences, reactivation campaigns, and reporting. If your funnel is leaking at the follow-up stage, throwing more ad spend at it just makes the leak bigger.",
  },
  {
    q: "Can you work with our existing CRM?",
    a: "It depends on the platform. We operate natively in GoHighLevel and can connect to most CRMs via API or n8n automation. If your CRM supports webhooks or has an API, we can integrate it. If it doesn't — we'll tell you honestly and explain the options.",
  },
  {
    q: "Do you help with automation and lead follow-up?",
    a: "That is the core of what we do. Speed-to-lead is one of the highest-ROI fixes available. Our Claude AI Agents respond within 60 seconds, qualify the lead, and route it correctly — 24/7, including weekends. Your team only touches leads that are actually ready.",
  },
  {
    q: "What markets do you work in?",
    a: "Our primary experience is in Switzerland, the EU, and cross-border European markets. We have worked with dental clinics, ICT companies, professional service firms, and local service businesses. We do not take on every business — we will tell you on the audit call if we are not the right fit.",
  },
  {
    q: "How do you handle privacy and tracking in post-cookie markets?",
    a: "We build consent-aware infrastructure from the start. That means proper cookie consent management, first-party data strategies, GDPR-compliant form flows, and CRM tracking that does not depend on third-party cookies. We do not load tracking scripts before consent. We do not use dark patterns.",
  },
  {
    q: "What happens in a free funnel audit?",
    a: "We review your current acquisition setup — traffic sources, landing pages, CRM structure, follow-up sequences, reporting. We identify where leads are dropping out and what fixing each leak would be worth in revenue terms. You get a clear picture of the system gaps before we discuss working together. No pitch deck, no vague slides.",
  },
];

export default function FAQSection() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="faq" className="py-24 bg-[#05050A] border-t border-white/5 relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-primary font-bold tracking-widest text-sm uppercase mb-4 block"
          >
            FAQ
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            Common Questions, Straight Answers.
          </motion.h2>
        </div>

        <div className="max-w-3xl mx-auto space-y-3">
          {FAQS.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ delay: i * 0.07 }}
              className="bg-card border border-white/8 rounded-xl overflow-hidden"
            >
              <button
                className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left group"
                onClick={() => setOpen(open === i ? null : i)}
                aria-expanded={open === i}
              >
                <span className="font-semibold text-white group-hover:text-primary transition-colors pr-4">
                  {faq.q}
                </span>
                <ChevronDown
                  className={`w-5 h-5 text-muted-foreground flex-shrink-0 transition-transform duration-300 ${
                    open === i ? "rotate-180 text-primary" : ""
                  }`}
                />
              </button>

              <AnimatePresence initial={false}>
                {open === i && (
                  <motion.div
                    key="content"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <p className="px-6 pb-5 text-muted-foreground leading-relaxed text-sm">
                      {faq.a}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
