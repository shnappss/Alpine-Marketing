import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const HOLES = [
  { y: 0.25, label: "Slow Reply", side: "left" },
  { y: 0.42, label: "No Nurture", side: "right" },
  { y: 0.60, label: "No Reactivation", side: "left" },
  { y: 0.76, label: "No Tracking", side: "right" },
];

type Dot = {
  id: number;
  x: number;
  delay: number;
  leakAt: number | null;
  leakSide: string;
};

function generateDot(id: number, plugged: boolean): Dot {
  const leakHole = plugged ? null : HOLES[Math.floor(Math.random() * HOLES.length)];
  return {
    id,
    x: 0.3 + Math.random() * 0.4,
    delay: Math.random() * 2,
    leakAt: leakHole ? leakHole.y : null,
    leakSide: leakHole ? leakHole.side : "right",
  };
}

export default function FunnelAnimation() {
  const [plugged, setPlugged] = useState(false);
  const [dots, setDots] = useState<Dot[]>([]);
  const counterRef = useRef(0);
  const phaseRef = useRef<"leaking" | "plugging" | "flowing">("leaking");

  useEffect(() => {
    const interval = setInterval(() => {
      setDots((prev) => {
        const next = [...prev];
        const newId = ++counterRef.current;
        next.push(generateDot(newId, phaseRef.current !== "leaking"));
        return next.slice(-18);
      });
    }, 600);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const sequence = async () => {
      phaseRef.current = "leaking";
      setPlugged(false);
      await new Promise((r) => setTimeout(r, 5000));
      phaseRef.current = "plugging";
      setPlugged(true);
      await new Promise((r) => setTimeout(r, 500));
      phaseRef.current = "flowing";
      await new Promise((r) => setTimeout(r, 5000));
      sequence();
    };
    sequence();
  }, []);

  const W = 300;
  const H = 420;
  const topW = 220;
  const botW = 60;
  const funnelTop = 30;
  const funnelBot = H - 50;

  const leftEdgeAt = (yFrac: number) => {
    const raw = funnelTop + yFrac * (funnelBot - funnelTop);
    const cx = W / 2;
    const halfTop = topW / 2;
    const halfBot = botW / 2;
    const half = halfTop + yFrac * (halfBot - halfTop);
    return { x: cx - half, y: raw };
  };

  const rightEdgeAt = (yFrac: number) => {
    const raw = funnelTop + yFrac * (funnelBot - funnelTop);
    const cx = W / 2;
    const halfTop = topW / 2;
    const halfBot = botW / 2;
    const half = halfTop + yFrac * (halfBot - halfTop);
    return { x: cx + half, y: raw };
  };

  const funnelPath = `
    M ${W / 2 - topW / 2} ${funnelTop}
    L ${W / 2 + topW / 2} ${funnelTop}
    L ${W / 2 + botW / 2} ${funnelBot}
    L ${W / 2 - botW / 2} ${funnelBot}
    Z
  `;

  return (
    <div className="relative w-full h-full flex items-center justify-center select-none">
      <svg
        viewBox={`0 0 ${W} ${H}`}
        width="100%"
        height="100%"
        className="overflow-visible"
        style={{ maxWidth: 320, maxHeight: 440 }}
      >
        <defs>
          <linearGradient id="funnelGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#7C3AED" stopOpacity="0.25" />
            <stop offset="100%" stopColor="#06D6A0" stopOpacity="0.1" />
          </linearGradient>
          <linearGradient id="glowGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#7C3AED" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#06D6A0" stopOpacity="0.6" />
          </linearGradient>
          <filter id="glow">
            <feGaussianBlur stdDeviation="2.5" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Funnel body */}
        <path d={funnelPath} fill="url(#funnelGrad)" stroke="url(#glowGrad)" strokeWidth="1.5" />

        {/* Hole indicators */}
        {HOLES.map((hole, i) => {
          const le = leftEdgeAt(hole.y);
          const re = rightEdgeAt(hole.y);
          const point = hole.side === "left" ? le : re;
          return (
            <g key={i}>
              {/* Hole opening */}
              {!plugged && (
                <motion.circle
                  cx={point.x}
                  cy={point.y}
                  r={5}
                  fill="#F59E0B"
                  opacity={0.9}
                  filter="url(#glow)"
                  animate={{ opacity: [0.6, 1, 0.6] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                />
              )}
              {/* Plug animation */}
              {plugged && (
                <motion.circle
                  cx={point.x}
                  cy={point.y}
                  r={5}
                  fill="#06D6A0"
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.4, delay: i * 0.15 }}
                  filter="url(#glow)"
                />
              )}
              {/* Label */}
              <text
                x={hole.side === "left" ? point.x - 10 : point.x + 10}
                y={point.y + 4}
                fill={plugged ? "#06D6A0" : "#F59E0B"}
                fontSize="9"
                textAnchor={hole.side === "left" ? "end" : "start"}
                fontFamily="DM Sans, sans-serif"
                fontWeight="600"
                opacity={0.9}
              >
                {hole.label}
              </text>
            </g>
          );
        })}

        {/* Animated dots */}
        <AnimatePresence>
          {dots.map((dot) => {
            const startY = funnelTop;
            const endY = dot.leakAt !== null ? funnelTop + dot.leakAt * (funnelBot - funnelTop) : funnelBot + 30;
            const dotX =
              W / 2 +
              (dot.x - 0.5) *
                (dot.leakAt !== null
                  ? topW * (1 - dot.leakAt) + botW * dot.leakAt
                  : botW);

            return (
              <motion.circle
                key={dot.id}
                cx={dotX}
                cy={startY}
                r={3.5}
                fill={dot.leakAt !== null ? "#F59E0B" : "#06D6A0"}
                filter="url(#glow)"
                opacity={0.85}
                initial={{ cy: startY, opacity: 0 }}
                animate={
                  dot.leakAt !== null
                    ? {
                        cy: [startY, endY],
                        cx: [dotX, dot.leakSide === "left" ? dotX - 60 : dotX + 60],
                        opacity: [0, 1, 1, 0],
                      }
                    : {
                        cy: [startY, endY],
                        opacity: [0, 1, 1, 1],
                      }
                }
                transition={{
                  duration: dot.leakAt !== null ? 2.5 : 3.5,
                  delay: dot.delay,
                  ease: "easeIn",
                }}
                exit={{ opacity: 0 }}
              />
            );
          })}
        </AnimatePresence>

        {/* Output labels */}
        <text
          x={W / 2}
          y={funnelTop - 12}
          fill="#8B8BA7"
          fontSize="10"
          textAnchor="middle"
          fontFamily="DM Sans, sans-serif"
        >
          LEADS IN
        </text>
        <motion.text
          x={W / 2}
          y={funnelBot + 30}
          fill={plugged ? "#06D6A0" : "#8B8BA7"}
          fontSize={plugged ? "11" : "10"}
          textAnchor="middle"
          fontFamily="DM Sans, sans-serif"
          fontWeight={plugged ? "700" : "400"}
          animate={{ fill: plugged ? "#06D6A0" : "#8B8BA7" }}
        >
          {plugged ? "REVENUE OUT" : "LOST"}
        </motion.text>

        {/* Status label */}
        <motion.text
          x={W / 2}
          y={H - 10}
          fontSize="9"
          textAnchor="middle"
          fontFamily="DM Sans, sans-serif"
          animate={{ fill: plugged ? "#06D6A0" : "#F59E0B" }}
        >
          {plugged ? "System Plugged — All Leads Converting" : "4 Holes Leaking Revenue"}
        </motion.text>
      </svg>
    </div>
  );
}
