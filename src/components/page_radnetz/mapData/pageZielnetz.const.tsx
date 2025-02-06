import { LegendZielnetz } from '../legends/LegendZielnetz'
import type { MapDataAndLegend } from './mapDataAndLegend.const'

export const pageZielnetz: MapDataAndLegend = {
  zielnetz: {
    sources: {
      roads: {
        pmTilesUrl: 'https://radverkehrsatlas.de/api/uploads/website-nudafa-roads',
        layers: [
          {
            id: 'fahradgeeigneteNebenstrassen',
            type: 'line',
            filter: [
              'all',
              ['match', ['get', 'road'], ['residential', 'bicycle_road'], true, false],
              ['match', ['get', 'smoothness'], ['bad', 'very_bad', 'intermediate'], false, true],
            ],
            paint: {
              'line-width': ['interpolate', ['linear'], ['zoom'], 0, 0.5, 11.36, 0.5, 22, 5],
              'line-opacity': 0.71,
              'line-color': '#059cfa',
            },
          },
        ],
      },
      netzentwurf: {
        pmTilesUrl: 'https://radverkehrsatlas.de/api/uploads/nudafa-netzentwurf',
        layers: [
          {
            id: 'nudafa-netzentwurf',
            type: 'line',
            paint: {
              'line-opacity': 0.83,
              'line-color': [
                'match',
                ['get', 'radverkehrsatlas'],
                ['2_hauptroute'],
                '#c205a2',
                ['3_radschnellverbindung'],
                '#106a23',
                '#f278de',
              ],
              'line-width': [
                'interpolate',
                ['linear'],
                ['zoom'],
                9,
                [
                  'match',
                  ['get', 'radverkehrsatlas'],
                  ['3_radschnellverbindung'],
                  3,
                  ['2_hauptroute'],
                  2,
                  1,
                ],
                12,
                [
                  'match',
                  ['get', 'radverkehrsatlas'],
                  ['3_radschnellverbindung'],
                  5,
                  ['2_hauptroute'],
                  4,
                  2,
                ],
              ],
            },
            filter: [
              'all',
              ['match', ['geometry-type'], ['LineString'], true, false],
              [
                'match',
                ['get', 'radverkehrsatlas'],
                ['2_hauptroute', '1_nebenroute', '3_radschnellverbindung'],
                true,
                false,
              ],
            ],
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
    },
    legends: <LegendZielnetz />,
    colorClass: 'border-l-[#977214]',
  },
}
