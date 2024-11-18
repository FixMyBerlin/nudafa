import { config } from '@keystatic/core'
import { keystaticBicyclenetworkPagesConfig } from 'keystatic/keystatic.bicyclenetworkPages.config'
import {
  keystaticHomepageIntroConfig,
  keystaticHomepageMainConfig,
} from 'keystatic/keystatic.homepage.config'
import { keystaticImprintPageConfig } from 'keystatic/keystatic.imprint.config'
import { keystaticMeasuresConfig } from 'keystatic/keystatic.measures.config'
import { keystaticMeasuretownsConfig } from 'keystatic/keystatic.measuretowns.config'
import { keystaticMeasuretypesConfig } from 'keystatic/keystatic.measuretypes.config'
import {
  keystaticProjectPartnerPageIntroConfig,
  keystaticProjectPartnerPageMainConfig,
} from 'keystatic/keystatic.partner.config'
import { keystaticPartnerCommunesPageConfig } from 'keystatic/keystatic.partnercommunes.config'
import { keystaticPersonsConfig } from 'keystatic/keystatic.persons.config'
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
    measures: keystaticMeasuresConfig,
    measuretowns: keystaticMeasuretownsConfig,
    measuretypes: keystaticMeasuretypesConfig,
    persons: keystaticPersonsConfig,
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
