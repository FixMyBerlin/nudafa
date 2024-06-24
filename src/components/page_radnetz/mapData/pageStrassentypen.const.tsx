import { LegendStrassentypen } from '../legends/LegendStrassentypen'
import type { MapDataAndLegend } from './mapDataAndLegend.const'

export const pageStrassentypen: MapDataAndLegend = {
  strassentypen: {
    sources: {
      'roads-legacy': {
        pmTilesUrl: 'https://radverkehrsatlas.de/api/uploads/website-nudafa-roads-legacy',
        layers: [
          {
            id: 'strassentyp',
            type: 'line',
            paint: {
              'line-color': [
                'case',
                [
                  'match',
                  ['get', 'FMC:Category:HighwayTypeData:typWohnstrasse'],
                  ['true'],
                  true,
                  false,
                ],
                'hsl(163, 56%, 51%)',
                [
                  'match',
                  ['get', 'FMC:Category:HighwayTypeData:typHauptUndSammelstrasse'],
                  ['true'],
                  true,
                  false,
                ],
                'hsl(50, 90%, 47%)',
                [
                  'match',
                  ['get', 'FMC:Category:HighwayTypeData:typFreiGefuehrt'],
                  ['true'],
                  true,
                  false,
                ],
                'rgba(179, 107, 25, 0.67)',
                [
                  'match',
                  ['get', 'FMC:Category:HighwayTypeData:typAusserorts'],
                  ['true'],
                  true,
                  false,
                ],
                'hsl(18, 97%, 47%)',
                'transparent',
              ],
              'line-opacity': 0.84,
              'line-width': [
                'interpolate',
                ['linear'],
                ['zoom'],
                0,
                [
                  'match',
                  ['get', 'FMC:Category:HighwayTypeData:typFreiGefuehrt'],
                  ['true'],
                  0.4,
                  0.5,
                ],
                11.5,
                [
                  'match',
                  ['get', 'FMC:Category:HighwayTypeData:typFreiGefuehrt'],
                  ['true'],
                  0.8,
                  1.5,
                ],
                22,
                ['match', ['get', 'FMC:Category:HighwayTypeData:typFreiGefuehrt'], ['true'], 2, 4],
              ],
            },
            filter: ['match', ['get', 'FMC:Category:HighwayTypeData'], ['true'], true, false],
          },
          // {
          //   id: 'strassentyp-wohnstrassenonly',
          //   type: 'line',
          //   paint: {
          //     'line-width': ['interpolate', ['linear'], ['zoom'], 0, 0.5, 11.36, 0.5, 22, 5],
          //     'line-color': [
          //       'case',
          //       [
          //         'match',
          //         ['get', 'FMC:Category:HighwayTypeData:typWohnstrasse'],
          //         ['true'],
          //         true,
          //         false,
          //       ],
          //       '#c205a2',
          //       [
          //         'match',
          //         ['get', 'FMC:Category:HighwayTypeData:typHauptUndSammelstrasse'],
          //         ['true'],
          //         true,
          //         false,
          //       ],
          //       'hsl(50, 90%, 47%)',
          //       [
          //         'match',
          //         ['get', 'FMC:Category:HighwayTypeData:typFreiGefuehrt'],
          //         ['true'],
          //         true,
          //         false,
          //       ],
          //       'hsla(313, 18%, 69%, 0.37)',
          //       [
          //         'match',
          //         ['get', 'FMC:Category:HighwayTypeData:typAusserorts'],
          //         ['true'],
          //         true,
          //         false,
          //       ],
          //       'hsl(18, 97%, 47%)',
          //       'transparent',
          //     ],
          //     'line-opacity': 0.38,
          //   },
          //   filter: [
          //     'all',
          //     ['match', ['get', 'FMC:Category:HighwayTypeData'], ['true'], true, false],
          //     [
          //       'match',
          //       ['get', 'FMC:Category:HighwayTypeData:typWohnstrasse'],
          //       ['true'],
          //       true,
          //       false,
          //     ],
          //     [
          //       'match',
          //       ['get', 'FMC:Category:SurfaceData:ScopeMainWay'],
          //       ['very_bad', 'bad'],
          //       false,
          //       true,
          //     ],
          //   ],
          // },
        ],
      },
    },
    legends: <LegendStrassentypen />,
    colorClass: 'border-l-[#F5E4B7]',
  },
}
