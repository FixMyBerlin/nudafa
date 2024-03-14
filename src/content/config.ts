// @ts-ignore
import { defineCollection, z } from "astro:content";

const newsCollection = defineCollection({
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      teaserImage: image(),
    }),
});
const personsCollection = defineCollection({
  schema: ({ image }) =>
    z.object({
      personImage: image(),
      name: z.string(),
      firstName: z.string(),
      position: z.string(),
      email: z.string().optional(),
      institution: z.string().optional(),
    }),
});
const subprojectsCollection = defineCollection({
  schema: ({ image }) =>
    z.object({
      teaserImage: image(),
      title: z.string(),
      subTitle: z.string().optional(),
      teaser: z.string().optional(),
      showBig: z.boolean(),
      topics: z.array(z.string()),
      partners: z.array(z.string()),
      start: z.date(),
      end: z.date().optional(),
      funding: z.string().optional(),
    }),
});
const communesCollection = defineCollection({
  schema: ({ image }) =>
    z.object({
      image: image(),
      name: z.string(),
      website: z.string().optional(),
    }),
});

export const collections = {
  communes: communesCollection,
  news: newsCollection,
  persons: personsCollection,
  subprojects: subprojectsCollection,
};
