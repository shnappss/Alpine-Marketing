import { useState, useRef, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Globe, Check, ChevronDown } from "lucide-react";
import { LANGUAGES } from "@/i18n";

interface Props {
  variant?: "dark" | "light";
}

export default function LanguageSwitcher({ variant = "dark" }: Props) {
  const { i18n, t } = useTranslation();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, []);

  const current = LANGUAGES.find((l) => l.code === i18n.resolvedLanguage) ?? LANGUAGES[0];
  const priority = LANGUAGES.filter((l) => l.priority);
  const other = LANGUAGES.filter((l) => !l.priority);

  const change = (code: string) => {
    i18n.changeLanguage(code);
    setOpen(false);
  };

  const triggerCls =
    variant === "light"
      ? "text-zinc-600 hover:text-zinc-900 hover:bg-zinc-900/5"
      : "text-white/55 hover:text-white/90 hover:bg-white/[0.05]";

  return (
    <div className="relative" ref={ref}>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className={`inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-md text-[13px] font-medium transition-colors ${triggerCls}`}
        aria-haspopup="menu"
        aria-expanded={open}
        data-testid="button-language-switcher"
      >
        <Globe className="w-3.5 h-3.5" />
        <span className="uppercase tracking-wide">{current.code}</span>
        <ChevronDown className={`w-3 h-3 transition-transform ${open ? "rotate-180" : ""}`} />
      </button>

      {open && (
        <div
          role="menu"
          className="absolute right-0 mt-2 w-64 max-h-[70vh] overflow-y-auto rounded-xl border bg-[#0c111a] border-white/10 shadow-2xl z-50 py-2"
          data-testid="menu-language-switcher"
        >
          <div className="px-3 pt-1.5 pb-1 text-[10px] font-bold tracking-[0.18em] uppercase text-white/40">
            {t("languageSwitcher.priority")}
          </div>
          {priority.map((l) => (
            <LangItem
              key={l.code}
              code={l.code}
              label={l.native}
              sub={l.name}
              active={l.code === current.code}
              onClick={() => change(l.code)}
            />
          ))}

          <div className="my-1.5 border-t border-white/[0.06]" />
          <div className="px-3 pt-1 pb-1 text-[10px] font-bold tracking-[0.18em] uppercase text-white/40">
            {t("languageSwitcher.other")}
          </div>
          {other.map((l) => (
            <LangItem
              key={l.code}
              code={l.code}
              label={l.native}
              sub={l.name}
              active={l.code === current.code}
              onClick={() => change(l.code)}
            />
          ))}
        </div>
      )}
    </div>
  );
}

function LangItem({
  code, label, sub, active, onClick,
}: {
  code: string; label: string; sub: string; active: boolean; onClick: () => void;
}) {
  return (
    <button
      role="menuitem"
      onClick={onClick}
      className={`w-full flex items-center gap-3 px-3 py-2 text-left transition-colors ${
        active ? "bg-white/[0.06]" : "hover:bg-white/[0.04]"
      }`}
      data-testid={`option-language-${code}`}
    >
      <span className="text-[10px] font-bold uppercase tracking-wider text-white/40 w-7">
        {code}
      </span>
      <span className="flex-1 min-w-0">
        <span className="block text-[13.5px] text-white/90 truncate">{label}</span>
        <span className="block text-[11px] text-white/35 truncate">{sub}</span>
      </span>
      {active && <Check className="w-3.5 h-3.5 text-primary flex-shrink-0" />}
    </button>
  );
}
