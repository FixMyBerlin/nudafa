import {
  measureAdminAuthorityOptions,
  measureTownOptions,
} from '@components/page_massnahmen/measureCommunes.const'
import { complexityLevelOptions } from '@components/page_massnahmen/measureComplexityLevels.const'
import { collection, config, fields } from '@keystatic/core'
import { block } from '@keystatic/core/content-components'
import { keystaticBicyclenetworkPagesConfig } from 'keystatic/keystatic.bicyclenetworkPages.config'
import {
  keystaticHomepageIntroConfig,
  keystaticHomepageMainConfig,
} from 'keystatic/keystatic.homepage.config'
import { keystaticImprintPageConfig } from 'keystatic/keystatic.imprint.config'
import {
  keystaticProjectPartnerPageIntroConfig,
  keystaticProjectPartnerPageMainConfig,
} from 'keystatic/keystatic.partner.config'
import { keystaticPartnerCommunesPageConfig } from 'keystatic/keystatic.partnercommunes.config'
import { keystaticPressPageConfig } from 'keystatic/keystatic.press.config'
import { keystaticResearchPageConfig } from 'keystatic/keystatic.research.config'
import {
  keystaticSubprojectAndMeasureTopicsConfig,
  keystaticSubprojectCommunesConfig,
  keystaticSubprojectPartnersConfig,
  keystaticSubprojectsConfig,
} from 'keystatic/keystatic.subprojects.config'
import { contentViewImageDefaultDouble } from 'keystatic/utils/contentViewImageDefaultDouble'
import { contentViewImageHorizontal } from 'keystatic/utils/contentViewImageHorizontal'
import { contentViewImageSquare } from 'keystatic/utils/contentViewImageSquare'
import { contentViewImageVertical } from 'keystatic/utils/contentViewImageVertical'
import { keystaticTextLinkArrowConfig } from 'keystatic/utils/keystatic.TextLinkArrow.config'

export default config({
  storage: {
    kind: process.env.NODE_ENV === 'development' ? 'local' : 'github',
    repo: {
      owner: 'FixMyBerlin',
      name: 'nudafa',
    },
    // https://keystatic.com/docs/github-mode
  },
  ui: {
    brand: {
      name: 'Nudafa',
      mark: () => <img src="/favicon-32x32.png" height={27} />,
    },
    navigation: {
      Home: ['homepageintro', 'homepagemain'],
      'Das Reallabor': [
        'projectpartnerpageintro',
        'projectpartnerpagemain',
        'communepartnerspage',
        'persons',
        'researchpage',
        'presspage',
      ],
      Teilprojekte: ['subProjects', 'subprojectstopics', 'communes', 'partners'],
      Radnetz: ['bicyclenetworkPages'],
      Maßnahmen: ['measures', 'measuretypes', 'subprojectstopics', 'measuretowns'],
      'Weitere Seiten': ['imprintpage'],
    },
  },
  singletons: {
    homepageintro: keystaticHomepageIntroConfig,
    homepagemain: keystaticHomepageMainConfig,
    presspage: keystaticPressPageConfig,
    researchpage: keystaticResearchPageConfig,
    projectpartnerpageintro: keystaticProjectPartnerPageIntroConfig,
    projectpartnerpagemain: keystaticProjectPartnerPageMainConfig,
    imprintpage: keystaticImprintPageConfig,
    communepartnerspage: keystaticPartnerCommunesPageConfig,
  },
  collections: {
    subProjects: keystaticSubprojectsConfig,
    subprojectstopics: keystaticSubprojectAndMeasureTopicsConfig,
    communes: keystaticSubprojectCommunesConfig, // Verbundpartner
    partners: keystaticSubprojectPartnersConfig, // Projektpartner
    bicyclenetworkPages: keystaticBicyclenetworkPagesConfig,
    measures: collection({
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
          options: {
            image: {
              directory: 'src/assets/measures',
              publicPath: '/src/assets/measures',
            },
          },
        }),
      },
    }),
    measuretowns: collection({
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
    }),
    measuretypes: collection({
      label: 'Maßnahmenart',
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
    }),
    persons: collection({
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
    }),
    // posts: collection({
    //   label: "Posts",
    //   slugField: "title",
    //   path: "src/content/posts/*",
    //   format: { contentField: "content" },
    //   schema: {
    //     title: fields.slug({ name: { label: "Title" } }),
    //     content: fields.document({
    //       label: "Content",
    //       formatting: true,
    //       dividers: true,
    //       links: true,
    //       images: {
    //         directory: "src/assets/images/posts",
    //         publicPath: "../../assets/images/posts/",
    //       },
    //     }),
    //   },
    // }),
    // news: collection({
    //   label: "News",
    //   slugField: "title",
    //   path: "src/content/news/*",
    //   format: { contentField: "content" },
    //   schema: {
    //     title: fields.slug({ name: { label: "Title" } }),
    //     teaserImage: fields.image({
    //       label: "Teaser Bild",
    //       directory: "src/assets/news",
    //       publicPath: "/src/assets/news",
    //     }),
    //     content: fields.mdx({
    //       label: "Rich text",
    //       components: {
    //         Testimonial: wrapper({
    //           label: "Testimonial",
    //           schema: {
    //             author: fields.text({ label: "Author" }),
    //             role: fields.text({ label: "Role" }),
    //           },
    //         }),
    //         Container: wrapper({
    //           label: "Container",
    //           schema: {
    //             crop: fields.select({
    //               label: "Crop",
    //               description: "Max width container and options",
    //               options: [
    //                 { label: "normal", value: "normal" },
    //                 { label: "narrow", value: "narrow" },
    //                 { label: "narrower", value: "narrower" },
    //                 { label: "bleed", value: "bleed" },
    //                 { label: "boxed", value: "boxed" },
    //                 { label: "narrow-boxed", value: "narrow-boxed" },
    //               ],
    //               defaultValue: "normal",
    //             }),
    //           },
    //         }),
    //         Playlist: block({
    //           label: "Playlist",
    //           schema: {
    //             id: fields.text({
    //               label: "Playlist ID",
    //               validation: { length: { min: 1, max: 100 } },
    //             }),
    //           },
    //           // as we are using atsro we have to copy paste the whole component and have to keep it in sync manually
    //           // talwind does not work in the keysatic ui YET
    //           ContentView: (props) => (
    //             <h1
    //               style={{
    //                 borderRadius: "9999px",
    //                 backgroundColor: "#fecaca",
    //                 padding: "1rem",
    //               }}
    //               className="rounded-full bg-red-200 p-4"
    //             >
    //               {props.value.id}
    //             </h1>
    //           ),
    //         }),
    //         ImageWithCaption: block({
    //           label: "Bild mit Unterschrift",
    //           schema: {
    //             src: fields.image({
    //               label: "Bild",
    //               directory: "src/assets/news",
    //               publicPath: "/src/assets/news",
    //               validation: { isRequired: true },
    //             }),
    //             caption: fields.text({
    //               label: "Bildunterschrift",
    //               validation: { length: { min: 1, max: 80 } },
    //             }),
    //             alt: fields.text({ label: "Alt-Text" }),
    //           },
    //           // as we are using atsro we have to copy paste the whole component and have to keep it in sync manually
    //           // talwind does not work in the keysatic ui YET
    //           // Image Preview is not working yet so we have a default image here for now
    //           ContentView: contentViewImageDefault,
    //         }),
    //       },
    //     }),
    //   },
    // }),
  },
})
