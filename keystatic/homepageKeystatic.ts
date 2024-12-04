import { fields, singleton } from '@keystatic/core'
import { mdxComponentsKeystatic } from './components/mdxComponentsKeystatic'

export const HomepageIntroKeystatic = singleton({
  entryLayout: 'content',
  label: 'Homepage Einführung (Über Teilprojekte-Teasern)',
  format: { contentField: 'content' },
  path: 'src/content/homepageintro/',
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
          directory: 'src/assets/homepage',
          publicPath: '/src/assets/homepage',
        },
      },
      components: mdxComponentsKeystatic('homepage'),
    }),
  },
})

export const HomepageMainKeystatic = singleton({
  entryLayout: 'content',
  label: 'Homepage Hauptteil (Unter Teilprojekte-Teasern)',
  format: { contentField: 'content' },
  path: 'src/content/homepagemain/',
  schema: {
    content: fields.mdx({
      label: 'Content',
      options: {
        image: {
          directory: 'src/assets/homepage',
          publicPath: '/src/assets/homepage',
        },
      },
      components: mdxComponentsKeystatic('homepage'),
    }),
  },
})
