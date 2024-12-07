import { collection, fields } from '@keystatic/core'
import { defineCollection, z } from 'astro:content'

export const astroMeasuretypesDefinition = defineCollection({
  type: 'data',
  schema: () =>
    z.object({
      title: z.string(),
    }),
})

export const keystaticMeasuretypesConfig = collection({
  label: 'Maßnahmenart',
  format: 'yaml',
  slugField: 'title',
  path: 'src/content/measuretypes/*',
  schema: {
    title: fields.slug({
      name: { label: 'Title' },
      slug: {
        description:
          'Bitte keine Änderungen nach initialem Speichern. Keine Großbuchstaben, Umlaute, Sonderzeichen oder Leerzeichen.',
        label: 'Dateiname / URL-Teil',
        validation: { length: { min: 1, max: 80 } },
      },
    }),
  },
})
