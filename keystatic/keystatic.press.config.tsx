import { fields, singleton } from '@keystatic/core'
import { defineCollection, z } from 'astro:content'
import { mdxComponentsKeystatic } from './mdxComponents'

export const astroPressPageDefinition = defineCollection({
  type: 'content',
  schema: () =>
    z.object({
      title: z.string(),
      subTitle: z.string(),
      mediaLinks: z.array(z.object({ url: z.string(), display: z.string() })),
    }),
})

export const keystaticPressPageConfig = singleton({
  entryLayout: 'content',
  label: 'Presse-Seite',
  format: { contentField: 'content' },
  path: 'src/content/presspage/',
  schema: {
    title: fields.text({
      label: 'Überschrift',
      validation: { length: { min: 1, max: 80 } },
    }),
    subTitle: fields.text({
      label: 'Unterüberschrift',
      validation: { length: { max: 160 } },
    }),
    mediaLinks: fields.array(
      fields.object({
        url: fields.url({
          label: 'Link URL',
          validation: { isRequired: true },
        }),
        display: fields.text({
          label: 'Link-Beschriftung',
          validation: { length: { min: 1 } },
        }),
      }),
      {
        label: 'Liste Medienartikel',
        itemLabel: (props) => props.fields.display.value || 'Artikel',
      },
    ),
    content: fields.mdx({
      label: 'Content',
      options: { image: false },
      components: mdxComponentsKeystatic('presspage'),
    }),
  },
})
