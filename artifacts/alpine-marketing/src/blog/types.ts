import type { ComponentType } from "react";

export type BlogCategory =
  | "Performance Marketing"
  | "CRM & Automation"
  | "Funnel Strategy"
  | "AI & Tech"
  | "Case Study"
  | "Guide";

export interface BlogPostMeta {
  slug: string;
  title: string;
  excerpt: string;
  category: BlogCategory;
  author: string;
  authorRole: string;
  date: string;
  readMinutes: number;
  tags?: string[];
}

export interface BlogPost {
  meta: BlogPostMeta;
  Content: ComponentType;
}
