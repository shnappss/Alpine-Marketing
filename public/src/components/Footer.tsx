import { Link } from "wouter";
import { useTranslation } from "react-i18next";
import logoPath from "../../../../attached_assets/Logo_White_Vers_1775782653069.jpg";

export default function Footer() {
  const { t } = useTranslation();

  const SERVICE_LINKS = [
    { label: t("footer.services.performance"), href: "/services" },
    { label: t("footer.services.crm"),         href: "/services" },
    { label: t("footer.services.reporting"),   href: "/services" },
    { label: t("footer.services.audit"),       href: "/book-audit" },
  ];

  const NAV_LINKS = [
    { label: t("nav.services"),     href: "/services" },
    { label: t("nav.caseStudies"),  href: "/#results" },
    { label: t("nav.blog"),         href: "/blog" },
    { label: t("nav.about"),        href: "/about" },
    { label: t("nav.contact"),      href: "/contact" },
    { label: t("common.bookAudit"), href: "/book-audit" },
  ];

  const LEGAL_LINKS = [
    { label: t("footer.legal.privacy"),        href: "/legal/privacy" },
    { label: t("footer.legal.cookies"),        href: "/legal/cookies" },
    { label: t("footer.legal.terms"),          href: "/legal/terms" },
    { label: t("footer.legal.disclaimer"),     href: "/legal/disclaimer" },
    { label: t("footer.legal.accessibility"),  href: "/legal/accessibility" },
    { label: t("footer.legal.privacyChoices"), href: "/legal/privacy-choices" },
    { label: t("footer.legal.dataRequests"),   href: "/legal/data-requests" },
    { label: t("footer.legal.security"),       href: "/legal/security" },
    { label: t("footer.legal.notice"),         href: "/legal/notice" },
  ];

  return (
    <footer className="bg-black pt-16 pb-8 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-14">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/">
              <img src={logoPath} alt="Alpine Marketing" className="h-14 w-auto mb-4" style={{ mixBlendMode: "screen" }} />
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed mb-5">
              {t("footer.tagline")}
            </p>
            <div className="text-sm text-muted-foreground space-y-1.5">
              <p className="font-medium text-white/70">{t("footer.company")}</p>
              <p>{t("footer.city")}</p>
              <p>
                <a href="tel:+41795255504" className="hover:text-white transition-colors">
                  {t("common.phone")}
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
            <h4 className="text-xs font-bold tracking-widest uppercase text-white/50 mb-4">
              {t("footer.headings.services")}
            </h4>
            <ul className="space-y-2.5">
              {SERVICE_LINKS.map((l, i) => (
                <li key={i}>
                  <Link href={l.href} className="text-sm text-muted-foreground hover:text-white transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-xs font-bold tracking-widest uppercase text-white/50 mb-4">
              {t("footer.headings.company")}
            </h4>
            <ul className="space-y-2.5">
              {NAV_LINKS.map((l, i) => (
                <li key={i}>
                  <Link href={l.href} className="text-sm text-muted-foreground hover:text-white transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-xs font-bold tracking-widest uppercase text-white/50 mb-4">
              {t("footer.headings.legal")}
            </h4>
            <ul className="space-y-2.5">
              {LEGAL_LINKS.map((l, i) => (
                <li key={i}>
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
            <p>{t("footer.copyright")}</p>
            <div className="flex items-center gap-4 flex-wrap">
              <Link href="/legal/privacy-choices" className="hover:text-white transition-colors underline underline-offset-2">
                {t("footer.legal.privacyChoices")}
              </Link>
              <span className="text-white/20">|</span>
              <Link href="/legal/notice" className="hover:text-white transition-colors">
                {t("footer.legal.notice")}
              </Link>
            </div>
          </div>
          <p className="text-[11px] text-white/20 mt-4 max-w-2xl leading-relaxed">
            {t("footer.performanceDisclaimer")}
          </p>
        </div>
      </div>
    </footer>
  );
}
