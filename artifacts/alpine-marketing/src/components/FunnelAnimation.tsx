import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

/* ─── Brand tokens ─────────────────────────────────── */
const RED    = "#e84040";
const BLUE   = "#3d80cc";
const GREEN  = "#00c18c";
const MUTED  = "rgba(255,255,255,0.32)";
const FONT   = "Inter, Plus Jakarta Sans, sans-serif";

/* ─── SVG geometry ─────────────────────────────────── */
const W     = 260;
const H     = 360;
const CX    = W / 2;
const TOP_W = 180;
const BOT_W = 44;
const F_TOP = 28;
const F_BOT = H - 70;

function lerpX(yFrac: number) {
  const half = TOP_W / 2 + (BOT_W / 2 - TOP_W / 2) * yFrac;
  return { left: CX - half, right: CX + half };
}
function dotY(yFrac: number) { return F_TOP + yFrac * (F_BOT - F_TOP); }

/* ─── Leak points ──────────────────────────────────── */
const HOLES: { yFrac: number; label: string; fix: string; side: "left" | "right" }[] = [
  { yFrac: 0.18, label: "Slow Reply",     fix: "AI Instant Reply",   side: "left"  },
  { yFrac: 0.38, label: "No Nurture",     fix: "Smart Sequences",    side: "right" },
  { yFrac: 0.58, label: "No Follow-up",   fix: "Auto Re-engagement", side: "left"  },
  { yFrac: 0.76, label: "No Attribution", fix: "Full Tracking",      side: "right" },
];

/* ─── Funnel path ──────────────────────────────────── */
const funnelPath = [
  `M ${CX - TOP_W / 2} ${F_TOP}`,
  `L ${CX + TOP_W / 2} ${F_TOP}`,
  `L ${CX + BOT_W / 2} ${F_BOT}`,
  `L ${CX - BOT_W / 2} ${F_BOT}`,
  "Z",
].join(" ");

/* ─── Revenue simulation ───────────────────────────── */
const REV_STEP = 340; // CHF added per dot that converts

type Phase = "before" | "transition" | "after";
type Dot   = { id: number; startX: number; holeIdx: number | null };

let _uid = 0;
const uid = () => ++_uid;
const sleep = (ms: number) => new Promise<void>(r => setTimeout(r, ms));

