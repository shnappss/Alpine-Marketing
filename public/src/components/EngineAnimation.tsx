import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

/* ─── colour tokens ─────────────────────────────── */
const VIOLET = "#0891b2";
const MINT   = "#10b981";
const AMBER  = "#06b6d4";
const META   = "#1877f2";
const GOOGLE = "#ea4335";
const LI     = "#0a66c2";
const DIM    = "rgba(255,255,255,0.18)";
const FONT   = "'Space Grotesk', 'Inter', sans-serif";

/* ─── counter hook ─────────────────────────────── */
function useCount(target: number, duration = 1600) {
  const [val, setVal] = useState(0);
  const raf = useRef(0);
  useEffect(() => {
    let start: number | null = null;
    const from = 0;
    function step(ts: number) {
      if (!start) start = ts;
      const pct = Math.min((ts - start) / duration, 1);
      const ease = 1 - Math.pow(1 - pct, 3);
      setVal(Math.round(from + (target - from) * ease));
      if (pct < 1) raf.current = requestAnimationFrame(step);
    }
    raf.current = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf.current);
  }, [target, duration]);
  return val;
}

/* ─── pulsing flow dot along a vertical path ───── */
function FlowDot({ color, delay, duration = 1.6, travelPx = 30 }: { color: string; delay: number; duration?: number; travelPx?: number }) {
  return (
    <motion.div
      className="w-1.5 h-1.5 rounded-full absolute left-1/2 -translate-x-1/2"
      style={{ background: color, boxShadow: `0 0 6px ${color}`, top: 0 }}
      initial={{ y: 0, opacity: 0 }}
      animate={{ y: travelPx, opacity: [0, 1, 1, 0] }}
      transition={{ duration, delay, repeat: Infinity, ease: "linear" }}
    />
  );
}

/* ─── connector line with dots ──────────────────── */
function Connector({ color = VIOLET, height = 36, dots = 2 }: { color?: string; height?: number; dots?: number }) {
  return (
    <div className="relative flex justify-center" style={{ height }}>
      <div className="w-px h-full opacity-20" style={{ background: color }} />
      {Array.from({ length: dots }).map((_, i) => (
        <FlowDot key={i} color={color} delay={i * (1.2 / dots)} duration={1.2} travelPx={height - 6} />
      ))}
    </div>
  );
}

/* ─── source platform pill ──────────────────────── */
function SourcePill({ label, color, delay }: { label: string; color: string; delay: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[11px] font-semibold border"
      style={{
        borderColor: `${color}40`,
        background: `${color}12`,
        color,
        fontFamily: FONT,
      }}
    >
      <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: color }} />
      {label}
    </motion.div>
  );
}

