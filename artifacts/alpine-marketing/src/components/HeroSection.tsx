import { motion } from "framer-motion";
import { ArrowRight, Zap } from "lucide-react";
import { Link } from "wouter";
import FunnelAnimation from "./FunnelAnimation";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center pt-28 pb-16 overflow-hidden">

      {/* ── Rich directional background ── */}
      <div className="absolute inset-0 bg-[#060810]" />
      {/* Deep blue sweep from top-left */}
      <div className="absolute -top-32 -left-24 w-[750px] h-[650px] rounded-full bg-[radial-gradient(ellipse_at_center,_rgba(48,106,174,0.22)_0%,_transparent_70%)] blur-[1px] pointer-events-none" />
      {/* Teal accent bottom-right */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[400px] rounded-full bg-[radial-gradient(ellipse_at_center,_rgba(0,151,113,0.09)_0%,_transparent_70%)] pointer-events-none" />
      {/* Subtle center depth */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[500px] bg-[radial-gradient(ellipse_at_center,_rgba(48,106,174,0.05)_0%,_transparent_65%)] pointer-events-none" />
      {/* Fine grid overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.035]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-5 md:px-8 z-10 flex flex-col lg:flex-row items-center gap-12 lg:gap-16">

        {/* ── Left copy ── */}
        <div className="w-full lg:w-[55%] flex flex-col gap-7">

          {/* Eyebrow pill */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
          >
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-primary/30 bg-primary/10 text-primary text-[11.5px] font-semibold tracking-widest uppercase">
              <Zap className="w-3 h-3 fill-primary" />
              AI-Powered Full-Funnel Automation
            </span>
          </motion.div>

          {/* Headline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.07 }}
          >
            <h1 className="text-[3rem] md:text-[3.75rem] lg:text-[4.25rem] font-extrabold leading-[1.05] text-white tracking-tight">
              Stop Pouring Leads<br className="hidden sm:block" /> Into a{" "}
              <span
                className="text-transparent bg-clip-text"
                style={{
                  backgroundImage: "linear-gradient(115deg, #5ba3f5 0%, #3d80cc 45%, #00c18c 100%)",
                }}
              >
                Leaky Bucket.
              </span>
            </h1>
          </motion.div>

          {/* Sub-copy */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.16 }}
            className="text-[1.05rem] md:text-[1.15rem] text-white/52 leading-[1.75] max-w-xl font-light"
          >
            Alpine Marketing builds AI-powered acquisition systems that plug every
            gap — from first click to lifetime profit. We measure what matters:{" "}
            <span className="text-white/75 font-medium">your CAC goes down, your LTGP goes up.</span>
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.24 }}
            className="flex flex-col sm:flex-row gap-3 mt-1"
          >
            <Link
              href="/book-audit"
              className="group inline-flex items-center justify-center gap-2.5 px-7 py-3.5 bg-primary text-white font-semibold text-[15px] rounded-lg hover:bg-primary/90 active:scale-[0.98] transition-all shadow-[0_0_24px_rgba(61,128,204,0.45)] hover:shadow-[0_0_36px_rgba(61,128,204,0.65)]"
              data-testid="button-hero-primary"
            >
              Book Your Free Pipeline Audit
              <ArrowRight className="w-4.5 h-4.5 group-hover:translate-x-0.5 transition-transform" />
            </Link>
            <a
              href="/#results"
              className="inline-flex items-center justify-center px-7 py-3.5 rounded-lg font-semibold text-[15px] text-white/60 border border-white/10 hover:border-white/20 hover:text-white/90 hover:bg-white/[0.04] transition-all"
              data-testid="button-hero-secondary"
            >
              See the Results
            </a>
          </motion.div>

          {/* Trust strip */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-4 pt-6 border-t border-white/[0.07] flex flex-wrap items-center gap-x-5 gap-y-2"
          >
            <p className="text-[13px] text-white/40 font-medium">Trusted by 20+ Swiss SMBs</p>
            <div className="w-px h-4 bg-white/10" />
            <p className="text-[13px] text-white/40 font-medium">
              Avg LTGP/CAC improvement:{" "}
              <span className="text-secondary font-semibold">2.1×</span>
            </p>
            <div className="w-px h-4 bg-white/10" />
            <p className="text-[13px] text-white/40 font-medium">
              Avg CAC reduction:{" "}
              <span className="text-secondary font-semibold">32%</span>
            </p>
          </motion.div>
        </div>

        {/* ── Right — funnel animation ── */}
        <motion.div
          className="w-full lg:w-[45%]"
          initial={{ opacity: 0, x: 36, y: 8 }}
          animate={{ opacity: 1, x: 0, y: 0 }}
          transition={{ duration: 0.7, delay: 0.28, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="relative aspect-[4/5] bg-[#0c1220] rounded-2xl border border-white/[0.07] flex items-center justify-center overflow-hidden shadow-[0_32px_80px_rgba(0,0,0,0.5)]">
            {/* Glow behind card */}
            <div className="absolute -inset-1 rounded-2xl bg-gradient-to-br from-primary/15 to-transparent blur-xl pointer-events-none" />
            {/* Inner top shimmer */}
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
            <div className="w-full h-full relative z-10 p-5">
              <FunnelAnimation />
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
