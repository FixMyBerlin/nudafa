import { placesCirlce } from './layerGroups/placesCircle'
import type { MapDataAndLegend } from './mapDataAndLegend.const'

export const pageEinleitung: MapDataAndLegend = {
  einleitung: {
    sources: {
      places: {
        pmTilesUrl: 'https://tilda-geo.de/api/uploads/website-nudafa-places',
        layers: placesCirlce,
      },
    },
    legends: null,
    colorClass: 'border-l-[#374151]',
  },
}
