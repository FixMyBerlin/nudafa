import type { MapDataAndLegend } from './mapDataAndLegend.const'

export const pageLuftliniennetz: MapDataAndLegend = {
  luftliniennetz: {
    sources: {
      combined: {
        pmTilesUrl: 'https://radverkehrsatlas.de/api/uploads/nudafa-combined',
        layers: [
          {
            id: 'Luftlinien',
            filter: ['match', ['get', 'Typ'], ['', 'Wundschlinie'], true, false],
            type: 'line',
            paint: {
              'line-color': '#3f74de',
              'line-width': 3,
              'line-opacity': [
                'interpolate',
                ['linear'],
                ['zoom'],
                11.3,
                0,
                11.591,
                0.7,
                13,
                0.67,
                13.3,
                0,
              ],
            },
          },
        ],
      },
      'ziel-zwangspunkte': {
        pmTilesUrl: 'https://radverkehrsatlas.de/api/uploads/nudafa-ziel-zwangspunkte',
        layers: [
          {
            filter: ['match', ['get', 'Siedlung'], [1], true, false],
            type: 'circle',
            id: 'Zielpunkte',
            paint: {
              'circle-opacity': 0,
              'circle-stroke-opacity': [
                'interpolate',
                ['linear'],
                ['zoom'],
                11.5,
                0,
                11.7,
                1,
                13.1,
                1,
                13.2,
                0,
              ],
              'circle-color': '#105ef9',
              'circle-stroke-width': 3,
              'circle-stroke-color': '#3f74de',
              'circle-radius': 8,
            },
          },
          {
            filter: ['match', ['get', 'Zwangspunk'], [1], true, false],
            type: 'circle',
            id: 'Zwangspunkte',
            paint: {
              'circle-opacity': ['interpolate', ['linear'], ['zoom'], 11.4, 0, 11.8, 0.8],
              'circle-stroke-opacity': 0.8,
              'circle-color': '#3f74de',
            },
          },
        ],
      },
    },
    legends: null, // not specified
  },
}