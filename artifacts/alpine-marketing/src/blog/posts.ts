import type { BlogPost, BlogPostMeta } from "./types";
import SalesforceTrueCost, {
  meta as salesforceTrueCostMeta,
} from "./posts/salesforce-true-cost";

/**
 * Registry of all blog posts.
 *
 * To publish a new post:
 *   1. Create `src/blog/posts/<slug>.tsx`
 *   2. Export a `meta: BlogPostMeta` and a default `Post` component
 *   3. Import and add it to the `POSTS` array below (newest first)
 *
 * The post will automatically appear on /blog and at /blog/<slug>.
 */
export const POSTS: BlogPost[] = [
  { meta: salesforceTrueCostMeta, Content: SalesforceTrueCost },
];

export const POSTS_META: BlogPostMeta[] = POSTS.map((p) => p.meta);

export function getPostBySlug(slug: string): BlogPost | undefined {
  return POSTS.find((p) => p.meta.slug === slug);
}

export function getRelatedPosts(slug: string, limit = 3): BlogPostMeta[] {
  const current = getPostBySlug(slug);
  if (!current) return POSTS_META.slice(0, limit);
  return POSTS_META
    .filter((p) => p.slug !== slug)
    .sort((a, b) => {
      const aSameCat = a.category === current.meta.category ? 1 : 0;
      const bSameCat = b.category === current.meta.category ? 1 : 0;
      return bSameCat - aSameCat;
    })
    .slice(0, limit);
}
