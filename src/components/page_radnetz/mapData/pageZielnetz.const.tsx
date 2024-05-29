import { LegendZielnetz } from '../legends/LegendZielnetz'
import type { MapDataAndLegend } from './mapDataAndLegend.const'

export const pageZielnetz: MapDataAndLegend = {
  zielnetz: {
    sources: {
      combined: {
        pmTilesUrl: 'https://radverkehrsatlas.de/api/uploads/nudafa-combined',
        layers: [
          {
            id: 'Netzentwurf',
            filter: ['match', ['get', 'Typ'], ['Zielnetz'], true, false],
            type: 'line',
            paint: {
              'line-color': '#c205a2',
              'line-opacity': 0.83,
              'line-dasharray': [1.5, 0.7],
              'line-width': 3,
            },
          },
        ],
      },
      'netzvorschlaege-buergerinnen': {
        pmTilesUrl: 'https://radverkehrsatlas.de/api/uploads/nudafa-netzvorschlaege-buergerinnen',
        layers: [
          {
            id: 'nudafa-netzvorschlaege-buergerinnen',
            filter: [
              'match',
              ['get', 'layer'],
              ['Hauptachsen', 'radnetz_zesplus_vers__4'],
              true,
              false,
            ],
            type: 'line',
            paint: {
              'line-color': [
                'match',
                ['get', 'layer'],
                ['osm_routen'],
                'hsl(88, 89%, 36%)',
                ['RSV_Teltowkanalroute', 'RSV_Y-Trasse'],
                'hsl(278, 92%, 47%)',
                ['radnetz_zesplus_vers__4', 'Hauptachsen'],
                '#ffd53d',
                ['Idealtrasse RVK LDS 2030', 'Alternativtrasse  RVK LDS 2030'],
                '#e6e5e6',
                ['radkonzept schoenefeld'],
                'hsl(178, 81%, 48%)',
                ['Radnetz_berlin'],
                'hsla(229, 100%, 38%, 0)',
                ['Vorrangnetz_berlin'],
                'hsl(203, 100%, 38%)',
                ['LDS_zielnetz'],
                '#ffd53d',
                'hsl(48, 89%, 36%)',
              ],
              'line-opacity': ['interpolate', ['linear'], ['zoom'], 0, 0, 10, 0.6],
              'line-width': [
                'interpolate',
                ['linear'],
                ['zoom'],
                11,
                ['match', ['get', 'layer'], ['Hauptachsen', 'none'], 2, 1],
                18,
                ['match', ['get', 'layer'], ['', 'Hauptachsen'], 30, 15],
              ],
              'line-dasharray': [2, 0],
            },
          },
        ],
      },
      'ziel-zwangspunkte': {
        pmTilesUrl: 'https://radverkehrsatlas.de/api/uploads/nudafa-ziel-zwangspunkte',
        layers: [
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
    legends: <LegendZielnetz />,
  },
}
