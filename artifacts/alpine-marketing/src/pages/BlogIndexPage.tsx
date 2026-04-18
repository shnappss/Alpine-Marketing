import { useState, useMemo, useEffect } from "react";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { ArrowRight, Clock } from "lucide-react";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { POSTS_META } from "@/blog/posts";
import type { BlogCategory } from "@/blog/types";

const CYAN = "#0891b2";

const ALL = "All" as const;

export default function BlogIndexPage() {
  const [active, setActive] = useState<BlogCategory | typeof ALL>(ALL);

  useEffect(() => {
    const prev = document.title;
    document.title = "Insights & Playbooks — Alpine Marketing";
    return () => { document.title = prev; };
  }, []);

  const categories = useMemo(() => {
    const set = new Set<BlogCategory>();
    POSTS_META.forEach((p) => set.add(p.category));
    return [ALL, ...Array.from(set)] as const;
  }, []);

  const filtered = useMemo(
    () => (active === ALL ? POSTS_META : POSTS_META.filter((p) => p.category === active)),
    [active]
  );

  const [featured, ...rest] = filtered;

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col font-sans">
      <Nav />

      <main className="flex-1">
        {/* ── Hero ─────────────────────────────────────────── */}
        <header className="relative pt-28 md:pt-36 pb-10 md:pb-14 overflow-hidden">
          <div
            className="absolute pointer-events-none"
            style={{
              top: "-15%", left: "-10%", width: 620, height: 520,
              background: `radial-gradient(ellipse at center, ${CYAN}1c 0%, transparent 68%)`,
            }}
          />
          <div className="absolute inset-0 bg-grid pointer-events-none opacity-50" />

          <div className="relative max-w-5xl mx-auto px-5 md:px-8">
            <motion.span
              initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="inline-flex items-center gap-2 text-[11px] font-bold tracking-[0.22em] uppercase px-3 py-1.5 rounded-full border"
              style={{
                color: CYAN, borderColor: `${CYAN}30`, background: `${CYAN}0f`,
                fontFamily: "'Space Grotesk', sans-serif",
              }}
            >
              <span className="w-1.5 h-1.5 rounded-full" style={{ background: CYAN }} />
              Insights &amp; Playbooks
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.05 }}
              className="mt-5 text-[2.4rem] md:text-[3.2rem] lg:text-[3.6rem] font-bold text-white leading-[1.06] tracking-tight max-w-3xl"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              Field notes from the engine room of Swiss customer acquisition.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.12 }}
              className="mt-5 text-[1.05rem] md:text-[1.15rem] leading-[1.7] text-white/55 max-w-2xl"
            >
              Honest write-ups on what works, what wastes ad spend, and the tools we deploy
              to turn pipelines into predictable profit. No fluff, no agency-speak.
            </motion.p>
          </div>
        </header>

        {/* ── Category filter ──────────────────────────────── */}
        <div className="max-w-5xl mx-auto px-5 md:px-8 pb-8">
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => {
              const isActive = active === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setActive(cat as BlogCategory | typeof ALL)}
                  data-testid={`filter-category-${cat.toLowerCase().replace(/\s+/g, "-")}`}
                  className={`px-3.5 py-1.5 text-[12px] font-semibold tracking-wide rounded-full border transition-all ${
                    isActive
                      ? "text-white"
                      : "text-white/45 hover:text-white/80"
                  }`}
                  style={{
                    borderColor: isActive ? `${CYAN}50` : "rgba(255,255,255,0.08)",
                    background:  isActive ? `${CYAN}15` : "transparent",
                    fontFamily: "'Space Grotesk', sans-serif",
                  }}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </div>

        {/* ── Featured + grid ───────────────────────────────── */}
        <section className="pb-24">
          <div className="max-w-5xl mx-auto px-5 md:px-8">
            {filtered.length === 0 && (
              <p className="text-white/45 text-center py-16">No articles in this category yet — check back soon.</p>
            )}

            {featured && (
              <Link
                href={`/blog/${featured.slug}`}
                className="group block rounded-2xl border border-white/[0.06] hover:border-primary/40 bg-white/[0.015] hover:bg-white/[0.025] p-6 md:p-10 mb-5 transition-all relative overflow-hidden"
                data-testid={`link-featured-${featured.slug}`}
              >
                <div
                  className="absolute top-0 left-0 right-0 h-px opacity-0 group-hover:opacity-100 transition-opacity"
                  style={{ background: `linear-gradient(90deg, transparent, ${CYAN}, transparent)` }}
                />
                <div className="grid md:grid-cols-[1fr_auto] gap-6 items-end">
                  <div>
                    <div className="flex flex-wrap items-center gap-3 mb-3">
                      <span
                        className="text-[10px] font-bold tracking-[0.22em] uppercase px-2.5 py-1 rounded-full border"
                        style={{
                          color: CYAN, borderColor: `${CYAN}40`, background: `${CYAN}10`,
                          fontFamily: "'Space Grotesk', sans-serif",
                        }}
                      >
                        Featured · {featured.category}
                      </span>
                      <span className="inline-flex items-center gap-1 text-[11.5px] text-white/40">
                        <Clock className="w-3 h-3" />
                        {featured.readMinutes} min read
                      </span>
                    </div>
                    <h2
                      className="text-[1.6rem] md:text-[2rem] font-bold text-white leading-[1.12] tracking-tight group-hover:text-primary transition-colors"
                      style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                    >
                      {featured.title}
                    </h2>
                    <p className="mt-3 text-[15px] text-white/55 leading-relaxed max-w-2xl">
                      {featured.excerpt}
                    </p>
                    <div className="mt-4 text-[12.5px] text-white/40">
                      {featured.author} · {featured.date}
                    </div>
                  </div>
                  <ArrowRight
                    className="w-5 h-5 text-white/30 group-hover:text-primary group-hover:translate-x-1 transition-all hidden md:block"
                  />
                </div>
              </Link>
            )}

            {rest.length > 0 && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {rest.map((p) => (
                  <Link
                    key={p.slug}
                    href={`/blog/${p.slug}`}
                    className="group block rounded-xl border border-white/[0.06] hover:border-primary/30 bg-white/[0.015] hover:bg-white/[0.03] p-6 transition-all"
                    data-testid={`link-post-${p.slug}`}
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <span
                        className="text-[10px] font-bold tracking-[0.2em] uppercase"
                        style={{ color: CYAN }}
                      >
                        {p.category}
                      </span>
                      <span className="text-white/20">·</span>
                      <span className="inline-flex items-center gap-1 text-[11px] text-white/40">
                        <Clock className="w-3 h-3" />
                        {p.readMinutes} min
                      </span>
                    </div>
                    <h3
                      className="text-[1.2rem] font-semibold text-white leading-snug tracking-tight group-hover:text-primary transition-colors"
                      style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                    >
                      {p.title}
                    </h3>
                    <p className="mt-2.5 text-[13.5px] text-white/50 leading-relaxed line-clamp-3">
                      {p.excerpt}
                    </p>
                    <div className="mt-4 text-[11.5px] text-white/35">
                      {p.author} · {p.date}
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
