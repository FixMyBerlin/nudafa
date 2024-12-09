import { getCollection } from 'astro:content'
import { type TNavigation } from './Navbar.tsx'

const subprojects = await getCollection('subprojects')
const subprojectsNavigation: Record<string, string> = {}
subprojects
  ?.filter((p) => p.data.isPublic)
  .sort((a, b) => a.id.localeCompare(b.id))
  .forEach((p) => {
    subprojectsNavigation[p.data.title] = `/teilprojekte/${p.id}/`
  })

// const measures = await getCollection('measures')
// const measuresNavigation: Record<string, string> = {};
// measures?.forEach((p) => {
//   measuresNavigation[p.data.title] = `/massnahmen/${p.id}/`;
// });

const measuretowns = await getCollection('measuretowns')
const measuretownNavigation: Record<string, string> = {}
measuretowns
  .sort((a, b) => a.id.localeCompare(b.id))
  .forEach((p) => {
    measuretownNavigation[p.data.title] = `/massnahmen/${p.id}/`
  })

export const mainNavigation: TNavigation = {
  first: {
    'Das Reallabor': {
      Start: '/',
      'Über uns': '/ueber-uns/',
      Begleitforschung: '/begleitforschung/',
      Presse: '/presse/',
    },
    Teilprojekte: {
      ...subprojectsNavigation,
    },
  },
  second: {
    'Zum Radnetz': '/radnetz/einleitung/',
    'Zu den Maßnahmen': {
      'Alle Maßnahmen': '/massnahmen/',
      ...measuretownNavigation,
      // ...measuresNavigation,
    },
  },
  //   Veranstaltungen: {
  //     "Aktuelle Veranstaltungen": "/veranstaltungen/aktuelle-veranstaltungen/",
  //     Veranstaltungsarchiv: "/veranstaltungen/archiv/",
  //   },
}

export const footerNavigation: TNavigation = {
  first: {
    ...mainNavigation.first,
    Teilprojekte: {
      'Übersicht Teilprojekte': '/#teilprojekte',
    },
  },
  second: { ...mainNavigation.second },
}
