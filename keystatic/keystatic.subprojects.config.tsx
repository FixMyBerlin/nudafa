import { collection, fields } from '@keystatic/core'
import { defineCollection, z } from 'astro:content'
import { mdxComponentsKeystatic } from './components/mdxComponentsKeystatic'

export const astroSubprojectsDefinition = defineCollection({
  type: 'content',
  schema: ({ image }) =>
    z.object({
      teaserImage: image(),
      teaserImageCopyright: z.string().optional(),
      title: z.string(),
      subTitle: z.string().optional(),
      teaser: z.string().optional(),
      showBig: z.boolean(),
      isPublic: z.boolean(),
      topics: z.array(z.string()),
      start: z.date(),
      end: z.date().optional(),
      funding: z.string().optional(),
      projectCommunes: z.array(z.string()),
      projectPartners: z.array(z.string()),
    }),
})

export const keystaticSubprojectsConfig = collection({
  label: 'Teilprojekte',
  slugField: 'title',
  path: 'src/content/subprojects/*',
  format: { contentField: 'content' },
  schema: {
    title: fields.slug({
      slug: {
        description:
          'Bitte keine Änderungen nach initialem Speichern. Keine Großbuchstaben, Umlaute, Sonderzeichen oder Leerzeichen.',
        label: 'Dateiname / URL-Teil',
        validation: { length: { min: 1, max: 80 } },
      },
      name: { label: 'Title', validation: { length: { min: 1, max: 80 } } },
    }),
    subTitle: fields.text({
      label: 'Unterüberschrift',
      validation: { length: { max: 160 } },
    }),
    teaser: fields.text({
      label: 'Teaser Text',
      validation: { length: { max: 160 } },
    }),
    isPublic: fields.checkbox({
      label: 'Teilprojekt veröffentlichen',
      description: 'Wenn nicht, wird das Teilprojekt zwar gespeichert aber (noch) nicht angezeigt.',
      defaultValue: true,
    }),
    showBig: fields.checkbox({
      label: 'Als große Vorschau-Karte auf der Homepage anzeigen?',
      defaultValue: false,
    }),
    teaserImage: fields.image({
      label: 'Teaser Bild',
      description:
        'Bild bitte im Format 2:3 (quer) hochlade bzw. wird dementsprechend beschnitten.',
      directory: 'src/assets/subprojects',
      publicPath: '/src/assets/subprojects',
      validation: { isRequired: true },
    }),
    teaserImageCopyright: fields.text({
      label: 'Copyright Teaser Bild',
      validation: { length: { max: 100 } },
    }),
    topics: fields.multiRelationship({
      label: 'Themen',
      collection: 'subprojectstopics',
    }),
    // Verbundpartner
    projectCommunes: fields.multiRelationship({
      label: 'Verbundpartner',
      collection: 'communes',
    }),
    projectPartners: fields.multiRelationship({
      label: 'Projektpartner',
      collection: 'partners',
    }),
    start: fields.date({
      label: 'Projektstart',
      validation: { isRequired: true },
    }),
    end: fields.date({
      label: 'Projektende',
    }),
    funding: fields.text({ label: 'Finanzierung' }),
    content: fields.mdx({
      label: 'Content',
      options: {
        image: {
          directory: 'src/assets/subprojects',
          publicPath: '/src/assets/subprojects',
        },
      },
      components: mdxComponentsKeystatic('subprojects'),
    }),
  },
})

export const astroSubprojectAndMeasureTopicsDefinition = defineCollection({
  type: 'data',
  schema: () =>
    z.object({
      title: z.string(),
    }),
})

export const keystaticSubprojectAndMeasureTopicsConfig = collection({
  label: 'Themen',
  format: 'yaml',
  slugField: 'title',
  path: 'src/content/subprojectstopics/*',
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

export const astroSubprojectCommunesDefinition = defineCollection({
  type: 'content',
  schema: ({ image }) =>
    z.object({
      name: z.string(),
      order: z.number(),
      showInFooter: z.boolean().optional(),
      color: z.string(),
      image: image(),
      website: z.string(),
    }),
})

export const keystaticSubprojectCommunesConfig = collection({
  label: 'Verbundpartner',
  path: 'src/content/communes/*',
  format: {
    contentField: 'emptyContent',
  },
  columns: ['order'],
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
    order: fields.number({
      label: 'Reihenfolge in der Aufzählung',
      validation: { isRequired: true, min: 0 },
    }),
    showInFooter: fields.checkbox({ label: 'Im Footer anzeigen' }),
    color: fields.select({
      label: 'Farbe des Labels',
      options: [
        { label: '#AED7A0 - dunkelgrün', value: '#AED7A0' },
        { label: '#F9A8D4 - pink', value: '#F9A8D4' },
        { label: '#95E8D8 - türkis', value: '#95E8D8' },
        { label: '#BAE6FD - hellblau', value: '#BAE6FD' },
        { label: '#79C6FD - dunkelblau', value: '#79C6FD' },
        { label: '#FCA5A5 - rot', value: '#FCA5A5' },
        { label: '#FCA5A5 - orange', value: '#FCA5A5' },
        { label: '#FFFBEB - hellgelb', value: '#FFFBEB' },
      ],
      defaultValue: '#FFFBEB',
    }),
    image: fields.image({
      label: 'Bild',
      directory: 'src/assets/communes',
      publicPath: '../../assets/communes',
      validation: { isRequired: true },
    }),
    website: fields.url({
      label: 'Website',
      validation: { isRequired: true },
    }),
    emptyContent: fields.emptyContent({ extension: 'mdx' }),
  },
})

export const astroSubprojectPartnersDefinition = defineCollection({
  type: 'content',
  schema: () =>
    z.object({
      name: z.string(),
      color: z.string(),
    }),
})

export const keystaticSubprojectPartnersConfig = collection({
  label: 'Projektpartner',
  path: 'src/content/partners/*',
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
    color: fields.select({
      label: 'Farbe des Labels',
      options: [
        { label: '#AED7A0 - dunkelgrün', value: '#AED7A0' },
        { label: '#F9A8D4 - pink', value: '#F9A8D4' },
        { label: '#95E8D8 - türkis', value: '#95E8D8' },
        { label: '#BAE6FD - hellblau', value: '#BAE6FD' },
        { label: '#79C6FD - dunkelblau', value: '#79C6FD' },
        { label: '#FCA5A5 - rot', value: '#FCA5A5' },
        { label: '#FCA5A5 - orange', value: '#FCA5A5' },
        { label: '#DDEBA7 - hellgrün', value: '#DDEBA7' },
        { label: '#FFD1B7 - lachs', value: '#FFD1B7' },
        { label: '#FFFBEB - hellgelb', value: '#FFFBEB' },
      ],
      defaultValue: '#FFFBEB',
    }),
    emptyContent: fields.emptyContent({ extension: 'mdx' }),
  },
})
