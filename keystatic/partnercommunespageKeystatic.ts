import { fields, singleton } from '@keystatic/core'
import { mdxComponentsKeystatic } from './components/mdxComponentsKeystatic'

const basePath = 'src/content/partnercommunespage/'
export const keystaticPartnerCommunesPageConfig = singleton({
  entryLayout: 'content',
  label: 'Partnerkommunen-Seite',
  format: { contentField: 'content' },
  path: `${basePath}/`,
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
      components: mdxComponentsKeystatic('partnercommunespage'),
      options: { image: false },
    }),
  },
})
