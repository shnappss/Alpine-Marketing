import { useEffect } from "react";
import { useRoute, useLocation } from "wouter";
import { useTranslation } from "react-i18next";
import BlogPostLayout from "@/components/BlogPostLayout";
import { getPostBySlug, getRelatedPosts, getLocalizedPostMeta } from "@/blog/posts";
import NotFound from "./not-found";

export default function BlogPostPage() {
  const [, params] = useRoute("/blog/:slug");
  const [, setLocation] = useLocation();
  const { i18n } = useTranslation();
  const slug = params?.slug ?? "";
  const post = getPostBySlug(slug);
  const lang = i18n.resolvedLanguage;

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, [slug]);

  useEffect(() => {
    if (post) {
      const meta = getLocalizedPostMeta(post, lang);
      const prev = document.title;
      document.title = `${meta.title} — Alpine Marketing`;
      return () => { document.title = prev; };
    }
  }, [post, lang]);

  if (!post) return <NotFound />;

  const { Content } = post;
  const meta = getLocalizedPostMeta(post, lang);
  const related = getRelatedPosts(meta.slug, lang);

  return (
    <BlogPostLayout meta={meta} related={related}>
      <Content />
    </BlogPostLayout>
  );
}
