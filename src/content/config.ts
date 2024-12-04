import { astroBicyclenetworkpagesDefinition } from 'keystatic/bicyclenetworkPagesAstro'
import { homepageIntroAstro, homepageMainAstro } from 'keystatic/homepageAstro'
import { astroImprintPageDefinition } from 'keystatic/imprintAstro'
import { astroMeasuresDefinition } from 'keystatic/measuresAstro'
import { astroMeasuretownsDefinition } from 'keystatic/measuretownsAstro'
import { astroMeasuretypesDefinition } from 'keystatic/measuretypesAstro'
import {
  astroProjectPartnerPageIntroDefinition,
  astroProjectPartnerPageMainDefinition,
} from 'keystatic/partnerAstro'
import { astroPartnerCommunesPageDefinition } from 'keystatic/partnercommunespageAstro'
import { astroPersonsDefinition } from 'keystatic/personsAstro'
import { astroPressPageDefinition } from 'keystatic/pressAstro'
import { astroResearchPageDefinition } from 'keystatic/researchAstro'
import {
  astroSubprojectAndMeasureTopicsDefinition,
  astroSubprojectCommunesDefinition,
  astroSubprojectPartnersDefinition,
  astroSubprojectsDefinition,
} from 'keystatic/subprojectsAstro'

export const collections = {
  // Singleton
  homepageintro: homepageIntroAstro,
  homepagemain: homepageMainAstro,
  presspage: astroPressPageDefinition,
  researchpage: astroResearchPageDefinition,
  projectpartnerpageintro: astroProjectPartnerPageIntroDefinition,
  projectpartnerpagemain: astroProjectPartnerPageMainDefinition,
  imprintpage: astroImprintPageDefinition,
  partnercommunespage: astroPartnerCommunesPageDefinition,
  // Collections
  subprojects: astroSubprojectsDefinition,
  subprojectstopics: astroSubprojectAndMeasureTopicsDefinition,
  communes: astroSubprojectCommunesDefinition,
  partners: astroSubprojectPartnersDefinition,
  bicyclenetworkpages: astroBicyclenetworkpagesDefinition,
  measures: astroMeasuresDefinition,
  measuretowns: astroMeasuretownsDefinition,
  measuretypes: astroMeasuretypesDefinition,
  persons: astroPersonsDefinition,
  // news: astroNewsDefinition,
}
