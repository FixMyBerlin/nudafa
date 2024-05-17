import { createRouter } from '@nanostores/router'
import { atom } from 'nanostores'
import type { MapGeoJSONFeature } from 'react-map-gl/maplibre'

// Docs: https://github.com/nanostores/nanostores?tab=readme-ov-file
export const $mapLoaded = atom(false)

export const $clickedMapData = atom<MapGeoJSONFeature[] | undefined>(undefined)

// Docs: https://github.com/nanostores/router
export const $router = createRouter(
  {
    radnetz: '/radnetz/:section',
  },
  {
    // Disable general link tracking because that breaks our Navbar
    // https://github.com/nanostores/router?tab=readme-ov-file#clicks-tracking
    links: false,
  },
)
