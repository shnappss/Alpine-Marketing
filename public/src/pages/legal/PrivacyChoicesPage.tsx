import { useState, useEffect } from "react";
import LegalPageTemplate from "../../components/LegalPageTemplate";
import { Link } from "wouter";

const CONSENT_KEY = "am_cookie_consent";
const CONSENT_VER = "1.0";

type Prefs = { necessary: boolean; preferences: boolean; analytics: boolean; marketing: boolean; timestamp?: string };

function getPrefs(): Prefs {
  try {
    const raw = localStorage.getItem(CONSENT_KEY);
    if (!raw) return { necessary: true, preferences: false, analytics: false, marketing: false };
    const p = JSON.parse(raw);
    if (p.version !== CONSENT_VER) return { necessary: true, preferences: false, analytics: false, marketing: false };
    return p;
  } catch { return { necessary: true, preferences: false, analytics: false, marketing: false }; }
}

function savePrefs(p: Prefs) {
  localStorage.setItem(CONSENT_KEY, JSON.stringify({ ...p, necessary: true, version: CONSENT_VER, timestamp: new Date().toISOString() }));
}

const CATEGORIES = [
  { key: "necessary",   label: "Strictly Necessary", always: true,  desc: "Required for the site to function. Cannot be disabled." },
  { key: "preferences", label: "Preferences",         always: false, desc: "Remembers your settings (including cookie choices)." },
  { key: "analytics",   label: "Analytics",           always: false, desc: "Helps us understand site usage. Not shared with advertisers. Not loaded before consent." },
  { key: "marketing",   label: "Marketing",           always: false, desc: "Used for targeted advertising. Never loaded without your explicit prior consent." },
];

export default function PrivacyChoicesPage() {
  const [prefs, setPrefs] = useState<Prefs>({ necessary: true, preferences: false, analytics: false, marketing: false });
  const [saved, setSaved] = useState(false);

  useEffect(() => { setPrefs(getPrefs()); }, []);

  const toggle = (key: string) => {
    setPrefs(p => ({ ...p, [key]: !p[key as keyof Prefs] }));
    setSaved(false);
  };

  const save = () => { savePrefs(prefs); setSaved(true); };
  const rejectAll = () => { const p = { necessary: true, preferences: false, analytics: false, marketing: false }; setPrefs(p); savePrefs(p); setSaved(true); };
  const acceptAll = () => { const p = { necessary: true, preferences: true, analytics: true, marketing: true }; setPrefs(p); savePrefs(p); setSaved(true); };

  return (
    <LegalPageTemplate title="Privacy Choices" lastUpdated="April 2026">
      <p>
        This page lets you manage your privacy preferences, including cookie settings and marketing opt-outs. Your choices are stored in your browser. They apply to this device and browser only.
      </p>

      <h2>Cookie Settings</h2>
      <p>Toggle each category below. Strictly necessary cookies are always active.</p>

      <div className="not-prose space-y-4 my-6">
        {CATEGORIES.map(cat => (
          <div key={cat.key} className="flex items-start justify-between gap-4 bg-card border border-white/8 rounded-xl p-5">
            <div>
              <p className="font-semibold text-white text-sm mb-1">{cat.label}</p>
              <p className="text-xs text-muted-foreground">{cat.desc}</p>
            </div>
            <button
              role="switch"
              aria-checked={cat.always || !!prefs[cat.key as keyof Prefs]}
              disabled={cat.always}
              onClick={() => !cat.always && toggle(cat.key)}
              className={`relative flex-shrink-0 w-10 h-6 rounded-full transition-colors mt-0.5 ${
                cat.always || prefs[cat.key as keyof Prefs] ? "bg-primary" : "bg-white/10"
              } ${cat.always ? "opacity-50 cursor-not-allowed" : "cursor-pointer"}`}
            >
              <span className={`absolute top-1 left-1 w-4 h-4 rounded-full bg-white transition-transform ${
                cat.always || prefs[cat.key as keyof Prefs] ? "translate-x-4" : ""
              }`} />
            </button>
          </div>
        ))}
      </div>

      <div className="not-prose flex flex-wrap gap-3 mb-8">
        <button onClick={save} className="px-5 py-2 bg-primary text-primary-foreground text-sm font-semibold rounded-lg hover:bg-primary/90 transition-colors">
          Save my preferences
        </button>
        <button onClick={acceptAll} className="px-5 py-2 bg-white/5 border border-white/10 text-white text-sm font-semibold rounded-lg hover:bg-white/10 transition-colors">
          Accept all
        </button>
        <button onClick={rejectAll} className="px-5 py-2 bg-white/5 border border-white/10 text-white text-sm font-semibold rounded-lg hover:bg-white/10 transition-colors">
          Necessary only
        </button>
      </div>

      {saved && (
        <div className="not-prose px-4 py-3 rounded-lg bg-secondary/10 border border-secondary/20 text-secondary text-sm mb-6">
          ✓ Preferences saved.
        </div>
      )}

      <h2>Marketing Opt-Out</h2>
      <p>
        If you previously opted into marketing emails, you can withdraw your consent at any time by emailing{" "}
        <a href="mailto:roman@alpinemarketing.ch">roman@alpinemarketing.ch</a> or by clicking the unsubscribe link in any marketing email we have sent you. Withdrawal of consent does not affect the lawfulness of processing before the withdrawal.
      </p>

      <h2>Do Not Sell or Share My Personal Information</h2>
      <p>
        Alpine Marketing does not sell personal data. We do not share personal data with third parties for their own marketing or advertising purposes without your explicit consent. This applies to all visitors regardless of location.
      </p>

      <h2>Data Rights</h2>
      <p>
        To exercise any of your privacy rights (access, deletion, correction, portability, objection), visit our{" "}
        <Link href="/legal/data-requests">Data Requests</Link> page or email <a href="mailto:roman@alpinemarketing.ch">roman@alpinemarketing.ch</a>.
      </p>
    </LegalPageTemplate>
  );
}
