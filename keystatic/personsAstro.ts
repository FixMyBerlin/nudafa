import { defineCollection, z } from 'astro:content'

export const astroPersonsDefinition = defineCollection({
  type: 'content',
  schema: ({ image }) =>
    z.object({
      personImage: image(),
      name: z.string(),
      firstName: z.string(),
      position: z.string(),
      email: z.string().optional(),
      institution: z.string().optional(),
    }),
})
