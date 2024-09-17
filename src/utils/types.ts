// src/utils/types.ts
export interface Blog {
  id: string;
  title: string;
  content: string;
  slug: string;
  published: boolean;
  pageTitle: string;
  metaDescription: string;
  metaKeywords: string;
  createdAt: Date;
  updatedAt: Date;
}