import { astroBicyclenetworkpagesDefinition } from 'keystatic/keystatic.bicyclenetworkPages.config'
import {
  astroHomepageIntroDefinition,
  astroHomepageMainDefinition,
} from 'keystatic/keystatic.homepage.config'
import { astroImprintPageDefinition } from 'keystatic/keystatic.imprint.config'
import { astroMeasuresDefinition } from 'keystatic/keystatic.measures.config'
import { astroMeasuretownsDefinition } from 'keystatic/keystatic.measuretowns.config'
import { astroMeasuretypesDefinition } from 'keystatic/keystatic.measuretypes.config'
import {
  astroProjectPartnerPageIntroDefinition,
  astroProjectPartnerPageMainDefinition,
} from 'keystatic/keystatic.partner.config'
import { astroPartnerCommunesPageDefinition } from 'keystatic/keystatic.partnercommunes.config'
import { astroPersonsDefinition } from 'keystatic/keystatic.persons.config'
import { astroPressPageDefinition } from 'keystatic/keystatic.press.config'
import { astroResearchPageDefinition } from 'keystatic/keystatic.research.config'
import {
  astroSubprojectAndMeasureTopicsDefinition,
  astroSubprojectCommunesDefinition,
  astroSubprojectPartnersDefinition,
  astroSubprojectsDefinition,
} from 'keystatic/keystatic.subprojects.config'

export default {
  // Singleton
  homepageintro: astroHomepageIntroDefinition,
  homepagemain: astroHomepageMainDefinition,
  presspage: astroPressPageDefinition,
  researchpage: astroResearchPageDefinition,
  projectpartnerpageintro: astroProjectPartnerPageIntroDefinition,
  projectpartnerpagemain: astroProjectPartnerPageMainDefinition,
  imprintpage: astroImprintPageDefinition,
  communepartnerspage: astroPartnerCommunesPageDefinition,
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
