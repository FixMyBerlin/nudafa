import { fields, singleton } from '@keystatic/core'
import { mdxComponentsKeystatic } from './components/mdxComponentsKeystatic'

export const keystaticBookPageConfig = singleton({
  entryLayout: 'content',
  label: 'Buch-Seite',
  format: { contentField: 'content' },
  path: 'src/content/bookpage/',
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
      components: mdxComponentsKeystatic('bookpage'),
      options: { image: false },
    }),
  },
})
