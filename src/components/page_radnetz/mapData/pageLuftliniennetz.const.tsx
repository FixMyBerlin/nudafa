import { LegendLuftliniennetz } from '../legends/LegendLuftliniennetz'
import type { MapDataAndLegend } from './mapDataAndLegend.const'

export const pageLuftliniennetz: MapDataAndLegend = {
  luftliniennetz: {
    sources: {
      netzentwurf: {
        pmTilesUrl: 'https://radverkehrsatlas.de/api/uploads/nudafa-netzentwurf',
        layers: [
          {
            id: 'nudafa-luftlininien',
            type: 'line',
            paint: {
              'line-color': '#3f52de',
              'line-opacity': 0.8,
              'line-width': [
                'interpolate',
                ['linear'],
                ['zoom'],
                8,
                ['match', ['get', 'radverkehrsatlas'], ['c_luftlinie'], 2, 1],
                12,
                ['match', ['get', 'radverkehrsatlas'], ['c_luftlinie'], 5, 2],
              ],
              'line-dasharray': [2, 1],
            },
            filter: [
              'match',
              ['get', 'radverkehrsatlas'],
              ['c_luftlinie', 'd_nahverbindung'],
              true,
              false,
            ],
          },
        ],
      },
      zielzwang: {
        pmTilesUrl: 'https://radverkehrsatlas.de/api/uploads/nudafa-ziel-zwangspunkte',
        layers: [
          {
            id: 'nudafa-ramboll-zwangspunkte',
            type: 'circle',
            paint: {
              'circle-stroke-width': 2,
              'circle-stroke-opacity': 0.8,
              'circle-color': '#3f74de',
              'circle-radius': 4,
              'circle-stroke-color': '#3f74de',
            },
            filter: ['match', ['get', 'Zwangspunk'], [1], true, false],
          },
          {
            id: 'nudafa-zielpunkte',
            type: 'line',
            paint: {
              'line-color': [
                'match',
                ['get', 'radverkehrsatlas'],
                ['a_zentrum'],
                '#235dd1',
                '#103275',
              ],
              'line-width': ['match', ['get', 'radverkehrsatlas'], ['a_zentrum'], 5, 4],
              'line-opacity': 0.73,
            },
            filter: [
              'match',
              ['get', 'radverkehrsatlas'],
              ['a_zentrum', 'b_quartier'],
              true,
              false,
            ],
            layout: {
              visibility: 'none',
            },
          },
        ],
      },
    },
    legends: <LegendLuftliniennetz />,
    colorClass: 'border-l-[#977214]',
  },
}
