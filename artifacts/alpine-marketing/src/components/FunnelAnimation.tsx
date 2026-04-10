import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

/* ─── Brand tokens ─────────────────────────────────── */
const RED    = "#e84040";
const CYAN   = "#0891b2";
const GREEN  = "#10b981";
const MUTED  = "rgba(255,255,255,0.28)";
const FONT   = "'Space Grotesk', Inter, sans-serif";

/* ─── SVG geometry ─────────────────────────────────── */
const W     = 260;
const H     = 330;
const CX    = W / 2;
const TOP_W = 180;
const BOT_W = 40;
const F_TOP = 30;
const F_BOT = H - 80;

function edgeX(yFrac: number) {
  const half = TOP_W / 2 + (BOT_W / 2 - TOP_W / 2) * yFrac;
  return { left: CX - half, right: CX + half };
}
function dotY(yFrac: number) { return F_TOP + yFrac * (F_BOT - F_TOP); }

/* ─── Leak points ──────────────────────────────────── */
const HOLES: { yFrac: number; label: string; fix: string; side: "left" | "right" }[] = [
  { yFrac: 0.20, label: "Slow Reply",     fix: "AI <60s Reply",      side: "left"  },
  { yFrac: 0.42, label: "No Nurture",     fix: "Smart Sequences",    side: "right" },
  { yFrac: 0.62, label: "No Follow-up",   fix: "Auto Re-engage",     side: "left"  },
  { yFrac: 0.80, label: "No Attribution", fix: "Full Tracking",      side: "right" },
];

/* ─── Funnel path ──────────────────────────────────── */
const funnelPath = [
  `M ${CX - TOP_W / 2} ${F_TOP}`,
  `L ${CX + TOP_W / 2} ${F_TOP}`,
  `L ${CX + BOT_W / 2} ${F_BOT}`,
  `L ${CX - BOT_W / 2} ${F_BOT}`,
  "Z",
].join(" ");

/* ─── Duration constants ────────────────────────────── */
const BEFORE_MS     = 7500;
const TRANSITION_MS = 1800;
const AFTER_MS      = 9000;
const REVENUE_MAX   = 80000;
const DOT_INTERVAL  = 520;

type Phase = "before" | "transition" | "after";
type Dot   = {
  id: number;
  startX: number;
  /** null = flows through; number = leaks at this hole index */
  holeIdx: number | null;
};

let _uid = 0;
const uid  = () => ++_uid;
const sleep = (ms: number) => new Promise<void>(r => setTimeout(r, ms));

