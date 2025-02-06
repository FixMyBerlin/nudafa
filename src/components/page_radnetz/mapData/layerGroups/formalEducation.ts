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
      'icon-size': 0.7,
      'icon-allow-overlap': true,
    },
    filter: ['has', 'formalEducation'],
  },
]
