import { defineCollection, z } from 'astro:content';

const postsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string().optional().default(''),
    publishDate: z.coerce.string(),
    category: z.string().optional().default('uncategorized'),
    tags: z.array(z.string()).optional().default([]),
    image: z.string().optional().default(''),
    author: z.string().optional().default('媽咪小編'),
  }),
});

export const collections = {
  posts: postsCollection,
};