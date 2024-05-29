import { LegendKontext } from '../legends/LegendKontext'
import type { MapDataAndLegend } from './mapDataAndLegend.const'

export const pageBedarfe: MapDataAndLegend = {
  bedarfe: {
    sources: {
      combined: {
        pmTilesUrl: 'https://radverkehrsatlas.de/api/uploads/nudafa-combined',
        layers: [
          {
            id: 'Problemstrecke',
            layout: {
              'line-cap': 'round',
            },
            filter: ['match', ['get', 'Typ'], ['Problem Strecke'], true, false],
            type: 'line',
            paint: {
              'line-color': 'rgba(240, 117, 36, 0.62)',
              'line-width': 9,
              'line-opacity': 0.52,
            },
          },
          {
            id: 'Ergaenzungsvorschlag Route',
            layout: {
              'line-cap': 'round',
            },
            filter: ['match', ['get', 'Typ'], ['Vorschlag Route'], true, false],
            type: 'line',
            paint: {
              'line-color': '#c06ccb',
              'line-width': ['interpolate', ['linear'], ['zoom'], 7, 1, 13, 3],
              'line-dasharray': [1, 1],
            },
          },
          {
            id: 'wichtige Ziele aus Beteiligung',
            filter: ['match', ['get', 'Typ'], ['Destination'], true, false],
            type: 'circle',
            paint: {
              'circle-color': '#f4c92f',
              'circle-radius': ['interpolate', ['linear'], ['zoom'], 9, 1, 12, 4],
              'circle-stroke-color': '#ffffff',
              'circle-stroke-width': 1,
            },
          },
        ],
      },
    },
    legends: <LegendKontext />,
  },
}
