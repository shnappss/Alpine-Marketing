import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const BRAND_BLUE  = "#3d80cc";
const BRAND_GREEN = "#00c18c";
const BRAND_RED   = "#e83235";
const MUTED       = "#6b7280";

const HOLES = [
  { yFrac: 0.22, label: "Slow Reply",      side: "left"  as const },
  { yFrac: 0.40, label: "No Nurture",      side: "right" as const },
  { yFrac: 0.57, label: "No Reactivation", side: "left"  as const },
  { yFrac: 0.73, label: "No Tracking",     side: "right" as const },
];

type Phase = "before" | "transitioning" | "after";

type Dot = {
  id: number;
  startX: number;
  phase: Phase;
  holeIndex: number | null;
};

const W        = 280;
const H        = 400;
const TOP_W    = 200;
const BOT_W    = 50;
const F_TOP    = 30;
const F_BOT    = H - 55;
const CX       = W / 2;

function lerp(a: number, b: number, t: number) { return a + (b - a) * t; }

function edgeX(yFrac: number) {
  const halfW = lerp(TOP_W / 2, BOT_W / 2, yFrac);
  return { left: CX - halfW, right: CX + halfW };
}

function dotY(yFrac: number) { return F_TOP + yFrac * (F_BOT - F_TOP); }

const funnelPath = [
  `M ${CX - TOP_W / 2} ${F_TOP}`,
  `L ${CX + TOP_W / 2} ${F_TOP}`,
  `L ${CX + BOT_W / 2} ${F_BOT}`,
  `L ${CX - BOT_W / 2} ${F_BOT}`,
  "Z",
].join(" ");

let _id = 0;
function newId() { return ++_id; }

