import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { SiAnthropic, SiN8N } from "react-icons/si";
import { LayoutDashboard } from "lucide-react";

const TOOL_KEYS = [
  { key: "claude", icon: SiAnthropic,     color: "text-primary",     bgColor: "bg-primary/10",     borderColor: "border-primary/30" },
  { key: "n8n",    icon: SiN8N,           color: "text-secondary",   bgColor: "bg-secondary/10",   borderColor: "border-secondary/30" },
  { key: "ghl",    icon: LayoutDashboard, color: "text-destructive", bgColor: "bg-destructive/10", borderColor: "border-destructive/30" },
] as const;

export default function TechStackSection() {
  const { t } = useTranslation();

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
            {t("techStack.eyebrow")}
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            {t("techStack.title")}
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {TOOL_KEYS.map((tool, i) => {
            const Icon = tool.icon;
            return (
              <motion.div
                key={tool.key}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className={`bg-card p-8 rounded-2xl border ${tool.borderColor} relative group overflow-hidden transition-all hover:-translate-y-1`}
              >
                <div className={`absolute inset-0 bg-gradient-to-b ${tool.bgColor} to-transparent opacity-0 group-hover:opacity-50 transition-opacity`} />

                <div className={`inline-flex px-3 py-1 rounded-full text-xs font-bold tracking-wider ${tool.bgColor} ${tool.color} mb-6`}>
                  {t(`techStack.tools.${tool.key}.role`)}
                </div>

                <div className="flex items-center gap-4 mb-6">
                  <Icon className={`w-8 h-8 ${tool.color}`} />
                  <h3 className="text-2xl font-bold">{t(`techStack.tools.${tool.key}.name`)}</h3>
                </div>

                <p className="text-muted-foreground text-sm leading-relaxed relative z-10">
                  {t(`techStack.tools.${tool.key}.desc`)}
                </p>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="text-xl font-medium text-white/90">
            {t("techStack.footer")}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