export default function FunnelAnimation() {
  const [phase,   setPhase]   = useState<Phase>("before");
  const [dots,    setDots]    = useState<Dot[]>([]);
  const [lost,    setLost]    = useState(0);
  const [revenue, setRevenue] = useState(0);
  const phaseRef  = useRef<Phase>("before");
  const revRef    = useRef(0);

  /* ── Dot spawner ─── */
  useEffect(() => {
    const id = setInterval(() => {
      const p = phaseRef.current;
      if (p === "transition") return;

      /* BEFORE: ~85% of leads leak; AFTER: all convert */
      const holeIdx = p === "before"
        ? (Math.random() < 0.85 ? Math.floor(Math.random() * HOLES.length) : null)
        : null;

      setDots(prev => [
        ...prev.slice(-22),
        { id: uid(), startX: CX + (Math.random() - 0.5) * TOP_W * 0.7, holeIdx },
      ]);
      if (p === "before" && holeIdx !== null) setLost(n => n + 1);
    }, DOT_INTERVAL);
    return () => clearInterval(id);
  }, []);

  /* ── Revenue smooth counter (AFTER phase) ─── */
  useEffect(() => {
    if (phase !== "after") return;
    revRef.current = 0;
    setRevenue(0);

    /* Tick every 80ms. Over AFTER_MS ms we want to reach REVENUE_MAX. */
    const tickMs  = 80;
    const ticks   = AFTER_MS / tickMs;
    /* Ease-in-out: accelerate then decelerate — simulate with eased increments */
    let tick = 0;
    const id = setInterval(() => {
      tick++;
      const t = tick / ticks;
      /* ease-in-out cubic: 3t²-2t³ */
      const ease = t < 1 ? 3 * t * t - 2 * t * t * t : 1;
      const next = Math.round(ease * REVENUE_MAX);
      revRef.current = next;
      setRevenue(next);
      if (tick >= ticks) clearInterval(id);
    }, tickMs);
    return () => clearInterval(id);
  }, [phase]);

  /* ── Phase sequencer ─── */
  useEffect(() => {
    let alive = true;
    (async () => {
      while (alive) {
        phaseRef.current = "before";  setPhase("before");  setLost(0);
        await sleep(BEFORE_MS);

        phaseRef.current = "transition"; setPhase("transition"); setDots([]);
        await sleep(TRANSITION_MS);

        phaseRef.current = "after"; setPhase("after");
        await sleep(AFTER_MS);
      }
    })();
    return () => { alive = false; };
  }, []);

  const isBefore = phase === "before";
  const isAfter  = phase === "after";

  const fillColor   = isBefore ? RED   : GREEN;
  const strokeColor = isBefore ? RED   : CYAN;

  return (
    <div className="relative w-full h-full flex flex-col items-center justify-start select-none pt-1">

      {/* ─── Phase badge ─── */}
      <div className="h-10 flex items-center justify-center w-full mb-0">
        <AnimatePresence mode="wait">
          {isBefore && (
            <motion.div key="b"
              initial={{ opacity: 0, y: -4 }} animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -4 }} transition={{ duration: 0.3 }}>
              <span className="block text-[10px] font-bold tracking-[0.18em] uppercase text-center"
                style={{ color: RED, fontFamily: FONT }}>WITHOUT ALPINE</span>
              <span className="block text-[9px] text-center mt-0.5"
                style={{ color: "rgba(255,255,255,0.28)", fontFamily: FONT }}>
                Leads enter — most disappear
              </span>
            </motion.div>
          )}
          {phase === "transition" && (
            <motion.div key="t"
              initial={{ opacity: 0 }} animate={{ opacity: 1 }}
              exit={{ opacity: 0 }} transition={{ duration: 0.3 }}>
              <span className="block text-[10px] font-bold tracking-[0.18em] uppercase text-center"
                style={{ color: CYAN, fontFamily: FONT }}>
                ALPINE IS SEALING THE FUNNEL…
              </span>
            </motion.div>
          )}
          {isAfter && (
            <motion.div key="a"
              initial={{ opacity: 0, y: -4 }} animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -4 }} transition={{ duration: 0.3 }}>
              <span className="block text-[10px] font-bold tracking-[0.18em] uppercase text-center"
                style={{ color: GREEN, fontFamily: FONT }}>WITH ALPINE MARKETING</span>
              <span className="block text-[9px] text-center mt-0.5"
                style={{ color: "rgba(255,255,255,0.28)", fontFamily: FONT }}>
                Every lead captured → revenue
              </span>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* ─── SVG ─── */}
      <svg viewBox={`0 0 ${W} ${H}`} width="100%" style={{ maxWidth: 260, flex: "1 1 auto", maxHeight: 300 }}
           className="overflow-visible">
        <defs>
          <linearGradient id="fFill" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%"   stopColor={fillColor} stopOpacity="0.22" />
            <stop offset="100%" stopColor={fillColor} stopOpacity="0.06" />
          </linearGradient>
          <linearGradient id="afterStream" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%"   stopColor={GREEN} stopOpacity="0.7" />
            <stop offset="100%" stopColor={GREEN} stopOpacity="0" />
          </linearGradient>
          <filter id="glow">
            <feGaussianBlur stdDeviation="2.5" result="blur" />
            <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
          </filter>
          <filter id="greenGlow">
            <feGaussianBlur stdDeviation="3.5" result="blur" />
            <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
          </filter>
          <filter id="cyanGlow">
            <feGaussianBlur stdDeviation="4" result="blur" />
            <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
          </filter>
          <clipPath id="funnelClip"><path d={funnelPath} /></clipPath>
        </defs>

        {/* LEADS IN label */}
        <text x={CX} y={F_TOP - 12} fill={MUTED} fontSize="8" textAnchor="middle"
              fontFamily={FONT} letterSpacing="1.8">LEADS IN</text>

        {/* Funnel body */}
        <motion.path d={funnelPath} fill="url(#fFill)"
          animate={{ opacity: phase === "transition" ? 0.3 : 1 }}
          transition={{ duration: 0.6 }} />
        {/* Left edge */}
        <motion.line x1={CX-TOP_W/2} y1={F_TOP} x2={CX-BOT_W/2} y2={F_BOT}
          strokeWidth="1.5"
          animate={{ stroke: strokeColor, opacity: phase === "transition" ? 0.2 : 0.7 }}
          transition={{ duration: 0.6 }} />
        {/* Right edge */}
        <motion.line x1={CX+TOP_W/2} y1={F_TOP} x2={CX+BOT_W/2} y2={F_BOT}
          strokeWidth="1.5"
          animate={{ stroke: strokeColor, opacity: phase === "transition" ? 0.2 : 0.7 }}
          transition={{ duration: 0.6 }} />
        {/* Top bar */}
        <motion.line x1={CX-TOP_W/2} y1={F_TOP} x2={CX+TOP_W/2} y2={F_TOP}
          strokeWidth="1.5"
          animate={{ stroke: strokeColor, opacity: phase === "transition" ? 0.2 : 0.7 }}
          transition={{ duration: 0.6 }} />

        {/* ─── Hole / Plug indicators ─── */}
        {HOLES.map((hole, i) => {
          const { left, right } = edgeX(hole.yFrac);
          const px  = hole.side === "left" ? left  : right;
          const py  = dotY(hole.yFrac);
          const lx  = hole.side === "left" ? px - 9 : px + 9;
          const anc = hole.side === "left" ? "end"   : "start";
          return (
            <g key={i}>
              <AnimatePresence mode="wait">
                {!isAfter ? (
                  <motion.g key={`hole-${i}`}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: phase === "transition" ? 0 : 1 }}
                    exit={{ opacity: 0 }}>
                    <motion.circle cx={px} cy={py} r={5} fill={RED} filter="url(#glow)"
                      animate={{ opacity: [0.6, 1, 0.6], scale: [0.9, 1.25, 0.9] }}
                      transition={{ duration: 1.1, repeat: Infinity }}
                      style={{ transformOrigin: `${px}px ${py}px` }} />
                    <text x={lx} y={py + 3.5} fill={RED} fontSize="7.5" fontWeight="600"
                          textAnchor={anc} fontFamily={FONT} opacity="0.9">{hole.label}</text>
                  </motion.g>
                ) : (
                  <motion.g key={`plug-${i}`}
                    initial={{ scale: 0, opacity: 0 }} animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0, opacity: 0 }}
                    transition={{ duration: 0.4, delay: i * 0.12 }}
                    style={{ transformOrigin: `${px}px ${py}px` }}>
                    <circle cx={px} cy={py} r={5.5} fill={GREEN} filter="url(#glow)" opacity={0.95} />
                    <text x={px} y={py + 3.5} fill="white" fontSize="6" textAnchor="middle" fontFamily={FONT}>✓</text>
                    <text x={lx} y={py + 3.5} fill={GREEN} fontSize="7.5" fontWeight="600"
                          textAnchor={anc} fontFamily={FONT} opacity="0.95">{hole.fix}</text>
                  </motion.g>
                )}
              </AnimatePresence>
            </g>
          );
        })}

        {/* ─── Dots ─── */}
        <AnimatePresence>
          {dots.map(dot => {
            if (dot.holeIdx !== null) {
              /* Leaking dot: travels down into funnel then escapes sideways */
              const hole = HOLES[dot.holeIdx];
              const { left, right } = edgeX(hole.yFrac);
              const hx = hole.side === "left" ? left  : right;
              const hy = dotY(hole.yFrac);
              const ex = hole.side === "left" ? hx - 55 : hx + 55;
              return (
                <motion.circle key={dot.id} r={3.5} fill={RED} filter="url(#glow)"
                  initial={{ cx: dot.startX, cy: F_TOP + 4, opacity: 0 }}
                  animate={{
                    cx: [dot.startX, hx, ex],
                    cy: [F_TOP + 4, hy, hy + 22],
                    opacity: [0, 0.9, 0.9, 0],
                  }}
                  transition={{ duration: 2.4, ease: "easeIn", times: [0, 0.4, 1] }}
                  exit={{ opacity: 0 }}
                />
              );
            } else {
              /* Converting dot: flows all the way through */
              const dotColor = isAfter ? GREEN : "rgba(255,255,255,0.35)";
              const filterId = isAfter ? "url(#greenGlow)" : "none";
              return (
                <motion.circle key={dot.id} r={3.5} fill={dotColor} filter={filterId}
                  initial={{ cx: dot.startX, cy: F_TOP + 4, opacity: 0 }}
                  animate={{
                    cx: [dot.startX, CX + (dot.startX - CX) * 0.15],
                    cy: [F_TOP + 4, F_BOT + 28],
                    opacity: [0, 1, 1, 0],
                  }}
                  transition={{ duration: 2.8, ease: "easeIn", times: [0, 0.5, 0.85, 1] }}
                  exit={{ opacity: 0 }}
                />
              );
            }
          })}
        </AnimatePresence>

        {/* ─── AFTER: animated output stream beam ─── */}
        <AnimatePresence>
          {isAfter && (
            <motion.g key="stream"
              initial={{ opacity: 0 }} animate={{ opacity: 1 }}
              exit={{ opacity: 0 }} transition={{ duration: 0.5 }}>
              {/* Narrow glowing beam from funnel bottom */}
              <motion.rect
                x={CX - 14} y={F_BOT} width={28} height={28} rx={4}
                fill="url(#afterStream)"
                animate={{ opacity: [0.5, 0.9, 0.5] }}
                transition={{ duration: 1.2, repeat: Infinity }} />
              {/* Funnel bottom glow ring */}
              <motion.ellipse cx={CX} cy={F_BOT} rx={20} ry={5}
                fill="none" stroke={GREEN} strokeWidth="1.5"
                animate={{ opacity: [0.4, 0.9, 0.4], ry: [4, 6, 4] }}
                transition={{ duration: 1.0, repeat: Infinity }} />
            </motion.g>
          )}
        </AnimatePresence>

        {/* Bottom label */}
        <motion.text x={CX} y={F_BOT + 42} fontSize="8" textAnchor="middle"
          fontFamily={FONT} fontWeight="700" letterSpacing="1.8"
          animate={{ fill: isAfter ? GREEN : "rgba(255,255,255,0.18)" }}
          transition={{ duration: 0.5 }}>
          {isAfter ? "REVENUE" : "LOST"}
        </motion.text>
      </svg>

      {/* ─── Bottom KPI strip ─── */}
      <div className="w-full flex-shrink-0 px-4 pb-3">
        <AnimatePresence mode="wait">

          {/* BEFORE */}
          {isBefore && (
            <motion.div key="kpi-before"
              initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 6 }} transition={{ duration: 0.35 }}
              className="flex items-stretch gap-2">
              <div className="flex-1 rounded-xl border py-2.5 px-3 text-center"
                   style={{ borderColor: "rgba(232,64,64,0.3)", background: "rgba(232,64,64,0.08)" }}>
                <div className="text-2xl font-extrabold tabular-nums" style={{ color: RED, fontFamily: FONT }}>
                  {lost}
                </div>
                <div className="text-[9px] uppercase tracking-wider mt-0.5"
                     style={{ color: "rgba(255,255,255,0.32)" }}>Leads Lost</div>
              </div>
              <div className="flex-1 rounded-xl border py-2.5 px-3 text-center"
                   style={{ borderColor: "rgba(255,255,255,0.06)", background: "rgba(255,255,255,0.03)" }}>
                <div className="text-2xl font-extrabold"
                     style={{ color: "rgba(255,255,255,0.15)", fontFamily: FONT }}>CHF ?</div>
                <div className="text-[9px] uppercase tracking-wider mt-0.5"
                     style={{ color: "rgba(255,255,255,0.2)" }}>Revenue</div>
              </div>
            </motion.div>
          )}

          {/* TRANSITION */}
          {phase === "transition" && (
            <motion.div key="kpi-trans"
              initial={{ opacity: 0 }} animate={{ opacity: 1 }}
              exit={{ opacity: 0 }} transition={{ duration: 0.3 }}
              className="flex items-center justify-center gap-2.5 py-3.5">
              {[0, 1, 2].map(i => (
                <motion.div key={i} className="w-2 h-2 rounded-full"
                  style={{ background: CYAN }}
                  animate={{ opacity: [0.25, 1, 0.25], scale: [0.7, 1.3, 0.7] }}
                  transition={{ duration: 0.85, repeat: Infinity, delay: i * 0.22 }}
                />
              ))}
            </motion.div>
          )}

          {/* AFTER */}
          {isAfter && (
            <motion.div key="kpi-after"
              initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 6 }} transition={{ duration: 0.35 }}
              className="flex items-stretch gap-2">
              <div className="flex-1 rounded-xl border py-2.5 px-3 text-center"
                   style={{ borderColor: "rgba(255,255,255,0.05)", background: "rgba(255,255,255,0.02)" }}>
                <div className="text-2xl font-extrabold"
                     style={{ color: "rgba(255,255,255,0.18)", fontFamily: FONT }}>0</div>
                <div className="text-[9px] uppercase tracking-wider mt-0.5"
                     style={{ color: "rgba(255,255,255,0.25)" }}>Leads Lost</div>
              </div>
              <div className="flex-1 rounded-xl border py-2.5 px-3 text-center"
                   style={{ borderColor: "rgba(16,185,129,0.35)", background: "rgba(16,185,129,0.09)",
                            boxShadow: "0 0 20px rgba(16,185,129,0.1)" }}>
                <div className="text-2xl font-extrabold tabular-nums"
                     style={{ color: GREEN, fontFamily: FONT,
                              textShadow: "0 0 18px rgba(16,185,129,0.6)" }}>
                  CHF {revenue.toLocaleString("de-CH")}
                </div>
                <div className="text-[9px] uppercase tracking-wider mt-0.5"
                     style={{ color: "rgba(16,185,129,0.7)" }}>Revenue</div>
              </div>
            </motion.div>
          )}

        </AnimatePresence>
      </div>
    </div>
  );
}
