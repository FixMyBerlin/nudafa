import { defineCollection, z } from 'astro:content'
import { basePathIntro, basePathMain } from './projectpartnerpageKeystatic'
import { loader } from './utils/loader'

export const astroProjectPartnerPageIntroDefinition = defineCollection({
  loader: loader(basePathIntro, 'mdx'),
  schema: () =>
    z.object({
      title: z.string(),
      subTitle: z.string(),
    }),
})

export const astroProjectPartnerPageMainDefinition = defineCollection({
  loader: loader(basePathMain, 'mdx'),
  schema: () => z.object({}),
})
