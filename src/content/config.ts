// @ts-ignore
import { defineCollection, z } from 'astro:content'

const newsCollection = defineCollection({
  type: 'content',
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      teaserImage: image(),
    }),
})
const personsCollection = defineCollection({
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
const subprojectsCollection = defineCollection({
  type: 'content',
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
const communesCollection = defineCollection({
  type: 'content',
  schema: ({ image }) =>
    z.object({
      image: image(),
      order: z.number(),
      name: z.string(),
      website: z.string().optional(),
      color: z.string().optional(),
      showInFooter: z.boolean().optional(),
    }),
})
const bicyclenetworkpagesCollection = defineCollection({
  type: 'content',
  schema: () =>
    z.object({
      menu: z.string(),
      title: z.string(),
      sources: z.string().optional(),
      order: z.number(),
      links: z.array(z.object({ url: z.string(), display: z.string() })).optional(),
    }),
})
const measuresCollection = defineCollection({
  type: 'content',
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      location: z.string().nullish(),
      problem: z.string().nullish(),
      type: z.string().optional(),
      nudafa_id: z.string(),
      geometry: z.any(),
      topics: z.array(z.string()).optional(),
      project_hidden: z.string().nullish(),
      complexity_level: z.string().nullish(),
      status: z.string(),
      urgency: z.string().nullish(),
      start: z.union([z.date(), z.string()]).nullish(),
      deadline: z.union([z.date(), z.string()]).nullish(),
      deadline_hidden: z.string().nullish(),
      length: z.number().nullish(),
      costs_amount: z.number().nullish(),
      costs_remarks: z.string().nullish(),
      funding_quota: z.number().nullish(),
      admin_authority: z.array(z.string()).optional(),
      stakeholders: z.string().nullish(),
      town: z.string(),
      image: image().optional(),
      imageCopyright: z.string().optional(),
    }),
})
const measuretownsCollection = defineCollection({
  type: 'content',
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      image: image(),
      imageCopyright: z.string(),
      urgency: z.boolean().optional(),
    }),
})

export const collections = {
  news: newsCollection,
  persons: personsCollection,
  subprojects: subprojectsCollection,
  communes: communesCollection,
  bicyclenetworkpages: bicyclenetworkpagesCollection,
  measures: measuresCollection,
  measuretowns: measuretownsCollection,
}
