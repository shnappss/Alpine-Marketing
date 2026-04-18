import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";
import { Link, useLocation } from "wouter";
import logoPath from "../../../../attached_assets/Logo_White_Vers_1775782653069.jpg";

const PRIMARY_LINKS = [
  { name: "Services",      href: "/services" },
  { name: "Case Studies",  href: "/#results" },
  { name: "Blog",          href: "/blog" },
  { name: "About",         href: "/about" },
  { name: "Contact",       href: "/contact" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [location] = useLocation();

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

  return (
    <>
      {/* Thin accent bar — top of page */}
      <div className="fixed top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-primary/0 via-primary to-primary/0 z-50" />

      <header
        className={`fixed top-[2px] left-0 right-0 z-40 transition-all duration-500 ${
          scrolled
            ? "bg-[#070810]/85 backdrop-blur-xl border-b border-white/[0.06] shadow-[0_1px_40px_rgba(0,0,0,0.4)]"
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
              style={{ mixBlendMode: "screen" }}
            />
          </Link>

          {/* Desktop nav — centered links */}
          <nav className="hidden md:flex items-center gap-1 flex-1 justify-center" aria-label="Main navigation">
            {PRIMARY_LINKS.map((link) => (
              <a
                key={link.name}
                href={link.href}
                data-testid={`link-${link.name.toLowerCase().replace(/\s+/g, "-")}`}
                className={`relative px-4 py-2 text-[13.5px] font-medium rounded-md transition-all duration-150 group ${
                  isActive(link.href)
                    ? "text-white"
                    : "text-white/55 hover:text-white/90"
                }`}
              >
                {/* Active underline */}
                {isActive(link.href) && (
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-[2px] rounded-full bg-primary" />
                )}
                {/* Hover bg */}
                <span className="absolute inset-0 rounded-md bg-white/0 group-hover:bg-white/[0.05] transition-colors duration-150" />
                <span className="relative">{link.name}</span>
              </a>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-3 flex-shrink-0">
            <a
              href="tel:+41795255504"
              className="text-[13px] text-white/50 hover:text-white/80 transition-colors font-medium tracking-tight"
            >
              +41 79 525 55 04
            </a>
            <div className="w-px h-5 bg-white/10" />
            <Link
              href="/book-audit"
              data-testid="link-cta-nav"
              className="inline-flex items-center gap-2 px-5 py-2.5 text-[13.5px] font-semibold bg-primary text-white rounded-lg hover:bg-primary/90 active:scale-[0.98] transition-all duration-150 shadow-[0_0_18px_rgba(8,145,178,0.35)] hover:shadow-[0_0_28px_rgba(8,145,178,0.55)]"
            >
              Book Free Audit
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden flex items-center justify-center w-9 h-9 rounded-md text-white/70 hover:text-white hover:bg-white/5 transition-colors"
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
                  <a
                    key={link.name}
                    href={link.href}
                    className="px-4 py-3 text-[15px] font-medium text-white/60 hover:text-white rounded-lg hover:bg-white/[0.05] transition-all"
                    onClick={() => setMobileOpen(false)}
                  >
                    {link.name}
                  </a>
                ))}
                <div className="mt-3 pt-3 border-t border-white/[0.07]">
                  <Link
                    href="/book-audit"
                    className="flex items-center justify-center w-full py-3 px-5 bg-primary text-white text-[15px] font-semibold rounded-lg hover:bg-primary/90 transition-all"
                    onClick={() => setMobileOpen(false)}
                  >
                    Book Free Audit
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
