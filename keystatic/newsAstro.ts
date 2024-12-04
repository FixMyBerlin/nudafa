import { defineCollection, z } from 'astro:content'

export const astroNewsDefinition = defineCollection({
  type: 'content',
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      teaserImage: image(),
    }),
})
