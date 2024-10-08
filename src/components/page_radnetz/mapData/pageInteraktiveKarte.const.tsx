import type { MapDataAndLegend } from './mapDataAndLegend.const'

export const pageInteraktiveKarte: MapDataAndLegend = {
  'interaktive-karte': {
    sources: {
      combined: {
        pmTilesUrl: 'https://radverkehrsatlas.de/api/uploads/nudafa-combined',
        layers: [],
      },
    },
    legends: null,
    colorClass: 'border-l-gray-200',
  },
}
