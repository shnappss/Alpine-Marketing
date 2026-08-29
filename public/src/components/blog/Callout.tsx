import { ReactNode } from "react";
import { Info, AlertTriangle, Sparkles, Quote } from "lucide-react";

type CalloutVariant = "info" | "warning" | "highlight" | "quote";

const VARIANTS: Record<
  CalloutVariant,
  { color: string; bg: string; border: string; Icon: typeof Info }
> = {
  info:      { color: "#0891b2", bg: "#ecfeff", border: "#a5f3fc", Icon: Info },
  warning:   { color: "#b45309", bg: "#fffbeb", border: "#fde68a", Icon: AlertTriangle },
  highlight: { color: "#047857", bg: "#ecfdf5", border: "#a7f3d0", Icon: Sparkles },
  quote:     { color: "#0e7490", bg: "#f8fafc", border: "#e2e8f0", Icon: Quote },
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
      className="my-8 rounded-xl p-5 md:p-6 border not-prose"
      style={{ background: v.bg, borderColor: v.border }}
    >
      <div className="flex items-start gap-3.5">
        <div
          className="flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center mt-0.5"
          style={{ background: "#ffffff", border: `1px solid ${v.border}` }}
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
          <div className="text-[15px] text-zinc-700 leading-relaxed [&>*:last-child]:mb-0 [&>p]:mb-2">
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
  const COLOR: Record<NonNullable<typeof stats[number]["accent"]>, { fg: string; bg: string; border: string }> = {
    teal:    { fg: "#0891b2", bg: "#ecfeff", border: "#a5f3fc" },
    emerald: { fg: "#047857", bg: "#ecfdf5", border: "#a7f3d0" },
    amber:   { fg: "#b45309", bg: "#fffbeb", border: "#fde68a" },
    red:     { fg: "#b91c1c", bg: "#fef2f2", border: "#fecaca" },
  };
  return (
    <div className="my-8 grid grid-cols-1 sm:grid-cols-3 gap-3 not-prose">
      {stats.map((s, i) => {
        const c = COLOR[s.accent ?? "teal"];
        return (
          <div
            key={i}
            className="rounded-xl p-5 border text-center"
            style={{ background: c.bg, borderColor: c.border }}
          >
            <div
              className="text-3xl md:text-[2rem] font-extrabold tabular-nums leading-none"
              style={{ color: c.fg, fontFamily: "'Space Grotesk', sans-serif" }}
            >
              {s.value}
            </div>
            <div className="mt-2 text-[11px] uppercase tracking-wider text-zinc-500">
              {s.label}
            </div>
          </div>
        );
      })}
    </div>
  );
}
