import { useEffect } from "react";
import { useRoute, useLocation } from "wouter";
import BlogPostLayout from "@/components/BlogPostLayout";
import { getPostBySlug, getRelatedPosts } from "@/blog/posts";
import NotFound from "./not-found";

export default function BlogPostPage() {
  const [, params] = useRoute("/blog/:slug");
  const [, setLocation] = useLocation();
  const slug = params?.slug ?? "";
  const post = getPostBySlug(slug);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, [slug]);

  useEffect(() => {
    if (post) {
      const prev = document.title;
      document.title = `${post.meta.title} — Alpine Marketing`;
      return () => { document.title = prev; };
    }
  }, [post]);

  if (!post) return <NotFound />;

  const { Content, meta } = post;
  const related = getRelatedPosts(meta.slug);

  return (
    <BlogPostLayout meta={meta} related={related}>
      <Content />
    </BlogPostLayout>
  );
}
