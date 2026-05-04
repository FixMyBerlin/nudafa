import { defineCollection, z } from 'astro:content'

export const astroClosingEventPageDefinition = defineCollection({
  type: 'content',
  schema: () =>
    z.object({
      title: z.string(),
      subTitle: z.string().optional(),
    }),
})
