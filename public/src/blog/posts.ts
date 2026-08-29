import type { BlogPost, BlogPostMeta } from "./types";
import DentalPatients2026, {
  meta as dentalPatients2026Meta,
  getLocalizedMeta as dentalPatients2026LocalizedMeta,
} from "./posts/dental-patients-2026";

export const POSTS: BlogPost[] = [
  {
    meta: dentalPatients2026Meta,
    Content: DentalPatients2026,
    getLocalizedMeta: dentalPatients2026LocalizedMeta,
  },
];

export const POSTS_META: BlogPostMeta[] = POSTS.map((p) => p.meta);

export function getPostBySlug(slug: string): BlogPost | undefined {
  return POSTS.find((p) => p.meta.slug === slug);
}

export function getPostsMeta(lang: string | undefined): BlogPostMeta[] {
  return POSTS.map((p) => (p.getLocalizedMeta ? p.getLocalizedMeta(lang) : p.meta));
}

export function getLocalizedPostMeta(post: BlogPost, lang: string | undefined): BlogPostMeta {
  return post.getLocalizedMeta ? post.getLocalizedMeta(lang) : post.meta;
}

export function getRelatedPosts(slug: string, lang: string | undefined, limit = 3): BlogPostMeta[] {
  const current = getPostBySlug(slug);
  const all = getPostsMeta(lang);
  if (!current) return all.slice(0, limit);
  const currentMeta = getLocalizedPostMeta(current, lang);
  return all
    .filter((p) => p.slug !== slug)
    .sort((a, b) => {
      const aSameCat = a.category === currentMeta.category ? 1 : 0;
      const bSameCat = b.category === currentMeta.category ? 1 : 0;
      return bSameCat - aSameCat;
    })
    .slice(0, limit);
}
