import type { MapDataAndLegend } from './mapDataAndLegend.const'

export const mapDataBase: MapDataAndLegend[number]['sources'][number] = {
  maskierung: {
    pmTilesUrl: 'https://radverkehrsatlas.de/api/uploads/website-nudafa-maskierung',
    layers: [
      // Layer list, copied from Mapbox
      // Last item in list shows on the top of the layer stack
      {
        id: 'dimmlayer-ZES-Betrachtungsraum',
        type: 'fill',
        paint: {
          'fill-opacity': 0.5,
          'fill-outline-color': 'hsla(0, 0%, 0%, 0)',
        },
      },
      {
        id: 'Border-ZES-Betrachtungsraum',
        type: 'line',
        paint: {
          'line-color': 'hsl(325, 95%, 44%)',
          'line-width': 3,
          'line-opacity': 0.71,
          'line-dasharray': [3, 1, 1, 1],
        },
      },
    ],
  },
  'maskierung-boundary': {
    pmTilesUrl: 'https://radverkehrsatlas.de/api/uploads/website-nudafa-maskierung-boundary',
    layers: [
      {
        id: 'nudafa-maskierung-boundary',
        type: 'line',
        paint: {
          'line-color': 'black',
          'line-width': 3,
          'line-opacity': 0.71,
          'line-dasharray': [3, 1, 1, 1],
        },
      },
    ],
  },
}
