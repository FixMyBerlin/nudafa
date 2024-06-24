import { LegendSicherheit } from '../legends/LegendSicherheit'
import type { MapDataAndLegend } from './mapDataAndLegend.const'

export const pageSicherheit: MapDataAndLegend = {
  sicherheit: {
    sources: {
      schulwege: {
        pmTilesUrl: 'https://radverkehrsatlas.de/api/uploads/nudafa-schulwege',
        layers: [
          {
            id: 'nudafa-schulwege',
            type: 'line',
            paint: {
              'line-color': '#246ef0',
              'line-opacity': 0.5,
            },
          },
        ],
      },
      unfaelle: {
        pmTilesUrl: 'https://radverkehrsatlas.de/api/uploads/nudafa-unfaelle',
        layers: [
          {
            id: 'nudafa-unfaelle',
            type: 'circle',
            paint: {
              'circle-radius': ['match', ['get', 'Kat'], ['1'], 5, ['2'], 4, 2],
              'circle-color': [
                'match',
                ['get', 'Kat'],
                ['1'],
                '#eb00c7',
                ['2'],
                '#fe2f2f',
                ['3'],
                '#fe7e16',
                '#fbe074',
              ],
              'circle-stroke-width': 0.5,
              'circle-stroke-color': '#ffffff',
            },
          },
        ],
      },
      gefahrenstellen: {
        pmTilesUrl: 'https://radverkehrsatlas.de/api/uploads/nudafa-schulwege-gefahrstellen',
        layers: [
          {
            id: 'nudafa-gefahrstellen',
            layout: {
              'line-cap': 'round',
            },
            type: 'line',
            paint: {
              'line-color': 'rgba(240, 117, 36, 0.31)',
              'line-width': 9,
            },
          },
        ],
      },
      poi: {
        pmTilesUrl: 'https://radverkehrsatlas.de/api/uploads/website-nudafa-poi',
        layers: [
          {
            minzoom: 11,
            layout: {
              'text-field': ['to-string', ['get', 'name']],
              'text-font': ['Open Sans Regular', 'Arial Unicode MS Regular'],
              'text-size': ['interpolate', ['linear'], ['zoom'], 13, 9, 15, 11],
              'text-anchor': 'top',
              'text-offset': [0, 0.5],
            },
            filter: ['has', 'formalEducation'],
            type: 'symbol',
            id: 'education-classification-edu-names',
            paint: {
              'text-halo-color': 'hsla(0, 6%, 97%, 0.91)',
              'text-halo-width': 1,
              'text-translate': [0, 8],
              'text-translate-anchor': 'viewport',
              'text-opacity': ['interpolate', ['linear'], ['zoom'], 13.9, 0, 14, 0.7],
              'text-color': [
                'match',
                ['get', 'formalEducation'],
                ['college', 'school'],
                '#0e53b4',
                ['kindergarten', 'childcare'],
                '#157784',
                ['university', 'research_institute'],
                '#7c18f7',
                '#000000',
              ],
            },
          },
          {
            minzoom: 11,
            filter: ['has', 'formalEducation'],
            type: 'circle',
            id: 'education-classification-edu',
            paint: {
              'circle-stroke-color': '#ffffff',
              'circle-opacity': ['interpolate', ['linear'], ['zoom'], 9, 0, 9.2, 1],
              'circle-stroke-width': ['interpolate', ['linear'], ['zoom'], 10, 0.8, 12, 1.5],
              'circle-translate': [0, 0],
              'circle-translate-anchor': 'viewport',
              'circle-stroke-opacity': ['interpolate', ['linear'], ['zoom'], 10, 0, 11, 1],
              'circle-color': [
                'match',
                ['get', 'formalEducation'],
                ['childcare', 'kindergarten'],
                '#19a1b3',
                ['college', 'school'],
                '#1269e2',
                ['university', 'research_institute'],
                '#b070ff',
                '#000000',
              ],
              'circle-radius': [
                'interpolate',
                ['linear'],
                ['zoom'],
                11,
                ['match', ['get', 'amenity'], ['kindergarten', 'childcare'], 1.3, 1.8],
                15,
                ['match', ['get', 'amenity'], ['kindergarten', 'childcare'], 5, 7],
              ],
            },
          },
          {
            maxzoom: 11.1,
            filter: ['has', 'formalEducation'],
            type: 'heatmap',
            id: 'pois-heat copy',
            paint: {
              'heatmap-color': [
                'interpolate',
                ['linear'],
                ['heatmap-density'],
                0,
                'rgba(18, 105, 226, 0)',
                0.1,
                'rgba(18, 105, 226, 0.1)',
                0.3,
                'rgba(18, 105, 226, 0.4)',
                0.5,
                'rgba(18, 105, 226, 0.6)',
                0.7,
                'rgba(18, 105, 226, 0.7)',
                1,
                '#1269e2',
              ],
              'heatmap-opacity': [
                'interpolate',
                ['linear'],
                ['zoom'],
                7.5,
                0,
                7.7,
                1,
                11,
                1,
                11.1,
                0,
              ],
              'heatmap-weight': 3,
              'heatmap-radius': ['interpolate', ['linear'], ['zoom'], 10, 3, 12, 7],
            },
          },
        ],
      },
    },
    legends: <LegendSicherheit />,
    colorClass: 'border-l-[#E4B130]',
  },
}
