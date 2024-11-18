import { collection, fields } from '@keystatic/core'
import { defineCollection, z } from 'astro:content'

export const astroMeasuretownsDefinition = defineCollection({
  type: 'content',
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      image: image(),
      imageCopyright: z.string(),
      urgency: z.boolean().optional(),
    }),
})

export const keystaticMeasuretownsConfig = collection({
  label: 'Kommunen (Dashboards)',
  slugField: 'title',
  path: 'src/content/measuretowns/*',
  format: { contentField: 'content' },
  schema: {
    title: fields.slug({
      name: {
        label: 'Titel',
        validation: { length: { min: 1, max: 80 } },
      },
      slug: {
        description: 'Bitte keine Änderungen!',
        label: 'Dateiname / URL-Teil',
        validation: { length: { min: 1, max: 80 } },
      },
    }),
    image: fields.image({
      label: 'Bild',
      validation: { isRequired: true },
      description:
        'Bild bitte im Format 4:3 (quer) hochladen bzw. wird dementsprechend beschnitten.',
      directory: 'src/assets/measuretowns',
      publicPath: '/src/assets/measuretowns',
    }),
    imageCopyright: fields.text({
      label: 'Copyright Bild',
      validation: { length: { min: 1, max: 100 } },
    }),
    content: fields.mdx({
      label: 'Beschreibung',
      options: {
        image: {
          directory: 'src/assets/images/measuretowns',
          publicPath: '/src/assets/images/measuretowns/',
        },
      },
    }),
  },
})
