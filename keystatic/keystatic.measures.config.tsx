import {
  complexityLevelOptions,
  measureAdminAuthorityOptions,
  measureTownOptions,
} from '@components/page_massnahmen/measureOptions.const'
import { collection, fields } from '@keystatic/core'
import { defineCollection, z } from 'astro:content'
import { mdxComponentsKeystatic } from './components/mdxComponentsKeystatic'

export const astroMeasuresDefinition = defineCollection({
  type: 'content',
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      location: z.string().nullish(),
      problem: z.string().nullish(),
      type: z.string().optional(),
      nudafa_id: z.string(),
      geometry: z.any(),
      topics: z.array(z.string()).optional(),
      project_hidden: z.string().nullish(),
      complexity_level: z.string().nullish(),
      status: z.string(),
      urgency: z.string().nullish(),
      start: z.union([z.date(), z.string()]).nullish(),
      deadline: z.union([z.date(), z.string()]).nullish(),
      deadline_hidden: z.string().nullish(),
      length: z.number().nullish(),
      costs_amount: z.number().nullish(),
      costs_remarks: z.string().nullish(),
      funding_quota: z.number().nullish(),
      admin_authority: z.array(z.string()).optional(),
      stakeholders: z.string().nullish(),
      town: z.string(),
      image: image().optional(),
      imageCopyright: z.string().optional(),
    }),
})

export const keystaticMeasuresConfig = collection({
  label: 'Maßnahmen',
  slugField: 'title',
  path: 'src/content/measures/*',
  format: { contentField: 'content' },
  schema: {
    title: fields.slug({
      name: {
        label: 'Titel',
        validation: { length: { min: 1, max: 80 } },
      },
      slug: {
        description:
          'Bitte keine Änderungen nach initialem Speichern. Keine Großbuchstaben, Umlaute, Sonderzeichen oder Leerzeichen.',
        label: 'Dateiname / URL-Teil',
        validation: { length: { min: 1, max: 80 } },
      },
    }),
    nudafa_id: fields.text({
      label: 'Nudafa-ID',
      // todo ggf validation function --> slugify regex
      validation: { length: { min: 1, max: 80 } },
    }),
    geometry: fields.checkbox({
      label: 'Geometrie vorhanden',
      defaultValue: false,
    }),
    location: fields.text({
      label: 'Ort / Straße',
    }),
    problem: fields.text({
      label: 'Problem',
    }),
    topics: fields.multiRelationship({
      label: 'Themen/Typ',
      collection: 'subprojectstopics',
    }),
    project_hidden: fields.text({
      label: 'Notiz zum Projekt (nicht öffentlich)',
    }),
    complexity_level: fields.select({
      label: 'Komplexitätsstufe',
      options: complexityLevelOptions,
      defaultValue: '',
    }),
    status: fields.select({
      label: 'Status',
      options: [
        { label: 'Idee', value: 'idee' },
        { label: 'in Vorbereitung', value: 'in-vorbereitung' },
        { label: 'in Planung', value: 'in-planung' },
        { label: 'in Umsetzung', value: 'in-umsetzung' },
        { label: 'abgeschlossen', value: 'abgeschlossen' },
        { label: 'zurückgestellt', value: 'zurueckgestellt' },
        { label: 'archiviert', value: 'archiviert' },
      ],
      defaultValue: 'idee',
    }),
    urgency: fields.select({
      label: 'Dringlichkeit',
      options: [
        { label: 'sofort', value: 'sofort' },
        { label: 'sehr hoch', value: 'sehr-hoch' },
        { label: 'hoch', value: 'hoch' },
        { label: 'mittel', value: 'mittel' },
        { label: 'niedrig', value: 'niedrig' },
        { label: 'zurückgestellt', value: 'zurueckgestellt' },
      ],
      defaultValue: 'mittel',
    }),
    start: fields.date({
      label: 'Datum Beginn',
    }),
    deadline: fields.date({
      label: 'Datum der Fertigstellung',
    }),
    deadline_hidden: fields.text({
      label: 'Notiz zur Fertigstellung (nicht öffentlich)',
    }),
    length: fields.number({
      label: 'Länge in m',
      validation: { min: 0 },
    }),
    costs_amount: fields.number({
      label: 'Kosten in €',
      validation: { min: 0 },
    }),
    costs_remarks: fields.text({
      label: 'Notiz zu den Kosten (öffentlich)',
    }),
    funding_quota: fields.number({
      label: 'Förderquote in %',
      validation: { min: 0, max: 100 },
    }),
    town: fields.select({
      label: 'Baulastträger',
      options: measureTownOptions,
      defaultValue: 'eichwalde',
    }),
    admin_authority: fields.multiselect({
      label: 'Baulastträger',
      options: measureAdminAuthorityOptions,
    }),
    stakeholders: fields.text({ label: 'Beteiligte' }),
    image: fields.image({
      label: 'Bild',
      description:
        'Bild bitte im Format 2:3 (quer) hochlade bzw. wird dementsprechend beschnitten.',
      directory: 'src/assets/measures',
      publicPath: '/src/assets/measures',
    }),
    imageCopyright: fields.text({
      label: 'Copyright Bild',
      validation: { length: { max: 100 } },
    }),
    content: fields.mdx({
      label: 'Beschreibung',
      options: {
        image: {
          directory: 'src/assets/measures',
          publicPath: '/src/assets/measures',
        },
      },
      components: mdxComponentsKeystatic('measures'),
    }),
  },
})
