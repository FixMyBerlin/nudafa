import type { MapDataAndLegend } from '../mapDataAndLegend.const'

export const formalEducation: MapDataAndLegend[number]['sources'][number]['layers'] = [
  {
    id: 'POIs-Schulen',
    type: 'symbol',
    paint: {
      'icon-opacity': ['interpolate', ['linear'], ['zoom'], 11, 0, 11.1, 1],
    },
    layout: {
      'icon-image': [
        'match',
        ['get', 'formalEducation'],
        ['school', 'college', 'university'],
        'school-pin-nudafa',
        ['childcare', 'kindergarten'],
        'kita-pin-nudafa 2',
        '',
      ],
      'icon-size': [
        'match',
        ['get', 'formalEducation'],
        ['school', 'college', 'university'],
        0.6,
        ['childcare', 'kindergarten'],
        1,
        0.6,
      ],
      'icon-allow-overlap': true,
    },
    filter: ['has', 'formalEducation'],
  },
]
