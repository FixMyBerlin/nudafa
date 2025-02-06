import { LegendMassnahmen } from '../legends/LegendMassnahmen'
import type { MapDataAndLegend } from './mapDataAndLegend.const'

export const pageMassnahmen: MapDataAndLegend = {
  massnahmen: {
    sources: {
      massnahmen: {
        pmTilesUrl: 'https://radverkehrsatlas.de/api/uploads/nudafa-massnahmen',
        layers: [
          {
            id: 'massnahmen linien',
            layout: {
              'line-cap': 'round',
            },
            type: 'line',
            paint: {
              'line-color': [
                'match',
                ['get', 'Kommune'],
                ['Wildau'],
                '#4abbf7',
                ['Zeuthen'],
                '#25a78d',
                ['Eichwalde'],
                '#72ba5a',
                ['Schulzendorf'],
                '#eb3398',
                'transparent',
              ],
              'line-width': ['interpolate', ['linear'], ['zoom'], 8, 1, 12, 3],
            },
            filter: ['==', '$type', 'LineString'],
          },
          {
            id: 'massnahmen punkte',
            type: 'circle',
            paint: {
              'circle-color': [
                'match',
                ['get', 'Kommune'],
                ['Wildau'],
                '#4abbf7',
                ['Zeuthen'],
                '#25a78d',
                ['Eichwalde'],
                '#72ba5a',
                ['Schulzendorf'],
                '#eb3398',
                'transparent',
              ],
              'circle-radius': ['interpolate', ['linear'], ['zoom'], 8, 3, 12, 5],
            },
            filter: ['==', '$type', 'Point'],
          },
        ],
      },
      netzentwurf: {
        pmTilesUrl: 'https://radverkehrsatlas.de/api/uploads/nudafa-netzentwurf',
        layers: [
          {
            id: 'nudafa-netzentwurf s_w',
            type: 'line',
            paint: {
              'line-opacity': 0.7,
              'line-color': [
                'match',
                ['get', 'radverkehrsatlas'],
                ['2_hauptroute'],
                '#d60abf',
                ['3_radschnellverbindung'],
                '#d60abf',
                '#7d7d7d',
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
                  2,
                  ['2_hauptroute'],
                  1.5,
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
    },
    legends: <LegendMassnahmen />,
    colorClass: 'border-l-[#C6E6D5]',
  },
}
