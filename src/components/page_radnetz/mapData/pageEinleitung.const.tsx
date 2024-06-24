import { placesCirlce } from './layerGroups/placesCircle'
import type { MapDataAndLegend } from './mapDataAndLegend.const'

export const pageEinleitung: MapDataAndLegend = {
  einleitung: {
    sources: {
      combined: {
        pmTilesUrl: 'https://radverkehrsatlas.de/api/uploads/nudafa-combined',
        layers: [],
      },
      places: {
        pmTilesUrl: 'https://radverkehrsatlas.de/api/uploads/website-nudafa-places',
        layers: placesCirlce,
      },
    },
    legends: null,
    colorClass: 'border-l-[#374151]',
  },
}
