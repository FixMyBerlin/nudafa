import { collection, fields } from '@keystatic/core'
import { keystaticTextLinkArrowConfig } from './components/TextLinkArrow/keystatic.TextLinkArrow.config'

export const bicyclenetworkpagesKeystatic = collection({
  label: 'Radnetz Seiten',
  entryLayout: 'content',
  slugField: 'menu',
  path: 'src/content/bicyclenetworkpages/*',
  format: { contentField: 'content' },
  columns: ['order', 'title'],
  schema: {
    menu: fields.slug({
      name: { label: 'Menüpunkt', validation: { length: { min: 1, max: 25 } } },
      slug: {
        description:
          'Bitte keine Änderungen nach initialem Speichern. Keine Großbuchstaben, Umlaute, Sonderzeichen oder Leerzeichen.',
        label: 'Dateiname / URL-Teil',
        validation: { length: { min: 1, max: 80 } },
      },
    }),
    order: fields.number({
      label: 'Reihenfolge im Menü',
      validation: { isRequired: true, min: 0 },
    }),
    title: fields.text({
      label: 'Title',
      validation: { length: { min: 1, max: 80 } },
    }),
    sources: fields.text({
      label: 'Quelle(n)',
      validation: { length: { max: 200 } },
    }),
    content: fields.mdx({
      label: 'Content',
      options: { image: false },
      components: { TextLinkArrow: keystaticTextLinkArrowConfig },
    }),
    links: fields.array(
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
        label: 'Weiterführende Links',
        itemLabel: (props) => props.fields.display.value || 'Link',
      },
    ),
  },
})
