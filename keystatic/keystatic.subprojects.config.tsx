import { collection, fields } from '@keystatic/core'
import { block } from '@keystatic/core/content-components'
import { contentViewImageDefaultDouble } from 'keystatic/utils/contentViewImageDefaultDouble'
import { contentViewImageHorizontal } from 'keystatic/utils/contentViewImageHorizontal'
import { contentViewImageSquare } from 'keystatic/utils/contentViewImageSquare'
import { contentViewImageVertical } from 'keystatic/utils/contentViewImageVertical'
import { keystaticTextLinkArrowConfig } from './utils/keystatic.TextLinkArrow.config'

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
    // fields.multiselect({
    //   label: "Weitere Projektpartner",
    //   options: [
    //     { label: "TH Wildau", value: "th" },
    //     { label: "Gemeinde Eichwalde", value: "eichwalde" },
    //     { label: "Gemeinde Zeuthen", value: "zeuthen" },
    //     { label: "Gemeinde Schulzendorf", value: "schulzendorf" },
    //     { label: "Stadt Wildau", value: "wildau" },
    //     { label: "TU Berlin", value: "tu" },
    //     { label: "FixMyCity", value: "fmc" },
    //   ],
    //   defaultValue: ["th"],
    // }),
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
      components: {
        ...keystaticTextLinkArrowConfig,
        ImageSingleVertical: block({
          label: 'Bild: einzeln, Hochformat',
          schema: {
            src: fields.image({
              label: 'Bild',
              directory: 'src/assets/subprojects',
              publicPath: '/src/assets/subprojects',
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
              directory: 'src/assets/subprojects',
              publicPath: '/src/assets/subprojects',
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
              directory: 'src/assets/subprojects',
              publicPath: '/src/assets/subprojects',
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
              directory: 'src/assets/subprojects',
              publicPath: '/src/assets/subprojects',
              validation: { isRequired: true },
            }),
            caption: fields.text({
              label: 'Bildunterschrift',
              validation: { length: { min: 1, max: 80 } },
            }),
            srcSecond: fields.image({
              label: '2. Bild',
              directory: 'src/assets/subprojects',
              publicPath: '/src/assets/subprojects',
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

export const keystaticSubprojectAndMeasureTopicsConfig = collection({
  label: 'Themen',
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

export const keystaticSubprojectCommunesConfig = collection({
  label: 'Verbundpartner',
  path: 'src/content/communes/*',
  format: {
    contentField: 'fakeDocument',
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
    fakeDocument: fields.emptyDocument(),
  },
})

export const keystaticSubprojectPartnersConfig = collection({
  label: 'Projektpartner',
  path: 'src/content/partners/*',
  format: {
    contentField: 'fakeDocument',
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
    fakeDocument: fields.emptyDocument(),
  },
})
