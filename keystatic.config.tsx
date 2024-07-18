import { collection, config, fields } from '@keystatic/core'
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
      Maßnahmen: ['measures', 'measuretypes', 'subprojectstopics'],
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
        id: fields.text({
          label: 'Nudafa-ID',
          // todo ggf validation function --> slugify regex
          validation: { length: { min: 1, max: 80 } },
        }),
        geometry: fields.conditional(
          fields.checkbox({
            label: 'Geometrie vorhanden',
            defaultValue: false,
          }),
          {
            true: fields.select({
              label: 'Geometrie Typ',
              options: [
                { label: 'Punkt', value: 'point' },
                { label: 'Linie', value: 'line' },
              ],
              defaultValue: 'line',
            }),
            false: fields.empty(),
          },
        ),
        type: fields.relationship({
          label: 'Maßnahmenart',
          collection: 'measuretypes',
        }),
        topics: fields.multiRelationship({
          label: 'Themen/Typ',
          collection: 'subprojectstopics',
        }),
        urgency: fields.checkbox({
          label: 'Dringlichkeit',
          defaultValue: false,
        }),
        startDate: fields.date({
          label: 'Datum Beginn',
        }),
        realisationDate: fields.date({
          label: 'Datum der Fertigstellung',
        }),
        cost: fields.number({
          label: 'Kosten in €',
          validation: { min: 0 },
        }),
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
        state: fields.select({
          label: 'Status',
          options: [
            { label: 'Idee', value: 'idea' },
            { label: 'Planung', value: 'planning' },
            { label: 'Umsetzung', value: 'realization' },
            { label: 'Fertig', value: 'complete' },
          ],
          defaultValue: 'idea',
        }),
        operators: fields.multiselect({
          label: 'Baulastträger',
          options: [
            { label: 'Eichwalde', value: 'eichwalde' },
            { label: 'Schulzendorf', value: 'schulzendorf' },
            { label: 'Zeuthen', value: 'zeuthen' },
            { label: 'Wildau', value: 'wildau' },
            { label: 'Königs-Wusterhausen', value: 'kw' },
            { label: 'Schönefeld', value: 'schoenefeld' },
          ],
        }),
        content: fields.mdx({
          label: 'Beschreibung',
          options: {
            image: {
              directory: 'src/assets/images/measures',
              publicPath: '/src/assets/images/measures/',
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
        fakeDocument: fields.emptyDocument(),
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
