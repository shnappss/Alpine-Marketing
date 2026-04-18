import { Link } from "wouter";
import logoPath from "../../../../attached_assets/Logo_White_Vers_1775782653069.jpg";

const LEGAL_LINKS = [
  { label: "Privacy Notice",              href: "/legal/privacy" },
  { label: "Cookie Notice",              href: "/legal/cookies" },
  { label: "Terms of Use",              href: "/legal/terms" },
  { label: "Disclaimer",                href: "/legal/disclaimer" },
  { label: "Accessibility",             href: "/legal/accessibility" },
  { label: "Privacy Choices",           href: "/legal/privacy-choices" },
  { label: "Data Requests",             href: "/legal/data-requests" },
  { label: "Security & Data Processing", href: "/legal/security" },
  { label: "Legal Notice",              href: "/legal/notice" },
];

const SERVICE_LINKS = [
  { label: "Performance Marketing",  href: "/services" },
  { label: "CRM + Automation",       href: "/services" },
  { label: "Reporting & Analytics",  href: "/services" },
  { label: "Full-Funnel Audit",      href: "/book-audit" },
];

const NAV_LINKS = [
  { label: "Services",     href: "/services" },
  { label: "Case Studies", href: "/#results" },
  { label: "Blog",         href: "/blog" },
  { label: "About",        href: "/about" },
  { label: "Contact",      href: "/contact" },
  { label: "Book Audit",   href: "/book-audit" },
];

export default function Footer() {
  return (
    <footer className="bg-black pt-16 pb-8 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-5 md:px-8">

        {/* Top grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-14">

          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/">
              <img src={logoPath} alt="Alpine Marketing" className="h-14 w-auto mb-4" style={{ mixBlendMode: "screen" }} />
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed mb-5">
              Systematized client acquisition for Swiss &amp; European SMBs. Lower CAC, stronger pipelines, cleaner reporting.
            </p>
            <div className="text-sm text-muted-foreground space-y-1.5">
              <p className="font-medium text-white/70">Siladii Alpine Marketing</p>
              <p>Zurich, Switzerland</p>
              <p>
                <a href="tel:+41795255504" className="hover:text-white transition-colors">
                  +41 79 525 55 04
                </a>
              </p>
              <p>
                <a href="mailto:roman@alpinemarketing.ch" className="hover:text-white transition-colors">
                  roman@alpinemarketing.ch
                </a>
              </p>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-xs font-bold tracking-widest uppercase text-white/50 mb-4">Services</h4>
            <ul className="space-y-2.5">
              {SERVICE_LINKS.map(l => (
                <li key={l.label}>
                  <Link href={l.href} className="text-sm text-muted-foreground hover:text-white transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-xs font-bold tracking-widest uppercase text-white/50 mb-4">Company</h4>
            <ul className="space-y-2.5">
              {NAV_LINKS.map(l => (
                <li key={l.label}>
                  <Link href={l.href} className="text-sm text-muted-foreground hover:text-white transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-xs font-bold tracking-widest uppercase text-white/50 mb-4">Legal &amp; Privacy</h4>
            <ul className="space-y-2.5">
              {LEGAL_LINKS.map(l => (
                <li key={l.label}>
                  <Link href={l.href} className="text-sm text-muted-foreground hover:text-white transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/5 pt-8">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-xs text-muted-foreground">
            <p>© 2026 Siladii Alpine Marketing. All rights reserved. Zurich, Switzerland.</p>
            <div className="flex items-center gap-4 flex-wrap">
              <Link href="/legal/privacy-choices" className="hover:text-white transition-colors underline underline-offset-2">
                Privacy Choices
              </Link>
              <span className="text-white/20">|</span>
              <Link href="/legal/notice" className="hover:text-white transition-colors">Legal Notice</Link>
            </div>
          </div>
          <p className="text-[11px] text-white/20 mt-4 max-w-2xl leading-relaxed">
            Results shown on this site are from real client engagements and are not a guarantee of future outcomes.
            Performance varies by market, offer, budget, sales process, and other factors outside Alpine Marketing's control.
          </p>
        </div>

      </div>
    </footer>
  );
}
