import { defineCollection, z } from 'astro:content'
import { contentBaseMeasures } from './measuresKeystatic'
import { loader } from './utils/loader'

export const astroMeasuresDefinition = defineCollection({
  loader: loader(contentBaseMeasures, 'mdx'),
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
