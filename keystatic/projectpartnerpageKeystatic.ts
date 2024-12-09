import { fields, singleton } from '@keystatic/core'
import { mdxComponentsKeystatic } from './components/mdxComponentsKeystatic'

export const basePathIntro = 'src/content/projectpartnerpageintro/'
export const keystaticProjectPartnerPageIntroConfig = singleton({
  entryLayout: 'content',
  label: 'Über uns-Seite Einführung',
  format: { contentField: 'content' },
  path: basePathIntro,
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
      components: mdxComponentsKeystatic('projectpartnerpage'),
    }),
  },
})

export const basePathMain = 'src/content/projectpartnerpagemain/'
export const keystaticProjectPartnerPageMainConfig = singleton({
  entryLayout: 'content',
  label: 'Über uns-Seite Hauptteil',
  format: { contentField: 'content' },
  path: basePathMain,
  schema: {
    content: fields.mdx({
      label: 'Content',
      options: { image: false },
      components: mdxComponentsKeystatic('projectpartnerpage'),
    }),
  },
})
