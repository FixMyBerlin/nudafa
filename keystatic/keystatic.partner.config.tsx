import { fields, singleton } from '@keystatic/core'
import { defineCollection, z } from 'astro:content'
import { mdxComponentsKeystatic } from './components/mdxComponentsKeystatic'

export const astroProjectPartnerPageIntroDefinition = defineCollection({
  type: 'content',
  schema: () =>
    z.object({
      title: z.string(),
      subTitle: z.string(),
    }),
})

export const keystaticProjectPartnerPageIntroConfig = singleton({
  entryLayout: 'content',
  label: 'Über uns-Seite Einführung',
  format: { contentField: 'content' },
  path: 'src/content/projectpartnerpageintro/',
  schema: {
    title: fields.text({
      label: 'Überschrift',
      validation: { length: { min: 1, max: 80 } },
    }),
    subTitle: fields.text({
      label: 'Unterüberschrift',
      validation: { length: { max: 160 } },
    }),
    content: fields.mdx({
      label: 'Content',
      options: { image: false },
      components: mdxComponentsKeystatic('projectpartnerpage'),
    }),
  },
})

export const astroProjectPartnerPageMainDefinition = defineCollection({
  type: 'content',
  schema: () => z.object({}),
})

export const keystaticProjectPartnerPageMainConfig = singleton({
  entryLayout: 'content',
  label: 'Über uns-Seite Hauptteil',
  format: { contentField: 'content' },
  path: 'src/content/projectpartnerpagemain/',
  schema: {
    content: fields.mdx({
      label: 'Content',
      options: { image: false },
      components: mdxComponentsKeystatic('projectpartnerpage'),
    }),
  },
})
