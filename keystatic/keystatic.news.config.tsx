import { collection, fields } from '@keystatic/core'
import { defineCollection, z } from 'astro:content'
import { mdxComponentsKeystatic } from './components/mdxComponentsKeystatic'

export const astroNewsDefinition = defineCollection({
  type: 'content',
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      teaserImage: image(),
    }),
})

export const keystaticNewsConfig = collection({
  label: 'News',
  slugField: 'title',
  path: 'src/content/news/*',
  format: { contentField: 'content' },
  schema: {
    title: fields.slug({ name: { label: 'Title' } }),
    teaserImage: fields.image({
      label: 'Teaser Bild',
      directory: 'src/assets/news',
      publicPath: '/src/assets/news',
    }),
    content: fields.mdx({
      label: 'Rich text',
      components: mdxComponentsKeystatic('news'),
    }),
  },
})
