import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import FunnelAnimation from "./FunnelAnimation";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center pt-24 overflow-hidden bg-dot-pattern">
      {/* Background gradients */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px] -z-10 mix-blend-screen pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-secondary/10 rounded-full blur-[100px] -z-10 mix-blend-screen pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6 z-10 flex flex-col lg:flex-row items-center gap-12">
        <div className="w-full lg:w-[60%] flex flex-col gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-primary font-bold tracking-widest text-sm uppercase mb-4 block">
              Full-Funnel Automation for SMBs
            </span>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold leading-[1.1] text-white">
              Stop Pouring Leads Into a{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-destructive to-primary">
                Leaky Bucket.
              </span>
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl"
          >
            Alpine Marketing builds AI-powered acquisition systems that plug every
            gap — from first click to lifetime profit. We measure what matters:
            your CAC goes down, your LTGP goes up.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 mt-4"
          >
            <a
              href="#contact"
              className="group flex items-center justify-center gap-2 px-8 py-4 bg-primary text-white rounded-lg font-bold text-lg hover:bg-primary/90 transition-all shadow-[0_0_20px_rgba(61,128,204,0.4)] hover:shadow-[0_0_30px_rgba(61,128,204,0.6)]"
              data-testid="button-hero-primary"
            >
              Book Your Free Pipeline Audit
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#results"
              className="flex items-center justify-center px-8 py-4 rounded-lg font-bold text-lg border border-white/20 hover:bg-white/5 transition-colors text-white"
              data-testid="button-hero-secondary"
            >
              See the Results
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-8 pt-8 border-t border-white/10"
          >
            <p className="text-sm font-medium text-muted-foreground">
              <span className="text-white">Trusted by 20+ Swiss SMBs</span> ·
              Average LTV/CAC improvement:{" "}
              <span className="text-secondary">2.1×</span> · Avg. CAC reduction:{" "}
              <span className="text-secondary">32%</span>
            </p>
          </motion.div>
        </div>

        <motion.div
          className="w-full lg:w-[40%] relative"
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          <div className="aspect-[4/5] bg-card rounded-2xl border border-white/10 flex items-center justify-center relative overflow-hidden shadow-2xl p-6">
            <div className="absolute inset-0 bg-gradient-to-b from-primary/10 to-transparent pointer-events-none" />
            <div className="w-full h-full z-10 relative">
              <FunnelAnimation />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
