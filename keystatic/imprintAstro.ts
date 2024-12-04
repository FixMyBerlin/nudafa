import { defineCollection, z } from 'astro:content'

export const astroImprintPageDefinition = defineCollection({
  type: 'content',
  schema: () =>
    z.object({
      title: z.string(),
      subTitle: z.string().optional(),
    }),
})
