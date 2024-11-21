import { fields, singleton } from '@keystatic/core'
import { defineCollection, z } from 'astro:content'
import { mdxComponentsKeystatic } from './mdxComponents'

export const astroPartnerCommunesPageDefinition = defineCollection({
  type: 'content',
  schema: () =>
    z.object({
      title: z.string(),
      subTitle: z.string(),
    }),
})

export const keystaticPartnerCommunesPageConfig = singleton({
  entryLayout: 'content',
  label: 'Partnerkommunen-Seite',
  format: { contentField: 'content' },
  path: 'src/content/partnercommunespage/',
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
          directory: 'src/assets/partnercommunespage',
          publicPath: '/src/assets/partnercommunespage',
        },
      },
      components: mdxComponentsKeystatic('partnercommunespage'),
    }),
  },
})
