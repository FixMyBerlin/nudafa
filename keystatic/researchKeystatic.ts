import { fields, singleton } from '@keystatic/core'
import { mdxComponentsKeystatic } from './components/mdxComponentsKeystatic'

export const keystaticResearchPageConfig = singleton({
  entryLayout: 'content',
  label: 'Begleitforschung-Seite',
  format: { contentField: 'content' },
  path: 'src/content/researchpage/',
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
      components: mdxComponentsKeystatic('researchpage'),
      options: { image: false },
    }),
  },
})