export default function FunnelAnimation() {
  const [phase,    setPhase]    = useState<Phase>("before");
  const [dots,     setDots]     = useState<Dot[]>([]);
  const [lost,     setLost]     = useState(0);
  const [revenue,  setRevenue]  = useState(0);
  const phaseRef = useRef<Phase>("before");

  /* ── Dot spawner ─── */
  useEffect(() => {
    const id = setInterval(() => {
      const p = phaseRef.current;
      if (p === "transition") return;
      const holeIdx = p === "before" ? Math.floor(Math.random() * HOLES.length) : null;
      setDots(prev => [
        ...prev.slice(-18),
        { id: uid(), startX: CX + (Math.random() - 0.5) * TOP_W * 0.65, holeIdx },
      ]);
      if (p === "before") setLost(n => n + 1);
      if (p === "after")  setRevenue(n => n + REV_STEP);
    }, 650);
    return () => clearInterval(id);
  }, []);

  /* ── Phase sequencer ─── */
  useEffect(() => {
    let alive = true;
    (async () => {
      while (alive) {
        phaseRef.current = "before";  setPhase("before");  setLost(0);
        await sleep(7500);

        phaseRef.current = "transition"; setPhase("transition"); setDots([]);
        await sleep(2000);

        phaseRef.current = "after"; setPhase("after"); setRevenue(0);
        await sleep(8000);
      }
    })();
    return () => { alive = false; };
  }, []);

  const isBefore = phase === "before";
  const isAfter  = phase === "after";

  /* ── Funnels fill/stroke color ─── */
  const fillCol   = isBefore ? RED  : GREEN;
  const strokeCol = isBefore ? RED  : BLUE;

  return (
    <div className="relative w-full h-full flex flex-col items-center justify-start select-none pt-2 gap-0">

      {/* ─── Phase badge ─── */}
      <div className="h-10 flex items-center justify-center w-full mb-0.5">
        <AnimatePresence mode="wait">
          {isBefore && (
            <motion.div key="b"
              initial={{ opacity: 0, y: -4 }} animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -4 }} transition={{ duration: 0.3 }}
              className="text-center">
              <span className="block text-[10px] font-bold tracking-[0.2em] uppercase" style={{ color: RED }}>
                WITHOUT ALPINE
              </span>
              <span className="block text-[9px] mt-0.5" style={{ color: "rgba(255,255,255,0.3)" }}>
                Leads enter — most disappear
              </span>
            </motion.div>
          )}
          {phase === "transition" && (
            <motion.div key="t"
              initial={{ opacity: 0 }} animate={{ opacity: 1 }}
              exit={{ opacity: 0 }} transition={{ duration: 0.3 }}
              className="text-center">
              <span className="block text-[10px] font-bold tracking-[0.2em] uppercase" style={{ color: BLUE }}>
                ALPINE IS PLUGGING THE LEAKS…
              </span>
            </motion.div>
          )}
          {isAfter && (
            <motion.div key="a"
              initial={{ opacity: 0, y: -4 }} animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -4 }} transition={{ duration: 0.3 }}
              className="text-center">
              <span className="block text-[10px] font-bold tracking-[0.2em] uppercase" style={{ color: GREEN }}>
                WITH ALPINE MARKETING
              </span>
              <span className="block text-[9px] mt-0.5" style={{ color: "rgba(255,255,255,0.3)" }}>
                Every lead flows to revenue
              </span>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* ─── SVG funnel ─── */}
      <svg
        viewBox={`0 0 ${W} ${H}`}
        width="100%" height="100%"
        className="overflow-visible"
        style={{ maxWidth: 260, flex: "1 1 auto", maxHeight: 320 }}
      >
        <defs>
          {/* Funnel fill gradient */}
          <linearGradient id="fFill" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%"   stopColor={fillCol}   stopOpacity="0.18" />
            <stop offset="100%" stopColor={fillCol}   stopOpacity="0.06" />
          </linearGradient>
          {/* Glow filter */}
          <filter id="glow" x="-30%" y="-30%" width="160%" height="160%">
            <feGaussianBlur stdDeviation="2.5" result="blur" />
            <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
          </filter>
          {/* Green strong glow */}
          <filter id="greenGlow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="4" result="blur" />
            <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
          </filter>
          {/* Clip path for funnel */}
          <clipPath id="funnelClip">
            <path d={funnelPath} />
          </clipPath>
        </defs>

        {/* Funnel body */}
        <motion.path
          d={funnelPath}
          fill="url(#fFill)"
          animate={{ opacity: phase === "transition" ? 0.4 : 1 }}
          transition={{ duration: 0.5 }}
        />
        {/* Funnel left edge */}
        <motion.line
          x1={CX - TOP_W / 2} y1={F_TOP} x2={CX - BOT_W / 2} y2={F_BOT}
          strokeWidth="1.5"
          animate={{ stroke: strokeCol, opacity: phase === "transition" ? 0.3 : 0.6 }}
          transition={{ duration: 0.5 }}
        />
        {/* Funnel right edge */}
        <motion.line
          x1={CX + TOP_W / 2} y1={F_TOP} x2={CX + BOT_W / 2} y2={F_BOT}
          strokeWidth="1.5"
          animate={{ stroke: strokeCol, opacity: phase === "transition" ? 0.3 : 0.6 }}
          transition={{ duration: 0.5 }}
        />
        {/* Funnel top bar */}
        <motion.line
          x1={CX - TOP_W / 2} y1={F_TOP} x2={CX + TOP_W / 2} y2={F_TOP}
          strokeWidth="1.5"
          animate={{ stroke: strokeCol, opacity: phase === "transition" ? 0.3 : 0.6 }}
          transition={{ duration: 0.5 }}
        />

        {/* LEADS IN label */}
        <text x={CX} y={F_TOP - 11} fill={MUTED} fontSize="8.5"
              textAnchor="middle" fontFamily={FONT} letterSpacing="1.5">
          LEADS IN
        </text>

        {/* ─── Hole labels / plug labels ─── */}
        {HOLES.map((hole, i) => {
          const { left, right } = lerpX(hole.yFrac);
          const px = hole.side === "left" ? left : right;
          const py = dotY(hole.yFrac);
          const lx = hole.side === "left" ? px - 10 : px + 10;
          const anchor = hole.side === "left" ? "end" : "start";

          return (
            <g key={i}>
              <AnimatePresence mode="wait">
                {!isAfter ? (
                  /* Leaking hole */
                  <motion.g key={`hole-${i}`}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: phase === "transition" ? 0 : 1 }}
                    exit={{ opacity: 0 }}>
                    <motion.circle cx={px} cy={py} r={5} fill={RED} filter="url(#glow)"
                      style={{ transformOrigin: `${px}px ${py}px` }}
                      animate={{ opacity: [0.6, 1, 0.6], scale: [0.9, 1.2, 0.9] }}
                      transition={{ duration: 1.2, repeat: Infinity }}
                    />
                    <text x={lx} y={py + 3.5} fill={RED} fontSize="8" fontWeight="600"
                          textAnchor={anchor} fontFamily={FONT} opacity="0.85">
                      {hole.label}
                    </text>
                  </motion.g>
                ) : (
                  /* Sealed plug + fix label */
                  <motion.g key={`plug-${i}`}
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0, opacity: 0 }}
                    transition={{ duration: 0.35, delay: i * 0.1 }}
                    style={{ transformOrigin: `${px}px ${py}px` }}>
                    <circle cx={px} cy={py} r={5.5} fill={GREEN} filter="url(#glow)" opacity={0.9} />
                    {/* Checkmark */}
                    <text x={px} y={py + 3.5} fill="white" fontSize="6.5"
                          textAnchor="middle" fontFamily={FONT}>✓</text>
                    <text x={lx} y={py + 3.5} fill={GREEN} fontSize="8" fontWeight="600"
                          textAnchor={anchor} fontFamily={FONT} opacity="0.9">
                      {hole.fix}
                    </text>
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
              /* Leaking dot */
              const hole = HOLES[dot.holeIdx];
              const { left, right } = lerpX(hole.yFrac);
              const hx = hole.side === "left" ? left : right;
              const hy = dotY(hole.yFrac);
              const ex = hole.side === "left" ? hx - 60 : hx + 60;
              return (
                <motion.circle key={dot.id} r={3.5} fill={RED} filter="url(#glow)"
                  initial={{ cx: dot.startX, cy: F_TOP, opacity: 0 }}
                  animate={{ cx: [dot.startX, hx, ex], cy: [F_TOP, hy, hy + 18], opacity: [0, 1, 1, 0] }}
                  transition={{ duration: 2.6, ease: "easeIn", times: [0, 0.42, 1] }}
                  exit={{ opacity: 0 }}
                />
              );
            } else {
              /* Converting dot flows to bottom */
              return (
                <motion.circle key={dot.id} r={3.5} fill={GREEN} filter="url(#greenGlow)"
                  initial={{ cx: dot.startX, cy: F_TOP, opacity: 0 }}
                  animate={{ cy: [F_TOP, F_BOT + 20], opacity: [0, 1, 1, 0.6] }}
                  transition={{ duration: 3.0, ease: "easeIn" }}
                  exit={{ opacity: 0 }}
                />
              );
            }
          })}
        </AnimatePresence>

        {/* ─── Bottom output label ─── */}
        <motion.text
          x={CX} y={F_BOT + 16} fontSize="8.5" textAnchor="middle"
          fontFamily={FONT} fontWeight="700" letterSpacing="1.5"
          animate={{ fill: isAfter ? GREEN : "rgba(255,255,255,0.2)" }}
          transition={{ duration: 0.5 }}
        >
          {isAfter ? "REVENUE" : "LOST"}
        </motion.text>

        {/* ─── Bottom revenue bar (after phase) ─── */}
        <AnimatePresence>
          {isAfter && (
            <motion.g key="rev-bar"
              initial={{ opacity: 0, scaleY: 0 }}
              animate={{ opacity: 1, scaleY: 1 }}
              exit={{ opacity: 0 }}
              style={{ transformOrigin: `${CX}px ${F_BOT + 24}px` }}>
              {/* glow beam flowing out bottom */}
              <motion.rect
                x={CX - 18} y={F_BOT + 1} width={36} height={20} rx={4}
                fill={GREEN} opacity={0.12}
                animate={{ opacity: [0.08, 0.18, 0.08] }}
                transition={{ duration: 1.4, repeat: Infinity }}
              />
            </motion.g>
          )}
        </AnimatePresence>
      </svg>

      {/* ─── Bottom KPI strip ─── */}
      <div className="w-full flex-shrink-0 px-4 pb-2">
        <AnimatePresence mode="wait">

          {/* BEFORE strip */}
          {isBefore && (
            <motion.div key="kpi-before"
              initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 6 }} transition={{ duration: 0.35 }}
              className="flex items-stretch gap-2">
              <div className="flex-1 rounded-xl border py-2.5 px-3 text-center"
                   style={{ borderColor: "rgba(232,64,64,0.25)", background: "rgba(232,64,64,0.07)" }}>
                <div className="text-xl font-extrabold tabular-nums" style={{ color: RED }}>
                  {lost}
                </div>
                <div className="text-[9px] uppercase tracking-wider mt-0.5" style={{ color: "rgba(255,255,255,0.35)" }}>
                  Leads Lost
                </div>
              </div>
              <div className="flex-1 rounded-xl border py-2.5 px-3 text-center"
                   style={{ borderColor: "rgba(255,255,255,0.06)", background: "rgba(255,255,255,0.03)" }}>
                <div className="text-xl font-extrabold" style={{ color: "rgba(255,255,255,0.18)" }}>
                  CHF 0
                </div>
                <div className="text-[9px] uppercase tracking-wider mt-0.5" style={{ color: "rgba(255,255,255,0.2)" }}>
                  Revenue
                </div>
              </div>
            </motion.div>
          )}

          {/* TRANSITION strip */}
          {phase === "transition" && (
            <motion.div key="kpi-trans"
              initial={{ opacity: 0 }} animate={{ opacity: 1 }}
              exit={{ opacity: 0 }} transition={{ duration: 0.3 }}
              className="flex items-center justify-center gap-2 py-3">
              {[0, 1, 2].map(i => (
                <motion.div key={i} className="w-1.5 h-1.5 rounded-full"
                  style={{ background: BLUE }}
                  animate={{ opacity: [0.3, 1, 0.3], scale: [0.8, 1.2, 0.8] }}
                  transition={{ duration: 0.9, repeat: Infinity, delay: i * 0.25 }}
                />
              ))}
            </motion.div>
          )}

          {/* AFTER strip */}
          {isAfter && (
            <motion.div key="kpi-after"
              initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 6 }} transition={{ duration: 0.35 }}
              className="flex items-stretch gap-2">
              <div className="flex-1 rounded-xl border py-2.5 px-3 text-center"
                   style={{ borderColor: "rgba(255,255,255,0.06)", background: "rgba(255,255,255,0.03)" }}>
                <div className="text-xl font-extrabold" style={{ color: "rgba(255,255,255,0.22)" }}>
                  0
                </div>
                <div className="text-[9px] uppercase tracking-wider mt-0.5" style={{ color: "rgba(255,255,255,0.3)" }}>
                  Leads Lost
                </div>
              </div>
              <div className="flex-1 rounded-xl border py-2.5 px-3 text-center"
                   style={{ borderColor: "rgba(0,193,140,0.3)", background: "rgba(0,193,140,0.08)" }}>
                <motion.div
                  className="text-xl font-extrabold tabular-nums"
                  style={{ color: GREEN }}
                >
                  CHF {revenue.toLocaleString("de-CH")}
                </motion.div>
                <div className="text-[9px] uppercase tracking-wider mt-0.5" style={{ color: "rgba(0,193,140,0.6)" }}>
                  Revenue
                </div>
              </div>
            </motion.div>
          )}

        </AnimatePresence>
      </div>
    </div>
  );
}
