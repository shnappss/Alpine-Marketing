import { useState, useMemo, useEffect } from "react";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { ArrowRight, Clock } from "lucide-react";
import { useTranslation } from "react-i18next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { POSTS_META } from "@/blog/posts";
import type { BlogCategory } from "@/blog/types";

const CYAN = "#0891b2";

const ALL = "All" as const;

export default function BlogIndexPage() {
  const { t } = useTranslation();
  const [active, setActive] = useState<BlogCategory | typeof ALL>(ALL);

  useEffect(() => {
    const prev = document.title;
    document.title = t("blogIndex.docTitle");
    return () => { document.title = prev; };
  }, [t]);

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

  const labelFor = (cat: string) => (cat === ALL ? t("blogIndex.all") : cat);

  return (
    <div className="min-h-screen bg-white text-zinc-900 flex flex-col font-sans">
      <Nav />

      <main className="flex-1">
        <header className="relative pt-28 md:pt-36 pb-10 md:pb-14 overflow-hidden bg-gradient-to-b from-zinc-50 to-white border-b border-zinc-100">
          <div
            className="absolute pointer-events-none"
            style={{
              top: "-10%", left: "-10%", width: 620, height: 520,
              background: `radial-gradient(ellipse at center, ${CYAN}14 0%, transparent 70%)`,
            }}
          />

          <div className="relative max-w-5xl mx-auto px-5 md:px-8">
            <motion.span
              initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="inline-flex items-center gap-2 text-[11px] font-bold tracking-[0.22em] uppercase px-3 py-1.5 rounded-full border"
              style={{
                color: CYAN, borderColor: "#a5f3fc", background: "#ecfeff",
                fontFamily: "'Space Grotesk', sans-serif",
              }}
            >
              <span className="w-1.5 h-1.5 rounded-full" style={{ background: CYAN }} />
              {t("blogIndex.eyebrow")}
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.05 }}
              className="mt-5 text-[2.4rem] md:text-[3.2rem] lg:text-[3.6rem] font-bold text-zinc-900 leading-[1.06] tracking-tight max-w-3xl"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              {t("blogIndex.title")}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.12 }}
              className="mt-5 text-[1.05rem] md:text-[1.15rem] leading-[1.7] text-zinc-600 max-w-2xl"
            >
              {t("blogIndex.subtitle")}
            </motion.p>
          </div>
        </header>

        <div className="max-w-5xl mx-auto px-5 md:px-8 pt-10 pb-8">
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => {
              const isActive = active === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setActive(cat as BlogCategory | typeof ALL)}
                  data-testid={`filter-category-${cat.toLowerCase().replace(/\s+/g, "-")}`}
                  className={`px-3.5 py-1.5 text-[12px] font-semibold tracking-wide rounded-full border transition-all ${
                    isActive ? "text-[#0891b2]" : "text-zinc-500 hover:text-zinc-800"
                  }`}
                  style={{
                    borderColor: isActive ? "#a5f3fc" : "#e4e4e7",
                    background:  isActive ? "#ecfeff" : "transparent",
                    fontFamily: "'Space Grotesk', sans-serif",
                  }}
                >
                  {labelFor(cat)}
                </button>
              );
            })}
          </div>
        </div>

        <section className="pb-24">
          <div className="max-w-5xl mx-auto px-5 md:px-8">
            {filtered.length === 0 && (
              <p className="text-zinc-500 text-center py-16">{t("blogIndex.empty")}</p>
            )}

            {featured && (
              <Link
                href={`/blog/${featured.slug}`}
                className="group block rounded-2xl border border-zinc-200 hover:border-[#0891b2]/50 bg-white hover:shadow-lg p-6 md:p-10 mb-5 transition-all relative overflow-hidden"
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
                          color: CYAN, borderColor: "#a5f3fc", background: "#ecfeff",
                          fontFamily: "'Space Grotesk', sans-serif",
                        }}
                      >
                        {t("blogIndex.featured")} · {featured.category}
                      </span>
                      <span className="inline-flex items-center gap-1 text-[11.5px] text-zinc-500">
                        <Clock className="w-3 h-3" />
                        {featured.readMinutes} {t("blogIndex.minRead")}
                      </span>
                    </div>
                    <h2
                      className="text-[1.6rem] md:text-[2rem] font-bold text-zinc-900 leading-[1.12] tracking-tight group-hover:text-[#0891b2] transition-colors"
                      style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                    >
                      {featured.title}
                    </h2>
                    <p className="mt-3 text-[15px] text-zinc-600 leading-relaxed max-w-2xl">
                      {featured.excerpt}
                    </p>
                    <div className="mt-4 text-[12.5px] text-zinc-500">
                      {featured.author} · {featured.date}
                    </div>
                  </div>
                  <ArrowRight
                    className="w-5 h-5 text-zinc-400 group-hover:text-[#0891b2] group-hover:translate-x-1 transition-all hidden md:block"
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
                    className="group block rounded-xl border border-zinc-200 hover:border-[#0891b2]/40 bg-white hover:shadow-md p-6 transition-all"
                    data-testid={`link-post-${p.slug}`}
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <span
                        className="text-[10px] font-bold tracking-[0.2em] uppercase"
                        style={{ color: CYAN }}
                      >
                        {p.category}
                      </span>
                      <span className="text-zinc-300">·</span>
                      <span className="inline-flex items-center gap-1 text-[11px] text-zinc-500">
                        <Clock className="w-3 h-3" />
                        {p.readMinutes} {t("blogIndex.min")}
                      </span>
                    </div>
                    <h3
                      className="text-[1.2rem] font-semibold text-zinc-900 leading-snug tracking-tight group-hover:text-[#0891b2] transition-colors"
                      style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                    >
                      {p.title}
                    </h3>
                    <p className="mt-2.5 text-[13.5px] text-zinc-600 leading-relaxed line-clamp-3">
                      {p.excerpt}
                    </p>
                    <div className="mt-4 text-[11.5px] text-zinc-500">
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
