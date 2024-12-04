import { defineCollection, z } from 'astro:content'

export const homepageIntroAstro = defineCollection({
  type: 'content',
  schema: () =>
    z.object({
      title: z.string(),
      subTitle: z.string(),
    }),
})

export const homepageMainAstro = defineCollection({
  type: 'content',
  schema: () => z.object({}),
})
