import { fields, singleton } from '@keystatic/core'
import { mdxComponentsKeystatic } from './components/mdxComponentsKeystatic'

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
      components: mdxComponentsKeystatic('presspage'),
      options: { image: false },
    }),
  },
})
