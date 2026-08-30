import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      /** One line for the card. */
      summary: z.string(),
      /** Your role on this project. */
      role: z.string(),
      /** "2023 — 2024" or "2024". */
      period: z.string(),
      /** Ordered list of technologies — also used for the filter chips. */
      stack: z.array(z.string()),
      /** 1–3 headline outcomes, ideally with a number. */
      impact: z.array(z.string()).default([]),
      cover: image(),
      coverAlt: z.string(),
      /** Contain (logos) vs cover (screenshots). */
      coverFit: z.enum(['contain', 'cover']).default('contain'),
      links: z
        .array(z.object({ label: z.string(), url: z.string().url() }))
        .default([]),
      featured: z.boolean().default(true),
      /** Lower = earlier. */
      order: z.number().default(100),
      draft: z.boolean().default(false),
    }),
});

export const collections = { projects };
