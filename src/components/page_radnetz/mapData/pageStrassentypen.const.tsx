import { LegendStrassentypen } from '../legends/LegendStrassentypen'
import type { MapDataAndLegend } from './mapDataAndLegend.const'

export const pageStrassentypen: MapDataAndLegend = {
  strassentypen: {
    sources: {
      'roads-oneway': {
        pmTilesUrl: 'https://tilda-geo.de/api/uploads/website-nudafa-roads',
        layers: [
          {
            type: 'line',
            id: 'roads-oneway',
            minzoom: 13,
            filter: [
              'all',
              [
                'any',
                ['match', ['get', 'road_oneway'], ['yes', 'implicit_yes'], true, false],
                ['match', ['get', 'road_oneway:bicycle'], ['yes', 'implicit_yes'], true, false],
              ],
              [
                'match',
                ['get', 'road'],
                [
                  'motorway',
                  'motorway_link',
                  'primary',
                  'primary_link',
                  'trunk_link',
                  'trunk',
                  'secondary_link',
                  'secondary',
                ],
                false,
                true,
              ],
            ],
            paint: {
              'line-pattern': 'arrow-grey-gap(1)',
              'line-width': ['interpolate', ['linear'], ['zoom'], 13, 5, 15, 8, 22, 13],
              'line-opacity': 0.8,
            },
          },
        ],
      },
      'roads-legacy': {
        pmTilesUrl: 'https://tilda-geo.de/api/uploads/website-nudafa-roads-legacy',
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
        ],
      },
    },
    legends: <LegendStrassentypen />,
    colorClass: 'border-l-[#F5E4B7]',
  },
}
