import type { MapDataAndLegend } from './mapDataAndLegend.const'

export const pageLuftliniennetz: MapDataAndLegend = {
  luftliniennetz: {
    sources: {
      combined: {
        pmTilesUrl: 'https://radverkehrsatlas.de/api/uploads/nudafa-combined',
        layers: [
          // Zielpunkte
          // Luftlinien
          // Zwangspunkte??
        ],
      },
    },
    legends: null, // not specified
  },
}
