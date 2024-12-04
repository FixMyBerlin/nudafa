import { defineCollection, z } from 'astro:content'

export const astroSubprojectsDefinition = defineCollection({
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

export const astroSubprojectAndMeasureTopicsDefinition = defineCollection({
  type: 'data',
  schema: () =>
    z.object({
      title: z.string(),
    }),
})

export const astroSubprojectCommunesDefinition = defineCollection({
  type: 'content',
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
  type: 'content',
  schema: () =>
    z.object({
      name: z.string(),
      color: z.string(),
    }),
})
