import { getCollection } from 'astro:content'
import { type TNavigation } from './Navbar.tsx'

const subprojects = await getCollection('subprojects')
const subprojectsNavigation: Record<string, string> = {}
subprojects?.forEach((p) => {
  subprojectsNavigation[p.data.title] = `/teilprojekte/${p.slug}`
})

// const measures = await getCollection('measures')
// const measuresNavigation: Record<string, string> = {};
// measures?.forEach((p) => {
//   measuresNavigation[p.data.title] = `/teilprojekte/${p.slug}`;
// });

export const mainNavigation: TNavigation = {
  first: {
    'Das Reallabor': {
      Presse: '/presse',
      'Über uns': '/ueber-uns',
    },
    Teilprojekte: {
      ...subprojectsNavigation,
    },
  },
  second: {
    'Zum Radnetz': '/radnetz/einleitung',
    'Zu den Maßnahmen': {
      'Alle Maßnahmen': '/massnahmen',
      // ...measuresNavigation,
    },
  },
  //   Veranstaltungen: {
  //     "Aktuelle Veranstaltungen": "/veranstaltungen/aktuelle-veranstaltungen",
  //     Veranstaltungsarchiv: "/veranstaltungen/archiv",
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