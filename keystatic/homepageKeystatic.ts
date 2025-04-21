import { fields, singleton } from '@keystatic/core'
import { mdxComponentsKeystatic } from './components/mdxComponentsKeystatic'

export const contentBaseHomepageintro = '/src/content/homepageintro/'
export const HomepageIntroKeystatic = singleton({
  entryLayout: 'content',
  label: 'Homepage Einführung (Über Teilprojekte-Teasern)',
  format: { contentField: 'content' },
  path: contentBaseHomepageintro,
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
      components: mdxComponentsKeystatic('homepage'),
      options: { image: false },
    }),
  },
})

export const contentBaseHomepagemain = '/src/content/homepagemain/'
export const HomepageMainKeystatic = singleton({
  entryLayout: 'content',
  label: 'Homepage Hauptteil (Unter Teilprojekte-Teasern)',
  format: { contentField: 'content' },
  path: contentBaseHomepagemain,
  schema: {
    content: fields.mdx({
      label: 'Content',
      components: mdxComponentsKeystatic('homepage'),
      options: { image: false },
    }),
  },
})
