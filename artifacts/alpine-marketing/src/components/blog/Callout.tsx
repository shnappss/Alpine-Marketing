import { ReactNode } from "react";
import { Info, AlertTriangle, Sparkles, Quote } from "lucide-react";

type CalloutVariant = "info" | "warning" | "highlight" | "quote";

const VARIANTS: Record<
  CalloutVariant,
  { color: string; bg: string; border: string; Icon: typeof Info }
> = {
  info:      { color: "#0891b2", bg: "rgba(8,145,178,0.06)",  border: "rgba(8,145,178,0.25)",  Icon: Info },
  warning:   { color: "#f59e0b", bg: "rgba(245,158,11,0.06)", border: "rgba(245,158,11,0.28)", Icon: AlertTriangle },
  highlight: { color: "#10b981", bg: "rgba(16,185,129,0.06)", border: "rgba(16,185,129,0.28)", Icon: Sparkles },
  quote:     { color: "#0891b2", bg: "rgba(255,255,255,0.02)",border: "rgba(255,255,255,0.08)",Icon: Quote },
};

export function Callout({
  variant = "info",
  title,
  children,
}: {
  variant?: CalloutVariant;
  title?: string;
  children: ReactNode;
}) {
  const v = VARIANTS[variant];
  return (
    <div
      className="my-8 rounded-xl p-5 md:p-6 border"
      style={{ background: v.bg, borderColor: v.border }}
    >
      <div className="flex items-start gap-3.5">
        <div
          className="flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center mt-0.5"
          style={{ background: `${v.color}1a`, border: `1px solid ${v.color}40` }}
        >
          <v.Icon className="w-4 h-4" style={{ color: v.color }} />
        </div>
        <div className="flex-1 min-w-0">
          {title && (
            <div
              className="text-[11px] font-bold tracking-[0.18em] uppercase mb-1.5"
              style={{ color: v.color, fontFamily: "'Space Grotesk', sans-serif" }}
            >
              {title}
            </div>
          )}
          <div className="text-[15px] text-white/75 leading-relaxed [&>*:last-child]:mb-0 [&>p]:mb-2">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}

export function StatRow({
  stats,
}: {
  stats: { value: string; label: string; accent?: "teal" | "emerald" | "amber" | "red" }[];
}) {
  const COLOR: Record<NonNullable<typeof stats[number]["accent"]>, string> = {
    teal:    "#0891b2",
    emerald: "#10b981",
    amber:   "#f59e0b",
    red:     "#ef4444",
  };
  return (
    <div className="my-8 grid grid-cols-1 sm:grid-cols-3 gap-3">
      {stats.map((s, i) => {
        const c = COLOR[s.accent ?? "teal"];
        return (
          <div
            key={i}
            className="rounded-xl p-5 border text-center"
            style={{ background: `${c}0d`, borderColor: `${c}30` }}
          >
            <div
              className="text-3xl md:text-[2rem] font-extrabold tabular-nums leading-none"
              style={{ color: c, fontFamily: "'Space Grotesk', sans-serif" }}
            >
              {s.value}
            </div>
            <div className="mt-2 text-[11px] uppercase tracking-wider text-white/45">
              {s.label}
            </div>
          </div>
        );
      })}
    </div>
  );
}
