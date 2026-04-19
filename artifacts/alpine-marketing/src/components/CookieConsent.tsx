import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "wouter";
import { useTranslation } from "react-i18next";
import { X, Settings } from "lucide-react";

type ConsentState = {
  necessary: true;
  preferences: boolean;
  analytics: boolean;
  marketing: boolean;
  timestamp: string;
  version: string;
};

const CONSENT_KEY = "am_cookie_consent";
const CONSENT_VER = "1.0";

function getStoredConsent(): ConsentState | null {
  try {
    const raw = localStorage.getItem(CONSENT_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw);
    if (parsed.version !== CONSENT_VER) return null;
    return parsed;
  } catch {
    return null;
  }
}

function saveConsent(state: Omit<ConsentState, "timestamp" | "version">) {
  const full: ConsentState = {
    ...state,
    necessary: true,
    timestamp: new Date().toISOString(),
    version: CONSENT_VER,
  };
  localStorage.setItem(CONSENT_KEY, JSON.stringify(full));
}

export default function CookieConsent() {
  const { t } = useTranslation();
  const [visible, setVisible] = useState(false);
  const [showCustomize, setShowCustomize] = useState(false);
  const [prefs, setPrefs] = useState({ preferences: false, analytics: false, marketing: false });

  useEffect(() => {
    const stored = getStoredConsent();
    if (!stored) {
      const timer = setTimeout(() => setVisible(true), 1200);
      return () => clearTimeout(timer);
    }
    return;
  }, []);

  const acceptAll = () => {
    saveConsent({ necessary: true, preferences: true, analytics: true, marketing: true });
    setVisible(false);
  };

  const rejectNonEssential = () => {
    saveConsent({ necessary: true, preferences: false, analytics: false, marketing: false });
    setVisible(false);
  };

  const saveCustom = () => {
    saveConsent({ necessary: true, ...prefs });
    setVisible(false);
  };

  if (!visible) return null;

  const items = [
    { key: "necessary", always: true },
    { key: "preferences", always: false },
    { key: "analytics", always: false },
    { key: "marketing", always: false },
  ] as const;

  return (
    <AnimatePresence>
      <motion.div
        key="cookie-banner"
        initial={{ y: 80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 80, opacity: 0 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="fixed bottom-4 left-4 right-4 md:left-auto md:right-6 md:max-w-md z-[9999]"
        role="dialog"
        aria-label="Cookie consent"
        aria-modal="true"
      >
        <div className="bg-[#13131F] border border-white/10 rounded-2xl shadow-2xl p-6">
          <div className="flex items-start justify-between gap-4 mb-4">
            <p className="text-sm font-bold text-white leading-snug">
              {t("cookieConsent.heading")}
            </p>
            <button
              onClick={rejectNonEssential}
              className="text-muted-foreground hover:text-white transition-colors flex-shrink-0 mt-0.5"
              aria-label={t("cookieConsent.closeAria")}
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {!showCustomize ? (
            <>
              <p className="text-xs text-muted-foreground mb-5 leading-relaxed">
                {t("cookieConsent.bodyPrefix")}
                <Link href="/legal/privacy-choices" className="text-primary underline underline-offset-2">
                  {t("cookieConsent.privacyChoices")}
                </Link>
                {t("cookieConsent.between")}
                <Link href="/legal/cookies" className="text-primary underline underline-offset-2">
                  {t("cookieConsent.cookieNotice")}
                </Link>
                {t("cookieConsent.bodySuffix")}
              </p>
              <div className="flex flex-col sm:flex-row gap-2">
                <button
                  onClick={acceptAll}
                  className="flex-1 py-2 px-4 bg-primary text-white text-sm font-semibold rounded-lg hover:bg-primary/90 transition-colors"
                >
                  {t("cookieConsent.acceptAll")}
                </button>
                <button
                  onClick={rejectNonEssential}
                  className="flex-1 py-2 px-4 bg-white/5 border border-white/10 text-white text-sm font-semibold rounded-lg hover:bg-white/10 transition-colors"
                >
                  {t("cookieConsent.necessaryOnly")}
                </button>
                <button
                  onClick={() => setShowCustomize(true)}
                  className="flex-shrink-0 py-2 px-3 text-muted-foreground text-sm hover:text-white transition-colors flex items-center gap-1.5"
                  aria-label={t("cookieConsent.customizeAria")}
                >
                  <Settings className="w-3.5 h-3.5" />
                  {t("cookieConsent.customize")}
                </button>
              </div>
            </>
          ) : (
            <>
              <p className="text-xs text-muted-foreground mb-4">
                {t("cookieConsent.customizeIntro")}
              </p>
              <div className="space-y-3 mb-5">
                {items.map(item => (
                  <div key={item.key} className="flex items-start justify-between gap-3">
                    <div>
                      <p className="text-xs font-semibold text-white">{t(`cookieConsent.items.${item.key}.label`)}</p>
                      <p className="text-[11px] text-muted-foreground mt-0.5">{t(`cookieConsent.items.${item.key}.desc`)}</p>
                    </div>
                    <button
                      role="switch"
                      aria-checked={item.always || prefs[item.key as keyof typeof prefs]}
                      disabled={item.always}
                      onClick={() =>
                        !item.always &&
                        setPrefs(p => ({ ...p, [item.key]: !p[item.key as keyof typeof prefs] }))
                      }
                      className={`relative flex-shrink-0 w-9 h-5 rounded-full transition-colors mt-0.5 ${
                        item.always || prefs[item.key as keyof typeof prefs]
                          ? "bg-primary"
                          : "bg-white/10"
                      } ${item.always ? "opacity-60 cursor-not-allowed" : "cursor-pointer"}`}
                    >
                      <span
                        className={`absolute top-0.5 left-0.5 w-4 h-4 rounded-full bg-white transition-transform ${
                          item.always || prefs[item.key as keyof typeof prefs] ? "translate-x-4" : ""
                        }`}
                      />
                    </button>
                  </div>
                ))}
              </div>
              <div className="flex gap-2">
                <button
                  onClick={saveCustom}
                  className="flex-1 py-2 px-4 bg-primary text-white text-sm font-semibold rounded-lg hover:bg-primary/90 transition-colors"
                >
                  {t("cookieConsent.save")}
                </button>
                <button
                  onClick={() => setShowCustomize(false)}
                  className="py-2 px-4 bg-white/5 border border-white/10 text-white text-sm rounded-lg hover:bg-white/10 transition-colors"
                >
                  {t("cookieConsent.back")}
                </button>
              </div>
            </>
          )}
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
