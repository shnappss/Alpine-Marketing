import { ReactNode } from "react";
import { Link } from "wouter";
import { ArrowLeft, ArrowRight, Calendar, Clock, User } from "lucide-react";
import { motion } from "framer-motion";
import Nav from "./Nav";
import Footer from "./Footer";
import type { BlogPostMeta } from "@/blog/types";

const CYAN    = "#0891b2";
const EMERALD = "#10b981";

interface Props {
  meta: BlogPostMeta;
  children: ReactNode;
  related?: BlogPostMeta[];
}

export default function BlogPostLayout({ meta, children, related = [] }: Props) {
  return (
    <div className="min-h-screen bg-white text-zinc-900 flex flex-col font-sans">
      <Nav />

      <main className="flex-1">
        {/* ── Hero ───────────────────────────────────────────── */}
        <header className="relative pt-28 pb-10 md:pt-36 md:pb-14 overflow-hidden bg-gradient-to-b from-zinc-50 to-white border-b border-zinc-100">
          {/* Subtle teal glow */}
          <div
            className="absolute pointer-events-none"
            style={{
              top: "-10%", left: "-10%", width: 620, height: 520,
              background: `radial-gradient(ellipse at center, ${CYAN}14 0%, transparent 70%)`,
            }}
          />

          <div className="relative max-w-3xl mx-auto px-5 md:px-8">
            {/* Back link */}
            <Link
              href="/blog"
              className="inline-flex items-center gap-1.5 text-[12px] font-semibold tracking-wider uppercase text-zinc-500 hover:text-[color:var(--blog-accent)] transition-colors mb-7"
              style={{ ["--blog-accent" as never]: CYAN }}
              data-testid="link-back-to-blog"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              All Articles
            </Link>

            {/* Category eyebrow */}
            <motion.div
              initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
            >
              <span
                className="inline-flex items-center gap-2 text-[11px] font-bold tracking-[0.2em] uppercase px-3 py-1.5 rounded-full border"
                style={{
                  color: CYAN,
                  borderColor: "#a5f3fc",
                  background: "#ecfeff",
                  fontFamily: "'Space Grotesk', sans-serif",
                }}
              >
                <span className="w-1.5 h-1.5 rounded-full" style={{ background: CYAN }} />
                {meta.category}
              </span>
            </motion.div>

            {/* Title */}
            <motion.h1
              initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.05 }}
              className="mt-5 text-[2.1rem] md:text-[3rem] lg:text-[3.4rem] font-bold text-zinc-900 leading-[1.08] tracking-tight"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              {meta.title}
            </motion.h1>

            {/* Excerpt */}
            <motion.p
              initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mt-5 text-[1.05rem] md:text-[1.15rem] leading-[1.7] text-zinc-600 max-w-[640px]"
            >
              {meta.excerpt}
            </motion.p>

            {/* Meta strip */}
            <motion.div
              initial={{ opacity: 0 }} animate={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.18 }}
              className="mt-7 pt-5 border-t border-zinc-200/70 flex flex-wrap items-center gap-x-6 gap-y-2 text-[12.5px] text-zinc-500"
            >
              <span className="inline-flex items-center gap-1.5">
                <User className="w-3.5 h-3.5" />
                <span className="text-zinc-800 font-medium">{meta.author}</span>
                <span className="text-zinc-400">·&nbsp;{meta.authorRole}</span>
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5" />
                {meta.date}
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5" />
                {meta.readMinutes} min read
              </span>
            </motion.div>
          </div>
        </header>

        {/* ── Article body ────────────────────────────────────── */}
        <article className="relative pb-16 pt-12 md:pt-14">
          <div className="max-w-3xl mx-auto px-5 md:px-8">
            <div
              className="prose prose-zinc max-w-none
                prose-headings:font-bold prose-headings:tracking-tight
                prose-h2:text-[1.7rem] md:prose-h2:text-[2rem] prose-h2:mt-14 prose-h2:mb-5 prose-h2:text-zinc-900 prose-h2:leading-tight
                prose-h3:text-[1.25rem] md:prose-h3:text-[1.4rem] prose-h3:mt-9 prose-h3:mb-3 prose-h3:text-zinc-900
                prose-p:text-[1.0625rem] prose-p:leading-[1.78] prose-p:text-zinc-700 prose-p:mb-5
                prose-li:text-[1.0625rem] prose-li:leading-[1.7] prose-li:text-zinc-700 prose-li:mb-1.5
                prose-ul:my-5 prose-ol:my-5 prose-ul:pl-5 prose-ol:pl-5
                prose-ul:marker:text-[#0891b2]
                prose-strong:text-zinc-900 prose-strong:font-semibold
                prose-em:text-zinc-800
                prose-a:text-[#0891b2] prose-a:no-underline hover:prose-a:underline prose-a:font-medium
                prose-blockquote:border-l-2 prose-blockquote:border-[#0891b2] prose-blockquote:pl-5
                prose-blockquote:text-zinc-700 prose-blockquote:italic prose-blockquote:my-7 prose-blockquote:not-italic
                prose-code:text-[#0e7490] prose-code:bg-zinc-100 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded
                prose-code:before:content-none prose-code:after:content-none prose-code:font-medium
                prose-hr:border-zinc-200 prose-hr:my-12
                prose-table:text-[14.5px] prose-th:text-zinc-900 prose-th:font-semibold
                prose-th:border-zinc-200 prose-td:border-zinc-200 prose-td:text-zinc-700
                prose-img:rounded-xl prose-img:border prose-img:border-zinc-200
              "
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              {children}
            </div>
          </div>
        </article>

        {/* ── Final CTA card ─────────────────────────────────── */}
        <section className="pb-16 md:pb-24">
          <div className="max-w-3xl mx-auto px-5 md:px-8">
            <div
              className="relative rounded-2xl overflow-hidden p-8 md:p-10 border"
              style={{
                background: `linear-gradient(135deg, #ecfeff 0%, #f0fdf4 100%)`,
                borderColor: "#a5f3fc",
              }}
            >
              <div
                className="absolute top-0 left-0 right-0 h-px"
                style={{ background: `linear-gradient(90deg, transparent, ${CYAN}, ${EMERALD}, transparent)` }}
              />
              <div className="flex flex-col md:flex-row md:items-center gap-6 md:gap-8">
                <div className="flex-1">
                  <p
                    className="text-[11px] font-bold tracking-[0.2em] uppercase mb-2"
                    style={{ color: CYAN, fontFamily: "'Space Grotesk', sans-serif" }}
                  >
                    Ready to plug your funnel?
                  </p>
                  <h3
                    className="text-[1.5rem] md:text-[1.75rem] font-bold text-zinc-900 leading-tight tracking-tight"
                    style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                  >
                    Get a free Pipeline Audit and see exactly where your money leaks.
                  </h3>
                  <p className="mt-2 text-[14.5px] text-zinc-600 leading-relaxed">
                    30-minute call · no pitch deck · concrete fixes you can apply this week.
                  </p>
                </div>
                <Link
                  href="/book-audit"
                  className="group inline-flex items-center justify-center gap-2 px-6 py-3.5 font-semibold text-[15px] rounded-xl transition-all duration-200 active:scale-[0.98] flex-shrink-0"
                  style={{
                    background: `linear-gradient(135deg, ${CYAN} 0%, #22d3ee 100%)`,
                    color: "#ffffff",
                    boxShadow: `0 0 28px ${CYAN}33, 0 4px 24px rgba(8,145,178,0.18)`,
                    fontFamily: "'Space Grotesk', sans-serif",
                  }}
                  data-testid="link-cta-blog-footer"
                >
                  Book Free Audit
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ── Related posts ──────────────────────────────────── */}
        {related.length > 0 && (
          <section className="pb-20 md:pb-28 bg-zinc-50 border-t border-zinc-100 pt-16 md:pt-20">
            <div className="max-w-5xl mx-auto px-5 md:px-8">
              <h4
                className="text-[12px] font-bold tracking-[0.22em] uppercase text-zinc-500 mb-6"
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              >
                Continue Reading
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {related.map((p) => (
                  <Link
                    key={p.slug}
                    href={`/blog/${p.slug}`}
                    className="group block rounded-xl border border-zinc-200 hover:border-[#0891b2]/50 bg-white hover:shadow-md p-5 transition-all"
                    data-testid={`link-related-${p.slug}`}
                  >
                    <span
                      className="text-[10px] font-bold tracking-[0.18em] uppercase"
                      style={{ color: CYAN }}
                    >
                      {p.category}
                    </span>
                    <h5
                      className="mt-2 text-[15.5px] font-semibold text-zinc-900 leading-snug tracking-tight group-hover:text-[#0891b2] transition-colors"
                      style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                    >
                      {p.title}
                    </h5>
                    <p className="mt-2 text-[13px] text-zinc-600 leading-relaxed line-clamp-2">
                      {p.excerpt}
                    </p>
                    <div className="mt-3 text-[11px] text-zinc-400">
                      {p.readMinutes} min read
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}
      </main>

      <Footer />
    </div>
  );
}
