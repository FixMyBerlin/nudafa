import { defineCollection, z } from 'astro:content'

export const astroMeasuretypesDefinition = defineCollection({
  type: 'data',
  schema: () =>
    z.object({
      title: z.string(),
    }),
})
