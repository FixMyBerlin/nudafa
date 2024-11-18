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
    // news: keystaticNewsConfig,
  },
})
