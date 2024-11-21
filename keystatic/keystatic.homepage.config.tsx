import { fields, singleton } from '@keystatic/core'
import { defineCollection, z } from 'astro:content'
import { mdxComponentsKeystatic } from './mdxComponents'

export const astroHomepageIntroDefinition = defineCollection({
  type: 'content',
  schema: () =>
    z.object({
      title: z.string(),
      subTitle: z.string(),
    }),
})

export const keystaticHomepageIntroConfig = singleton({
  entryLayout: 'content',
  label: 'Homepage Einführung (Über Teilprojekte-Teasern)',
  format: { contentField: 'content' },
  path: 'src/content/homepageintro/',
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
      options: {
        image: {
          directory: 'src/assets/homepage',
          publicPath: '/src/assets/homepage',
        },
      },
      components: mdxComponentsKeystatic('homepage'),
    }),
  },
})

export const astroHomepageMainDefinition = defineCollection({
  type: 'content',
  schema: () => z.object({}),
})

export const keystaticHomepageMainConfig = singleton({
  entryLayout: 'content',
  label: 'Homepage Hauptteil (Unter Teilprojekte-Teasern)',
  format: { contentField: 'content' },
  path: 'src/content/homepagemain/',
  schema: {
    content: fields.mdx({
      label: 'Content',
      options: {
        image: {
          directory: 'src/assets/homepage',
          publicPath: '/src/assets/homepage',
        },
      },
      components: mdxComponentsKeystatic('homepage'),
    }),
  },
})
