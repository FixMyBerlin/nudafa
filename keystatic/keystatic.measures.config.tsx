import {
  complexityLevelOptions,
  measureAdminAuthorityOptions,
  measureTownOptions,
} from '@components/page_massnahmen/measureOptions.const'
import { collection, fields } from '@keystatic/core'
import { block } from '@keystatic/core/content-components'
import { contentViewImageDefaultDouble } from './utils/contentViewImageDefaultDouble'
import { contentViewImageHorizontal } from './utils/contentViewImageHorizontal'
import { contentViewImageSquare } from './utils/contentViewImageSquare'
import { contentViewImageVertical } from './utils/contentViewImageVertical'
import { keystaticTextLinkArrowConfig } from './utils/keystatic.TextLinkArrow.config'

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
      components: {
        ...keystaticTextLinkArrowConfig,
        ImageSingleVertical: block({
          label: 'Bild: einzeln, Hochformat',
          schema: {
            src: fields.image({
              label: 'Bild',
              directory: 'src/assets/measures',
              publicPath: '/src/assets/measures',
              validation: { isRequired: true },
            }),
            caption: fields.text({
              label: 'Bildunterschrift',
              validation: { length: { min: 1, max: 80 } },
            }),
            alt: fields.text({ label: 'Alt-Text' }),
            imageConfig: fields.conditional(
              fields.select({
                label: 'Breite',
                description:
                  'Wieviel Platz soll das Bild im Verhältnis zur Breite des ganzen Textblocks einnehmen? Auf mobilen Screens wird immer die ganze Breite genommen.',
                options: [
                  { label: 'halbe Breite', value: 'half' },
                  { label: 'ganze Breite', value: 'full' },
                ],
                defaultValue: 'half',
              }),
              {
                half: fields.select({
                  label: 'Position',
                  options: [
                    { label: 'links', value: 'left' },
                    { label: 'zentriert', value: 'center' },
                    { label: 'rechts', value: 'right' },
                  ],
                  defaultValue: 'left',
                }),
                full: fields.empty(),
              },
            ),
          },
          ContentView: contentViewImageVertical,
        }),
        ImageSingleHorizontal: block({
          label: 'Bild: einzeln, Querformat',
          schema: {
            src: fields.image({
              label: 'Bild',
              directory: 'src/assets/measures',
              publicPath: '/src/assets/measures',
              validation: { isRequired: true },
            }),
            caption: fields.text({
              label: 'Bildunterschrift',
              validation: { length: { min: 1, max: 80 } },
            }),
            alt: fields.text({ label: 'Alt-Text' }),
            imageConfig: fields.conditional(
              fields.select({
                label: 'Seitenverhältnis',
                description:
                  'Breite Formate (16:9 und 9:4) werden immer über die ganze Breite dargestellt.',
                options: [
                  { label: '3:2', value: '3/2' },
                  { label: '4:3', value: '4/3' },
                  { label: '9:4', value: '9/4' },
                  { label: '16:9', value: 'pano' },
                ],
                defaultValue: '4/3',
              }),
              {
                '3/2': fields.conditional(
                  fields.select({
                    label: 'Breite',
                    description:
                      'Wieviel Platz soll das Bild im Verhältnis zur Breite des ganzen Textblocks einnehmen? Auf mobilen Screens wird immer die ganze Breite genommen.',
                    options: [
                      { label: 'halbe Breite', value: 'half' },
                      { label: 'ganze Breite', value: 'full' },
                    ],
                    defaultValue: 'full',
                  }),
                  {
                    half: fields.select({
                      label: 'Position',
                      options: [
                        { label: 'links', value: 'left' },
                        { label: 'zentriert', value: 'center' },
                        { label: 'rechts', value: 'right' },
                      ],
                      defaultValue: 'left',
                    }),
                    full: fields.empty(),
                  },
                ),
                '4/3': fields.conditional(
                  fields.select({
                    label: 'Breite',
                    description:
                      'Wieviel Platz soll das Bild im Verhältnis zur Breite des ganzen Textblocks einnehmen? Auf mobilen Screens wird immer die ganze Breite genommen.',
                    options: [
                      { label: 'halbe Breite', value: 'half' },
                      { label: 'ganze Breite', value: 'full' },
                    ],
                    defaultValue: 'full',
                  }),
                  {
                    half: fields.select({
                      label: 'Position',
                      options: [
                        { label: 'links', value: 'left' },
                        { label: 'zentriert', value: 'center' },
                        { label: 'rechts', value: 'right' },
                      ],
                      defaultValue: 'left',
                    }),
                    full: fields.empty(),
                  },
                ),
                '9/4': fields.empty(),
                pano: fields.empty(),
              },
            ),
          },
          ContentView: contentViewImageHorizontal,
        }),
        ImageSingleSquare: block({
          label: 'Bild: einzeln, quadratisch',
          schema: {
            src: fields.image({
              label: 'Bild',
              directory: 'src/assets/measures',
              publicPath: '/src/assets/measures',
              validation: { isRequired: true },
            }),
            caption: fields.text({
              label: 'Bildunterschrift',
              validation: { length: { min: 1, max: 80 } },
            }),
            alt: fields.text({ label: 'Alt-Text' }),
            imageConfig: fields.conditional(
              fields.select({
                label: 'Breite',
                description:
                  'Wieviel Platz soll das Bild im Verhältnis zur Breite des ganzen Textblocks einnehmen? Auf mobilen Screens wird immer die ganze Breite genommen.',
                options: [
                  { label: 'halbe Breite', value: 'half' },
                  { label: 'ganze Breite', value: 'full' },
                ],
                defaultValue: 'full',
              }),
              {
                half: fields.select({
                  label: 'Position',
                  options: [
                    { label: 'links', value: 'left' },
                    { label: 'zentriert', value: 'center' },
                    { label: 'rechts', value: 'right' },
                  ],
                  defaultValue: 'left',
                }),
                full: fields.empty(),
              },
            ),
          },
          ContentView: contentViewImageSquare,
        }),
        ImageDouble: block({
          label: 'Bild: doppelt',
          description: 'quer / hoch / quadratisch',
          schema: {
            src: fields.image({
              label: '1. Bild',
              directory: 'src/assets/measures',
              publicPath: '/src/assets/measures',
              validation: { isRequired: true },
            }),
            caption: fields.text({
              label: 'Bildunterschrift',
              validation: { length: { min: 1, max: 80 } },
            }),
            srcSecond: fields.image({
              label: '2. Bild',
              directory: 'src/assets/measures',
              publicPath: '/src/assets/measures',
              validation: { isRequired: true },
            }),
            captionSecond: fields.text({
              label: 'Bildunterschrift',
              validation: { length: { min: 1, max: 80 } },
            }),
            alt: fields.text({ label: 'Alt-Text' }),
            imageConfig: fields.conditional(
              fields.select({
                label: 'Ausrichtung',
                description: '',
                options: [
                  { label: 'quer', value: 'horizontal' },
                  { label: 'hoch', value: 'vertical' },
                  { label: 'quadratisch', value: 'square' },
                ],
                defaultValue: 'vertical',
              }),
              {
                vertical: fields.select({
                  label: 'Seitenverhältnis',
                  options: [
                    { label: '3:2', value: '3/2' },
                    { label: '4:3', value: '4/3' },
                  ],
                  defaultValue: '3/2',
                }),
                horizontal: fields.select({
                  label: 'Seitenverhältnis',
                  options: [
                    { label: '3:2', value: '3/2' },
                    { label: '4:3', value: '4/3' },
                  ],
                  defaultValue: '3/2',
                }),
                square: fields.empty(),
              },
            ),
          },
          ContentView: contentViewImageDefaultDouble,
        }),
      },
    }),
  },
})
