import { Link } from "wouter";
import logoPath from "../../../../attached_assets/Screenshot_2026-03-22_at_21.14.04_1775773255892.png";

const LEGAL_LINKS = [
  { label: "Privacy Notice",           href: "/legal/privacy" },
  { label: "Cookie Notice",            href: "/legal/cookies" },
  { label: "Terms of Use",             href: "/legal/terms" },
  { label: "Disclaimer",               href: "/legal/disclaimer" },
  { label: "Accessibility",            href: "/legal/accessibility" },
  { label: "Privacy Choices",          href: "/legal/privacy-choices" },
  { label: "Data Requests",            href: "/legal/data-requests" },
  { label: "Security & Data Processing", href: "/legal/security" },
  { label: "Legal Notice",             href: "/legal/notice" },
];

const SERVICE_LINKS = [
  { label: "Performance Marketing",    href: "/services/performance-marketing" },
  { label: "CRM + Automation",         href: "/services/crm-automation" },
  { label: "Reporting & Analytics",    href: "/services/reporting-analytics" },
  { label: "Content Funnels",          href: "/services/content-funnels" },
];

const NAV_LINKS = [
  { label: "Services",    href: "/services" },
  { label: "Industries",  href: "/industries" },
  { label: "Case Studies",href: "/case-studies" },
  { label: "About",       href: "/about" },
  { label: "Contact",     href: "/contact" },
  { label: "Book Audit",  href: "/book-audit" },
];

export default function Footer() {
  return (
    <footer className="bg-black pt-16 pb-8 border-t border-white/5">
      <div className="container mx-auto px-4 md:px-6">

        {/* Top grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-14">

          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/">
              <img
                src={logoPath}
                alt="Alpine Marketing"
                className="h-8 w-auto invert brightness-200 opacity-80 mb-4"
              />
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed mb-4">
              Systematized acquisition for Swiss and European SMBs. Lower CAC, stronger pipelines, cleaner reporting.
            </p>
            <div className="text-xs text-muted-foreground space-y-1">
              <p>Alpine Marketing</p>
              <p>Zurich, Switzerland</p>
              <p>
                <a href="mailto:info@alpinemarketing.ch"
                   className="hover:text-white transition-colors">
                  info@alpinemarketing.ch
                </a>
              </p>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-xs font-bold tracking-widest uppercase text-white/60 mb-4">Services</h4>
            <ul className="space-y-2.5">
              {SERVICE_LINKS.map(l => (
                <li key={l.href}>
                  <Link href={l.href}
                        className="text-sm text-muted-foreground hover:text-white transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-xs font-bold tracking-widest uppercase text-white/60 mb-4">Company</h4>
            <ul className="space-y-2.5">
              {NAV_LINKS.map(l => (
                <li key={l.href}>
                  <Link href={l.href}
                        className="text-sm text-muted-foreground hover:text-white transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-xs font-bold tracking-widest uppercase text-white/60 mb-4">Legal &amp; Privacy</h4>
            <ul className="space-y-2.5">
              {LEGAL_LINKS.map(l => (
                <li key={l.href}>
                  <Link href={l.href}
                        className="text-sm text-muted-foreground hover:text-white transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/5 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-muted-foreground">
            <p>
              © 2026 Alpine Marketing. All rights reserved. Zurich, Switzerland.
            </p>
            <div className="flex items-center gap-4">
              <Link href="/legal/privacy-choices"
                    className="hover:text-white transition-colors underline underline-offset-2">
                Privacy Choices
              </Link>
              <span className="text-white/20">|</span>
              <p>VAT: [placeholder] · CHE-[placeholder]</p>
            </div>
          </div>
          <p className="text-[11px] text-white/20 mt-4 max-w-2xl">
            Results shown on this site are from real client engagements and are not a guarantee of future outcomes. Performance varies by market, offer, budget, sales process, and other factors outside Alpine Marketing's control.
          </p>
        </div>

      </div>
    </footer>
  );
}
