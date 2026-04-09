import { motion } from "framer-motion";
import teamPhotoPath from "../../../../attached_assets/Screenshot_2026-03-23_at_01.32.28_1775773255892.png";

export default function TeamSection() {
  const members = [
    { name: "Roman Siladii", role: "Founder · CRM Funnels & Automation Strategy" },
    { name: "Alex Skylar", role: "Performance Marketing · Google & Meta Ads" },
    { name: "Eugen Kokayko", role: "Web Development & Automation Engineering" },
    { name: "Kate Dudnik", role: "SEO & Conversion Copywriting" },
    { name: "Alex Haladzhi", role: "Photo & Video Production" },
    { name: "Illya Mikulin", role: "Video Editing & Motion Design" },
  ];

  return (
    <section id="team" className="py-24 bg-[#0A0A0F] border-t border-white/5 relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-secondary font-bold tracking-widest text-sm uppercase mb-4 block"
          >
            The Team
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            Operators, Not Theorists.
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-muted-foreground"
          >
            Every person on our team builds and runs the systems we sell. No account managers reading scripts — just specialists who've shipped automation for dozens of SMBs.
          </motion.p>
        </div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="mb-16 rounded-2xl overflow-hidden border border-white/10 shadow-2xl"
        >
          <img 
            src={teamPhotoPath} 
            alt="Alpine Marketing Team" 
            className="w-full object-cover"
          />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-8 gap-x-12 max-w-5xl mx-auto">
          {members.map((member, i) => (
            <motion.div 
              key={member.name}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex flex-col"
            >
              <h4 className="text-lg font-bold text-white mb-1">{member.name}</h4>
              <p className="text-sm text-muted-foreground">{member.role}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
