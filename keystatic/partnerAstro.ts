import { defineCollection, z } from 'astro:content'

export const astroProjectPartnerPageIntroDefinition = defineCollection({
  type: 'content',
  schema: () =>
    z.object({
      title: z.string(),
      subTitle: z.string(),
    }),
})

export const astroProjectPartnerPageMainDefinition = defineCollection({
  type: 'content',
  schema: () => z.object({}),
})
