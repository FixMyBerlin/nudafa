import { defineCollection, z } from 'astro:content'

export const astroPressPageDefinition = defineCollection({
  type: 'content',
  schema: () =>
    z.object({
      title: z.string(),
      subTitle: z.string(),
      mediaLinks: z.array(z.object({ url: z.string(), display: z.string() })),
    }),
})
