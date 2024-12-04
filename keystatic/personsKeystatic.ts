import { collection, fields } from '@keystatic/core'

export const keystaticPersonsConfig = collection({
  label: 'Personen',
  path: 'src/content/persons/*',
  format: {
    contentField: 'emptyContent',
  },
  slugField: 'name',
  schema: {
    name: fields.slug({
      name: {
        label: 'Name',
        validation: { length: { min: 1, max: 500 } },
      },
      slug: {
        description:
          'Bitte keine Änderungen nach initialem Speichern. Keine Großbuchstaben, Umlaute, Sonderzeichen oder Leerzeichen.',
        label: 'Dateiname / URL-Teil',
        validation: { length: { min: 1, max: 80 } },
      },
    }),
    firstName: fields.text({
      label: 'Vorname',
      validation: { length: { min: 1, max: 500 } },
    }),
    personImage: fields.image({
      label: 'Bild',
      description: 'Bild bitte im Format 1:1 hochladen.',
      directory: 'src/assets/persons',
      publicPath: '../../assets/persons',
      validation: { isRequired: true },
    }),
    institution: fields.relationship({
      label: 'Institution',
      collection: 'communes',
    }),
    position: fields.text({
      label: 'Position',
      validation: { length: { min: 1, max: 500 } },
    }),
    email: fields.text({ label: 'Email' }),
    emptyContent: fields.emptyContent({ extension: 'mdx' }),
  },
})
