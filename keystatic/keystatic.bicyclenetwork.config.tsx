import { collection, fields } from '@keystatic/core'
import { keystaticTextLinkArrowConfig } from './utils/keystatic.TextLinkArrow.config'

export const keystaticBicyclenetworkConfig = collection({
  label: 'Radnetz',
  slugField: 'title',
  path: 'src/content/bicyclenetwork/*',
  format: { contentField: 'content' },
  schema: {
    menu: fields.slug({
      name: { label: 'Menüpunkt', validation: { length: { min: 1, max: 25 } } },
    }),
    title: fields.slug({
      name: { label: 'Title', validation: { length: { min: 1, max: 80 } } },
    }),
    content: fields.mdx({
      label: 'Content',
      components: { ...keystaticTextLinkArrowConfig },
    }),
    topics: fields.multiRelationship({
      label: 'Themen',
      collection: 'bicyclenetworktopics',
    }),
  },
})
