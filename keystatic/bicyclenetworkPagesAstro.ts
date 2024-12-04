import { defineCollection, z } from 'astro:content'

export const astroBicyclenetworkpagesDefinition = defineCollection({
  type: 'content',
  schema: () =>
    z.object({
      menu: z.string(),
      order: z.number(),
      title: z.string(),
      sources: z.string().optional(),
      links: z.array(z.object({ url: z.string(), display: z.string() })).optional(),
    }),
})
