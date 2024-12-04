import { fields, singleton } from '@keystatic/core'
import { mdxComponentsKeystatic } from './components/mdxComponentsKeystatic'

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
