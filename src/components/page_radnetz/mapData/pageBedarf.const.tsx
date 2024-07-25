import { LegendBedarfe } from '../legends/LegendBedarfe'
import type { MapDataAndLegend } from './mapDataAndLegend.const'

export const pageBedarfe: MapDataAndLegend = {
  bedarfe: {
    sources: {
      combined: {
        pmTilesUrl: 'https://radverkehrsatlas.de/api/uploads/nudafa-combined',
        layers: [
          {
            id: 'bedarfstrecke',
            layout: { 'line-cap': 'round' },
            filter: ['match', ['get', 'Typ'], ['Problem Strecke'], true, false],
            type: 'line',
            paint: {
              'line-color': '#f07524',
              'line-width': ['interpolate', ['linear'], ['zoom'], 9, 5, 22, 20],
              'line-opacity': 0.33,
            },
          },
          {
            id: 'bedarfpunkt',
            filter: ['match', ['get', 'Typ'], ['Problem Punkt'], true, false],
            type: 'circle',
            paint: {
              'circle-color': '#f07524',
              'circle-radius': ['interpolate', ['linear'], ['zoom'], 9, 4, 12, 8],
              'circle-stroke-width': 3,
              'circle-opacity': 0.33,
              'circle-stroke-opacity': 0,
            },
          },
          {
            id: 'Impulse fuer die Netzplanung',
            filter: ['match', ['get', 'Typ'], ['Vorschlag Route'], true, false],
            type: 'line',
            paint: {
              'line-color': '#2472f0',
              'line-width': ['interpolate', ['linear'], ['zoom'], 9, 5, 22, 20],
              'line-opacity': 0.33,
            },
            layout: { 'line-cap': 'round' },
          },
          {
            id: 'Wichtige Ziele',
            filter: ['match', ['get', 'Typ'], ['Destination'], true, false],
            type: 'circle',
            paint: {
              'circle-color': '#2472f0',
              'circle-radius': ['interpolate', ['linear'], ['zoom'], 9, 4, 12, 8],
              'circle-stroke-color': '#2472f0',
              'circle-stroke-width': 3,
              'circle-opacity': 0.33,
              'circle-stroke-opacity': 0,
            },
          },
        ],
      },
    },
    legends: <LegendBedarfe />,
    colorClass: 'border-l-[#E4B130]',
  },
}
