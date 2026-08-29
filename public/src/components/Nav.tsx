import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";
import { Link, useLocation } from "wouter";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "./LanguageSwitcher";
import logoPath from "../../../../attached_assets/Logo_White_Vers_1775782653069.jpg";

export default function Nav() {
  const { t } = useTranslation();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [location] = useLocation();

  const PRIMARY_LINKS = [
    { name: t("nav.services"),     href: "/services" },
    { name: t("nav.caseStudies"),  href: "/#results" },
    { name: t("nav.blog"),         href: "/blog" },
    { name: t("nav.about"),        href: "/about" },
    { name: t("nav.contact"),      href: "/contact" },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => { setMobileOpen(false); }, [location]);

  const isActive = (href: string) => {
    if (href === "/") return location === "/";
    return location.startsWith(href.replace("/#", "")) && !href.startsWith("/#");
  };

  // Light theme on blog pages (until scrolled — then nav goes dark/blurred as usual)
  const isLightPage = location.startsWith("/blog");
  const useLight = isLightPage && !scrolled;

  return (
    <>
      {/* Thin accent bar — top of page */}
      <div className="fixed top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-primary/0 via-primary to-primary/0 z-50" />

      <header
        className={`fixed top-[2px] left-0 right-0 z-40 transition-all duration-500 ${
          scrolled
            ? "bg-[#070810]/85 backdrop-blur-xl border-b border-white/[0.06] shadow-[0_1px_40px_rgba(0,0,0,0.4)]"
            : useLight
            ? "bg-white/70 backdrop-blur-md border-b border-zinc-100"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-5 md:px-8 h-[68px] flex items-center justify-between gap-8">

          {/* Logo */}
          <Link href="/" className="flex-shrink-0 flex items-center" data-testid="link-home">
            <img
              src={logoPath}
              alt="Alpine Marketing"
              className="h-14 w-auto"
              width="56"
              height="56"
              decoding="async"
              style={
                useLight
                  ? { filter: "invert(1) hue-rotate(180deg)" }
                  : { mixBlendMode: "screen" }
              }
            />
          </Link>

          {/* Desktop nav — centered links */}
          <nav className="hidden md:flex items-center gap-1 flex-1 justify-center" aria-label="Main navigation">
            {PRIMARY_LINKS.map((link) => {
              const active = isActive(link.href);
              const inactiveCls = useLight
                ? "text-zinc-500 hover:text-zinc-900"
                : "text-white/55 hover:text-white/90";
              const activeCls = useLight ? "text-zinc-900" : "text-white";
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  data-testid={`link-${link.name.toLowerCase().replace(/\s+/g, "-")}`}
                  className={`relative px-4 py-2 text-[13.5px] font-medium rounded-md transition-all duration-150 group ${
                    active ? activeCls : inactiveCls
                  }`}
                >
                  {active && (
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-[2px] rounded-full bg-primary" />
                  )}
                  <span
                    className={`absolute inset-0 rounded-md transition-colors duration-150 ${
                      useLight ? "bg-zinc-900/0 group-hover:bg-zinc-900/[0.04]" : "bg-white/0 group-hover:bg-white/[0.05]"
                    }`}
                  />
                  <span className="relative">{link.name}</span>
                </Link>
              );
            })}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-3 flex-shrink-0">
            <LanguageSwitcher variant={useLight ? "light" : "dark"} />
            <div className={`w-px h-5 ${useLight ? "bg-zinc-200" : "bg-white/10"}`} />
            <a
              href="tel:+41795255504"
              className={`hidden lg:inline text-[13px] transition-colors font-medium tracking-tight ${
                useLight ? "text-zinc-500 hover:text-zinc-800" : "text-white/50 hover:text-white/80"
              }`}
            >
              {t("common.phone")}
            </a>
            <div className={`hidden lg:block w-px h-5 ${useLight ? "bg-zinc-200" : "bg-white/10"}`} />
            <Link
              href="/book-audit"
              data-testid="link-cta-nav"
              className="inline-flex items-center gap-2 px-5 py-2.5 text-[13.5px] font-semibold bg-primary text-white rounded-lg hover:bg-primary/90 active:scale-[0.98] transition-all duration-150 shadow-[0_0_18px_rgba(8,145,178,0.35)] hover:shadow-[0_0_28px_rgba(8,145,178,0.55)]"
            >
              {t("common.bookAudit")}
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            className={`md:hidden flex items-center justify-center w-9 h-9 rounded-md transition-colors ${
              useLight
                ? "text-zinc-700 hover:text-zinc-900 hover:bg-zinc-900/5"
                : "text-white/70 hover:text-white hover:bg-white/5"
            }`}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle navigation"
            data-testid="button-mobile-menu"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              key="mobile-menu"
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.18 }}
              className="md:hidden bg-[#070810]/96 backdrop-blur-xl border-t border-white/[0.07]"
            >
              <div className="max-w-7xl mx-auto px-5 py-5 flex flex-col gap-1">
                {PRIMARY_LINKS.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    className="px-4 py-3 text-[15px] font-medium text-white/60 hover:text-white rounded-lg hover:bg-white/[0.05] transition-all"
                    onClick={() => setMobileOpen(false)}
                  >
                    {link.name}
                  </Link>
                ))}
                <div className="mt-3 pt-3 border-t border-white/[0.07] flex items-center justify-between gap-3">
                  <LanguageSwitcher variant="dark" />
                  <Link
                    href="/book-audit"
                    className="flex-1 flex items-center justify-center py-3 px-5 bg-primary text-white text-[15px] font-semibold rounded-lg hover:bg-primary/90 transition-all"
                    onClick={() => setMobileOpen(false)}
                  >
                    {t("common.bookAudit")}
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}
