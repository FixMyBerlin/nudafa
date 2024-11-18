import { astroBicyclenetworkPagesDefinition } from 'keystatic/keystatic.bicyclenetworkPages.config'
import { astroMeasuresDefinition } from 'keystatic/keystatic.measures.config'
import { astroMeasuretownsDefinition } from 'keystatic/keystatic.measuretowns.config'
import { astroNewsDefinition } from 'keystatic/keystatic.news.config'
import { astroPartnerCommunesPageDefinition } from 'keystatic/keystatic.partnercommunes.config'
import { astroPersonsDefinition } from 'keystatic/keystatic.persons.config'
import { astroSubprojectsDefinition } from 'keystatic/keystatic.subprojects.config'

export default {
  news: astroNewsDefinition,
  persons: astroPersonsDefinition,
  subprojects: astroSubprojectsDefinition,
  communes: astroPartnerCommunesPageDefinition,
  bicyclenetworkpages: astroBicyclenetworkPagesDefinition,
  measures: astroMeasuresDefinition,
  measuretowns: astroMeasuretownsDefinition,
}
