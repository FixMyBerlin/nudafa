import { defineCollection, z } from 'astro:content'
import { contentBaseHomepageintro, contentBaseHomepagemain } from './homepageKeystatic'
import { loader } from './utils/loader'

export const homepageIntroAstro = defineCollection({
  loader: loader(contentBaseHomepageintro, 'mdx'),
  schema: () =>
    z.object({
      title: z.string(),
      subTitle: z.string(),
    }),
})

export const homepageMainAstro = defineCollection({
  loader: loader(contentBaseHomepagemain, 'mdx'),
  schema: () => z.object({}),
})
