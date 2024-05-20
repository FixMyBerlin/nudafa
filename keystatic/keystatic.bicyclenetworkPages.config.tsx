import { collection, fields } from '@keystatic/core'
import { keystaticTextLinkArrowConfig } from './utils/keystatic.TextLinkArrow.config'

export const keystaticBicyclenetworkPagesConfig = collection({
  label: 'Radnetz Seiten',
  slugField: 'title',
  path: 'src/content/bicyclenetworkpages/*',
  format: { contentField: 'content' },
  schema: {
    menu: fields.slug({
      name: { label: 'Menüpunkt', validation: { length: { min: 1, max: 25 } } },
    }),
    title: fields.text({
      label: 'Title',
      validation: { length: { min: 1, max: 80 } },
    }),
    content: fields.mdx({
      label: 'Content',
      components: { ...keystaticTextLinkArrowConfig },
    }),
  },
})
