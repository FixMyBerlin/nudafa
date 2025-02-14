import { fields, singleton } from '@keystatic/core'

export const keystaticImprintPageConfig = singleton({
  entryLayout: 'content',
  label: 'Impressum',
  format: { contentField: 'content' },
  path: 'src/content/imprintpage/',
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
    }),
  },
})
