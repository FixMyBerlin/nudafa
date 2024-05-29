import { LegendSicherheit } from '../legends/LegendSicherheit'
import type { MapDataAndLegend } from './mapDataAndLegend.const'

export const pageSicherheit: MapDataAndLegend = {
  sicherheit: {
    sources: {
      schulwege: {
        pmTilesUrl: 'https://radverkehrsatlas.de/api/uploads/nudafa-schulwege',
        layers: [
          {
            id: 'nudafa-schulwege',
            type: 'line',
            paint: {
              'line-color': '#246ef0',
              'line-opacity': 0.5,
            },
          },
        ],
      },
      unfaelle: {
        pmTilesUrl: 'https://radverkehrsatlas.de/api/uploads/nudafa-unfaelle',
        layers: [
          {
            id: 'nudafa-unfaelle',
            type: 'circle',
            paint: {
              'circle-radius': ['match', ['get', 'Kat'], ['1'], 5, ['2'], 4, 2],
              'circle-color': [
                'match',
                ['get', 'Kat'],
                ['1'],
                '#eb00c7',
                ['2'],
                '#fe2f2f',
                ['3'],
                '#fe7e16',
                '#fbe074',
              ],
              'circle-stroke-width': 0.5,
              'circle-stroke-color': '#ffffff',
            },
          },
        ],
      },
      gefahrenstellen: {
        pmTilesUrl: 'https://radverkehrsatlas.de/api/uploads/nudafa-schulwege-gefahrstellen',
        layers: [
          {
            id: 'nudafa-gefahrstellen',
            layout: {
              'line-cap': 'round',
            },
            type: 'line',
            paint: {
              'line-color': 'rgba(240, 117, 36, 0.31)',
              'line-width': 9,
            },
          },
        ],
      },
    },
    legends: <LegendSicherheit />,
  },
}
