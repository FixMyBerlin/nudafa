import { config } from '@keystatic/core'
import { KEYSTATIC_STORAGE_KIND } from 'astro:env/client'
import { bicyclenetworkpagesKeystatic } from 'keystatic/bicyclenetworkPagesKeystatic'
import { HomepageIntroKeystatic, HomepageMainKeystatic } from 'keystatic/homepageKeystatic'
import { keystaticImprintPageConfig } from 'keystatic/imprintKeystatic'
import { keystaticMeasuresConfig } from 'keystatic/measuresKeystatic'
import { keystaticMeasuretownsConfig } from 'keystatic/measuretownsKeystatic'
import { keystaticMeasuretypesConfig } from 'keystatic/measuretypesKeystatic'
import { keystaticPartnerCommunesPageConfig } from 'keystatic/partnercommunespageKeystatic'
import {
  keystaticProjectPartnerPageIntroConfig,
  keystaticProjectPartnerPageMainConfig,
} from 'keystatic/partnerKeystatic'
import { keystaticPersonsConfig } from 'keystatic/personsKeystatic'
import { keystaticPressPageConfig } from 'keystatic/pressKeystatic'
import { keystaticResearchPageConfig } from 'keystatic/researchKeystatic'
import {
  keystaticSubprojectAndMeasureTopicsConfig,
  keystaticSubprojectCommunesConfig,
  keystaticSubprojectPartnersConfig,
  keystaticSubprojectsConfig,
} from 'keystatic/subprojectsKeystatic'

export default config({
  storage: {
    // https://keystatic.com/docs/github-mode#setting-up-git-hub-mode
    kind: KEYSTATIC_STORAGE_KIND,
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
        'partnercommunespage',
        'persons',
        'researchpage',
        'presspage',
      ],
      Teilprojekte: ['subprojects', 'subprojectstopics', 'communes', 'partners'],
      Radnetz: ['bicyclenetworkages'],
      Maßnahmen: ['measures', 'measuretypes', 'subprojectstopics', 'measuretowns'],
      'Weitere Seiten': ['imprintpage'],
    },
  },
  singletons: {
    homepageintro: HomepageIntroKeystatic,
    homepagemain: HomepageMainKeystatic,
    presspage: keystaticPressPageConfig,
    researchpage: keystaticResearchPageConfig,
    projectpartnerpageintro: keystaticProjectPartnerPageIntroConfig,
    projectpartnerpagemain: keystaticProjectPartnerPageMainConfig,
    imprintpage: keystaticImprintPageConfig,
    partnercommunespage: keystaticPartnerCommunesPageConfig,
  },
  collections: {
    subprojects: keystaticSubprojectsConfig,
    subprojectstopics: keystaticSubprojectAndMeasureTopicsConfig,
    communes: keystaticSubprojectCommunesConfig, // Verbundpartner
    partners: keystaticSubprojectPartnersConfig, // Projektpartner
    bicyclenetworkages: bicyclenetworkpagesKeystatic,
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
