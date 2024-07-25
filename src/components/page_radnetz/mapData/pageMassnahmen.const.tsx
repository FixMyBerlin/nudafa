import { LegendMassnahmen } from '../legends/LegendMassnahmen'
import type { MapDataAndLegend } from './mapDataAndLegend.const'

export const pageMassnahmen: MapDataAndLegend = {
  massnahmen: {
    sources: {
      massnahmen: {
        pmTilesUrl: 'https://radverkehrsatlas.de/api/uploads/nudafa-massnahmen',
        layers: [
          {
            id: 'massnahmen alle',
            layout: {
              'line-cap': 'round',
            },
            type: 'line',
            paint: {
              'line-color': [
                'match',
                ['get', 'Metadaten_V2_Zuständige Kommune'],
                ['W'],
                '#4abbf7',
                ['Z'],
                '#25a78d',
                ['E'],
                '#72ba5a',
                [' S '],
                '#eb3398',
                '#5b11ee',
              ],
              'line-width': ['interpolate', ['linear'], ['zoom'], 8, 1, 12, 5],
              'line-opacity': 0.77,
            },
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
                '#000000',
                ['3_radschnellverbindung'],
                '#000000',
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
                  4,
                  ['2_hauptroute'],
                  3,
                  2,
                ],
              ],
              'line-dasharray': [2, 1],
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