export default function FunnelAnimation() {
  const [phase, setPhase] = useState<Phase>("before");
  const [dots, setDots] = useState<Dot[]>([]);
  const [leaked, setLeaked] = useState(0);
  const [captured, setCaptured] = useState(0);
  const phaseRef = useRef<Phase>("before");

  /* Dot spawner */
  useEffect(() => {
    const id = setInterval(() => {
      const p = phaseRef.current;
      if (p === "transitioning") return;

      setDots(prev => {
        const holeIndex =
          p === "before" ? Math.floor(Math.random() * HOLES.length) : null;
        const dot: Dot = {
          id: newId(),
          startX: CX + (Math.random() - 0.5) * TOP_W * 0.7,
          phase: p,
          holeIndex,
        };
        return [...prev.slice(-20), dot];
      });

      if (p === "before") setLeaked(n => n + 1);
      if (p === "after")  setCaptured(n => n + 1);
    }, 700);
    return () => clearInterval(id);
  }, []);

  /* Phase sequencer: before(7s) → transitioning(1.8s) → after(7s) → loop */
  useEffect(() => {
    let mounted = true;
    async function run() {
      while (mounted) {
        phaseRef.current = "before";
        setPhase("before");
        setLeaked(0);
        await sleep(7000);
        if (!mounted) break;

        phaseRef.current = "transitioning";
        setPhase("transitioning");
        setDots([]);
        await sleep(1800);
        if (!mounted) break;

        phaseRef.current = "after";
        setPhase("after");
        setCaptured(0);
        await sleep(7000);
        if (!mounted) break;
      }
    }
    run();
    return () => { mounted = false; };
  }, []);

  const isBefore       = phase === "before";
  const isTransition   = phase === "transitioning";
  const isAfter        = phase === "after";

  return (
    <div className="relative w-full h-full flex flex-col items-center justify-center select-none gap-1">
      {/* Phase label */}
      <AnimatePresence mode="wait">
        {isBefore && (
          <motion.div
            key="label-before"
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.4 }}
            className="text-center mb-1"
          >
            <span className="text-[10px] font-bold tracking-[0.18em] uppercase"
                  style={{ color: BRAND_RED }}>
              BEFORE
            </span>
            <p className="text-[9px] text-white/40 mt-0.5">Your funnel today</p>
          </motion.div>
        )}
        {isTransition && (
          <motion.div
            key="label-trans"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="text-center mb-1"
          >
            <span className="text-[10px] font-bold tracking-[0.18em] uppercase"
                  style={{ color: BRAND_BLUE }}>
              PLUGGING THE LEAKS…
            </span>
          </motion.div>
        )}
        {isAfter && (
          <motion.div
            key="label-after"
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.4 }}
            className="text-center mb-1"
          >
            <span className="text-[10px] font-bold tracking-[0.18em] uppercase"
                  style={{ color: BRAND_GREEN }}>
              AFTER — WITH ALPINE
            </span>
            <p className="text-[9px] text-white/40 mt-0.5">Every lead tracked &amp; nurtured</p>
          </motion.div>
        )}
      </AnimatePresence>

      {/* SVG */}
      <svg
        viewBox={`0 0 ${W} ${H}`}
        width="100%"
        height="100%"
        className="overflow-visible"
        style={{ maxWidth: 280, maxHeight: 380 }}
      >
        <defs>
          <linearGradient id="fGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%"   stopColor={isBefore ? BRAND_RED  : BRAND_BLUE}  stopOpacity="0.2" />
            <stop offset="100%" stopColor={isBefore ? BRAND_RED  : BRAND_GREEN} stopOpacity="0.06" />
          </linearGradient>
          <linearGradient id="strokeGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%"   stopColor={isBefore ? BRAND_RED  : BRAND_BLUE}  stopOpacity="0.5" />
            <stop offset="100%" stopColor={isBefore ? BRAND_GREEN : BRAND_GREEN} stopOpacity="0.4" />
          </linearGradient>
          <filter id="glow">
            <feGaussianBlur stdDeviation="2" result="blur" />
            <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
          </filter>
        </defs>

        {/* Funnel body */}
        <motion.path
          d={funnelPath}
          fill="url(#fGrad)"
          stroke="url(#strokeGrad)"
          strokeWidth="1.5"
          animate={{ opacity: isTransition ? 0.4 : 1 }}
        />

        {/* "LEADS IN" label */}
        <text x={CX} y={F_TOP - 12} fill={MUTED} fontSize="9"
              textAnchor="middle" fontFamily="DM Sans, sans-serif">
          LEADS IN
        </text>

        {/* Hole markers (before) or plugs (after) */}
        {HOLES.map((hole, i) => {
          const edges = edgeX(hole.yFrac);
          const px    = hole.side === "left" ? edges.left : edges.right;
          const py    = dotY(hole.yFrac);
          const labelX = hole.side === "left" ? px - 8 : px + 8;
          const anchor  = hole.side === "left" ? "end" : "start";

          return (
            <g key={i}>
              <AnimatePresence mode="wait">
                {!isAfter ? (
                  /* Leaking hole */
                  <motion.g key={`hole-${i}`}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: isTransition ? 0 : 1 }}
                    exit={{ opacity: 0 }}
                  >
                    <motion.circle cx={px} cy={py} r={5} fill={BRAND_RED}
                      filter="url(#glow)"
                      animate={{ opacity: [0.5, 1, 0.5], scale: [0.9, 1.1, 0.9] }}
                      transition={{ duration: 1.4, repeat: Infinity }}
                    />
                    <text x={labelX} y={py + 4} fill={BRAND_RED} fontSize="8.5"
                          textAnchor={anchor} fontFamily="DM Sans, sans-serif" fontWeight="600">
                      {hole.label}
                    </text>
                  </motion.g>
                ) : (
                  /* Sealed plug */
                  <motion.g key={`plug-${i}`}
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0, opacity: 0 }}
                    transition={{ duration: 0.4, delay: i * 0.12 }}
                    style={{ transformOrigin: `${px}px ${py}px` }}
                  >
                    <circle cx={px} cy={py} r={6} fill={BRAND_GREEN}
                            filter="url(#glow)" opacity={0.9} />
                    <text x={labelX} y={py + 4} fill={BRAND_GREEN} fontSize="8.5"
                          textAnchor={anchor} fontFamily="DM Sans, sans-serif" fontWeight="600">
                      ✓ Fixed
                    </text>
                  </motion.g>
                )}
              </AnimatePresence>
            </g>
          );
        })}

        {/* Animated dots */}
        <AnimatePresence>
          {dots.map(dot => {
            const leaksAt = dot.holeIndex !== null ? HOLES[dot.holeIndex] : null;
            const leakYFrac = leaksAt ? leaksAt.yFrac : null;
            const leakSide  = leaksAt ? leaksAt.side  : null;

            if (leakYFrac !== null && leakSide !== null) {
              /* Leaking dot: travels to hole then exits sideways */
              const edges = edgeX(leakYFrac);
              const holeX = leakSide === "left" ? edges.left : edges.right;
              const holeY = dotY(leakYFrac);
              const exitX = leakSide === "left" ? holeX - 55 : holeX + 55;

              return (
                <motion.circle
                  key={dot.id}
                  r={3.5}
                  fill={BRAND_RED}
                  filter="url(#glow)"
                  initial={{ cx: dot.startX, cy: F_TOP, opacity: 0 }}
                  animate={{
                    cx: [dot.startX, holeX, exitX],
                    cy: [F_TOP, holeY, holeY + 15],
                    opacity: [0, 1, 1, 0],
                  }}
                  transition={{ duration: 2.8, ease: "easeIn", times: [0, 0.45, 1] }}
                  exit={{ opacity: 0 }}
                />
              );
            } else {
              /* Flowing dot: exits at bottom */
              return (
                <motion.circle
                  key={dot.id}
                  r={3.5}
                  fill={BRAND_GREEN}
                  filter="url(#glow)"
                  initial={{ cx: dot.startX, cy: F_TOP, opacity: 0 }}
                  animate={{
                    cy: [F_TOP, F_BOT + 28],
                    opacity: [0, 1, 1, 1],
                  }}
                  transition={{ duration: 3.2, ease: "easeIn" }}
                  exit={{ opacity: 0 }}
                />
              );
            }
          })}
        </AnimatePresence>

        {/* Bottom label */}
        <motion.text
          x={CX} y={F_BOT + 18}
          fontSize="9" textAnchor="middle"
          fontFamily="DM Sans, sans-serif" fontWeight="600"
          animate={{ fill: isAfter ? BRAND_GREEN : MUTED }}
        >
          {isAfter ? "REVENUE OUT" : "LOST"}
        </motion.text>
      </svg>

      {/* Counter strip */}
      <AnimatePresence mode="wait">
        {isBefore && (
          <motion.div
            key="counter-before"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="flex gap-6 text-center mt-1"
          >
            <div>
              <div className="text-lg font-extrabold" style={{ color: BRAND_RED }}>{leaked}</div>
              <div className="text-[9px] text-white/40 uppercase tracking-wider">Leads Lost</div>
            </div>
            <div>
              <div className="text-lg font-extrabold text-white/30">—</div>
              <div className="text-[9px] text-white/20 uppercase tracking-wider">Revenue</div>
            </div>
          </motion.div>
        )}
        {isAfter && (
          <motion.div
            key="counter-after"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="flex gap-6 text-center mt-1"
          >
            <div>
              <div className="text-lg font-extrabold text-white/30">0</div>
              <div className="text-[9px] text-white/40 uppercase tracking-wider">Leads Lost</div>
            </div>
            <div>
              <div className="text-lg font-extrabold" style={{ color: BRAND_GREEN }}>{captured}</div>
              <div className="text-[9px] text-white/40 uppercase tracking-wider">Captured</div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function sleep(ms: number) { return new Promise(r => setTimeout(r, ms)); }