/* ─── main component ────────────────────────────── */
export default function EngineAnimation() {
  const cac  = useCount(171, 2000);
  const ltgp = useCount(34, 2200);

  return (
    <div
      className="relative w-full h-full flex flex-col items-center justify-start py-5 px-4 select-none gap-0"
      style={{ fontFamily: FONT }}
    >
      {/* ── Source platforms ── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4 }}
        className="flex items-center gap-2 flex-wrap justify-center"
      >
        <SourcePill label="Meta Ads"   color={META}   delay={0.1} />
        <SourcePill label="Google Ads" color={GOOGLE} delay={0.2} />
        <SourcePill label="LinkedIn"   color={LI}     delay={0.3} />
      </motion.div>

      {/* ── connector down ── */}
      <Connector color={VIOLET} height={28} dots={3} />

      {/* ── AI Triage node ── */}
      <motion.div
        initial={{ opacity: 0, scale: 0.92 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.35 }}
        className="w-full rounded-xl border p-3 relative"
        style={{ borderColor: `${VIOLET}35`, background: `${VIOLET}0f` }}
      >
        {/* Ambient glow */}
        <div className="absolute inset-0 rounded-xl opacity-0 hover:opacity-100 transition-opacity"
             style={{ background: `radial-gradient(ellipse at center, ${VIOLET}12 0%, transparent 70%)` }} />

        <div className="flex items-center justify-between gap-3">
          <div>
            <div className="text-[10px] font-semibold uppercase tracking-widest mb-0.5" style={{ color: VIOLET }}>
              AI Triage — Claude
            </div>
            <div className="text-[11.5px] text-white/60 leading-snug">
              Intent scored · Channel selected · Response sent
            </div>
          </div>
          {/* Pulsing AI icon */}
          <div className="flex-shrink-0 relative">
            <motion.div
              className="w-9 h-9 rounded-full flex items-center justify-center text-sm"
              style={{ background: `${VIOLET}22`, border: `1px solid ${VIOLET}40` }}
              animate={{ boxShadow: [`0 0 0px ${VIOLET}00`, `0 0 16px ${VIOLET}60`, `0 0 0px ${VIOLET}00`] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              ⚡
            </motion.div>
          </div>
        </div>

        {/* Speed badge */}
        <div className="mt-2 inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full text-[10px] font-semibold"
             style={{ background: `${AMBER}15`, color: AMBER, border: `1px solid ${AMBER}30` }}>
          <span className="w-1 h-1 rounded-full bg-current animate-pulse" />
          &lt;60s response · 24/7
        </div>
      </motion.div>

      {/* ── connector down ── */}
      <Connector color={MINT} height={28} dots={2} />

      {/* ── CRM + Sequences node ── */}
      <motion.div
        initial={{ opacity: 0, scale: 0.92 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="w-full rounded-xl border p-3"
        style={{ borderColor: `${MINT}30`, background: `${MINT}0a` }}
      >
        <div className="flex items-center justify-between gap-3">
          <div>
            <div className="text-[10px] font-semibold uppercase tracking-widest mb-0.5" style={{ color: MINT }}>
              CRM + Automation — GHL · n8n
            </div>
            <div className="text-[11.5px] text-white/60 leading-snug">
              Nurture sequences · Booking · Reactivation
            </div>
          </div>
          <motion.div
            className="flex-shrink-0 w-9 h-9 rounded-full flex items-center justify-center text-sm"
            style={{ background: `${MINT}18`, border: `1px solid ${MINT}35` }}
            animate={{ rotate: 360 }}
            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
          >
            ⚙️
          </motion.div>
        </div>

        {/* channel tags */}
        <div className="mt-2 flex gap-1.5 flex-wrap">
          {["SMS", "Email", "WhatsApp", "Appointments"].map(t => (
            <span key={t} className="px-1.5 py-0.5 rounded text-[9px] font-medium"
                  style={{ background: "rgba(255,255,255,0.06)", color: DIM }}>
              {t}
            </span>
          ))}
        </div>
      </motion.div>

      {/* ── connector down ── */}
      <Connector color={MINT} height={24} dots={2} />

      {/* ── Dashboard KPI strip ── */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.65 }}
        className="w-full rounded-xl border p-3"
        style={{ borderColor: "rgba(255,255,255,0.08)", background: "rgba(255,255,255,0.03)" }}
      >
        <div className="text-[10px] font-semibold uppercase tracking-widest mb-2.5 text-white/40">
          Live Profit Dashboard
        </div>

        <div className="grid grid-cols-2 gap-2">
          {/* CAC going DOWN */}
          <div className="rounded-lg p-2.5"
               style={{ background: "rgba(248,113,113,0.08)", border: "1px solid rgba(248,113,113,0.2)" }}>
            <div className="text-[9px] uppercase tracking-wider text-white/40 mb-1">Customer Acq. Cost</div>
            <div className="flex items-end gap-1">
              <span className="text-xl font-bold tabular-nums leading-none" style={{ color: "#f87171" }}>
                CHF {cac}
              </span>
            </div>
            <div className="mt-1 text-[10px] font-semibold" style={{ color: MINT }}>
              ↓ 29% vs before
            </div>
          </div>

          {/* LTGP going UP */}
          <div className="rounded-lg p-2.5"
               style={{ background: `${MINT}0d`, border: `1px solid ${MINT}28` }}>
            <div className="text-[9px] uppercase tracking-wider text-white/40 mb-1">LTGP / CAC Ratio</div>
            <div className="flex items-end gap-1">
              <span className="text-xl font-bold tabular-nums leading-none" style={{ color: MINT }}>
                {(ltgp / 10).toFixed(1)}×
              </span>
            </div>
            <div className="mt-1 text-[10px] font-semibold" style={{ color: MINT }}>
              ↑ from 1.9× baseline
            </div>
          </div>
        </div>

        {/* pipeline bar */}
        <div className="mt-2.5">
          <div className="flex justify-between mb-1">
            <span className="text-[9px] text-white/35">Pipeline Conversion</span>
            <span className="text-[9px] font-semibold" style={{ color: MINT }}>24.7%</span>
          </div>
          <div className="h-1 rounded-full bg-white/5 overflow-hidden">
            <motion.div
              className="h-full rounded-full"
              style={{ background: `linear-gradient(90deg, ${VIOLET}, ${MINT})` }}
              initial={{ width: "0%" }}
              animate={{ width: "24.7%" }}
              transition={{ duration: 1.4, delay: 0.9, ease: "easeOut" }}
            />
          </div>
        </div>
      </motion.div>
    </div>
  );
}
