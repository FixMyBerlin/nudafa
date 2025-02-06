import { collection, fields } from '@keystatic/core'

export const keystaticMeasuretypesConfig = collection({
  label: 'Maßnahmenart',
  format: 'yaml',
  slugField: 'title',
  path: 'src/content/measuretypes/*',
  columns: ['title'],
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
