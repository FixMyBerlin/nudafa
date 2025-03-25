import { LegendZielnetz } from '../legends/LegendZielnetz'
import type { MapDataAndLegend } from './mapDataAndLegend.const'

export const pageMassnahmenZielnetz: MapDataAndLegend = {
  massnahmenZielnetz: {
    sources: {
      netzentwurf: {
        pmTilesUrl: 'https://tilda-geo.de/api/uploads/nudafa-netzentwurf',
        layers: [
          {
            id: 'nudafa-netzentwurf',
            type: 'line',
            paint: {
              'line-opacity': 0.3,
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
    },
    legends: <LegendZielnetz />,
    colorClass: 'border-l-[#977214]',
  },
}
