import { collection, fields } from '@keystatic/core'
import { block, wrapper } from '@keystatic/core/content-components'
import { defineCollection, z } from 'astro:content'

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
      components: {
        Testimonial: wrapper({
          label: 'Testimonial',
          schema: {
            author: fields.text({ label: 'Author' }),
            role: fields.text({ label: 'Role' }),
          },
        }),
        Container: wrapper({
          label: 'Container',
          schema: {
            crop: fields.select({
              label: 'Crop',
              description: 'Max width container and options',
              options: [
                { label: 'normal', value: 'normal' },
                { label: 'narrow', value: 'narrow' },
                { label: 'narrower', value: 'narrower' },
                { label: 'bleed', value: 'bleed' },
                { label: 'boxed', value: 'boxed' },
                { label: 'narrow-boxed', value: 'narrow-boxed' },
              ],
              defaultValue: 'normal',
            }),
          },
        }),
        Playlist: block({
          label: 'Playlist',
          schema: {
            id: fields.text({
              label: 'Playlist ID',
              validation: { length: { min: 1, max: 100 } },
            }),
          },
          // as we are using atsro we have to copy paste the whole component and have to keep it in sync manually
          // talwind does not work in the keysatic ui YET
          ContentView: (props) => (
            <h1
              style={{
                borderRadius: '9999px',
                backgroundColor: '#fecaca',
                padding: '1rem',
              }}
              className="rounded-full bg-red-200 p-4"
            >
              {props.value.id}
            </h1>
          ),
        }),
        ImageWithCaption: block({
          label: 'Bild mit Unterschrift',
          schema: {
            src: fields.image({
              label: 'Bild',
              directory: 'src/assets/news',
              publicPath: '/src/assets/news',
              validation: { isRequired: true },
            }),
            caption: fields.text({
              label: 'Bildunterschrift',
              validation: { length: { min: 1, max: 80 } },
            }),
            alt: fields.text({ label: 'Alt-Text' }),
          },
          // as we are using atsro we have to copy paste the whole component and have to keep it in sync manually
          // talwind does not work in the keysatic ui YET
          // Image Preview is not working yet so we have a default image here for now
          // TODO: Fix…
          // ContentView: contentViewImageDefault,
        }),
      },
    }),
  },
})
