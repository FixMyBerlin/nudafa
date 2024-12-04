import { defineCollection, z } from 'astro:content'
import {
  contentBaseSubprojectAndMearuetopics,
  contentBaseSubprojectCommunes,
  contentBaseSubprojectPartners,
  contentBaseSubprojects,
} from './subprojectsKeystatic'
import { loader } from './utils/loader'

export const astroSubprojectsDefinition = defineCollection({
  loader: loader(contentBaseSubprojects, 'mdx'),
  schema: ({ image }) =>
    z.object({
      teaserImage: image(),
      teaserImageCopyright: z.string().optional(),
      title: z.string(),
      subTitle: z.string().optional(),
      teaser: z.string().optional(),
      showBig: z.boolean(),
      isPublic: z.boolean(),
      topics: z.array(z.string()),
      start: z.date(),
      end: z.date().optional(),
      funding: z.string().optional(),
      projectCommunes: z.array(z.string()),
      projectPartners: z.array(z.string()),
    }),
})

export const astroSubprojectAndMeasureTopicsDefinition = defineCollection({
  loader: loader(contentBaseSubprojectAndMearuetopics, 'yaml'),
  schema: () =>
    z.object({
      title: z.string(),
    }),
})

export const astroSubprojectCommunesDefinition = defineCollection({
  loader: loader(contentBaseSubprojectCommunes, 'mdx'),
  schema: ({ image }) =>
    z.object({
      name: z.string(),
      order: z.number(),
      showInFooter: z.boolean().optional(),
      color: z.string(),
      image: image(),
      website: z.string(),
    }),
})

export const astroSubprojectPartnersDefinition = defineCollection({
  loader: loader(contentBaseSubprojectPartners, 'mdx'),
  schema: () =>
    z.object({
      name: z.string(),
      color: z.string(),
    }),
})
