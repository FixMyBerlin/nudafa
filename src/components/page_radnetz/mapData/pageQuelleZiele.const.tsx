import { LegendQuellenUndZiele } from '../legends/LegendQuellenUndZiele'
import { formalEducation } from './layerGroups/formalEducation'
import { placesCirlce } from './layerGroups/placesCircle'
import type { MapDataAndLegend } from './mapDataAndLegend.const'

export const pageQuelleZiele: MapDataAndLegend = {
  'quellen-und-ziele': {
    sources: {
      // Top entry here is bottom layer on the map
      buildings: {
        pmTilesUrl: 'https://radverkehrsatlas.de/api/uploads/website-nudafa-buildings',
        layers: [
          {
            id: 'buildings-black',
            type: 'fill',
            paint: {
              'fill-color': 'black',
              'fill-opacity': ['interpolate', ['linear'], ['zoom'], 12, 0, 13, 1, 15.9, 1, 16, 0],
            },
          },
        ],
      },
      landuse: {
        pmTilesUrl: 'https://radverkehrsatlas.de/api/uploads/website-nudafa-landuse',
        layers: [
          {
            id: 'landuse_residential-commercial -outlines',
            type: 'line',
            minzoom: 9,
            paint: {
              'line-color': '#8d8b8b',
              'line-width': 0.7,
              'line-opacity': ['interpolate', ['linear'], ['zoom'], 9, 0.3, 10, 1],
            },
          },
          {
            id: 'landuse_residential-commercial',
            type: 'fill',
            minzoom: 9,
            paint: {
              'fill-color': [
                'match',
                ['get', 'landuse'],
                ['residential'],
                '#ffe0d7',
                [
                  'commercial',
                  'industrial',
                  'retail',
                  'brownfield',
                  'civic',
                  'garages',
                  'allotments',
                  'farmyard',
                  'construction',
                  'cemetery',
                  'religious',
                ],
                '#bed4e0',
                'hsla(17, 93%, 81%, 0)',
              ],
              'fill-opacity': ['interpolate', ['linear'], ['zoom'], 8.5, 0.5, 11.5, 0.2, 13.5, 0.1],
            },
          },
        ],
      },
      'barrier-areas': {
        pmTilesUrl: 'https://radverkehrsatlas.de/api/uploads/website-nudafa-barrier-areas',
        layers: [
          {
            id: 'poibarriers_water_aerodrome',
            type: 'fill',
            filter: ['match', ['geometry-type'], ['Polygon'], true, false],
            paint: {
              'fill-color': [
                'case',
                ['match', ['get', 'waterway'], ['canal', 'drain', 'river'], true, false],
                'hsl(0, 2%, 18%)',
                ['match', ['get', 'aeroway'], ['aerodrome'], true, false],
                'hsl(230, 22%, 27%)',
                'hsl(0, 2%, 18%)',
              ],
              'fill-opacity': 0.36,
              'fill-pattern': 'cross-hatch',
            },
          },
        ],
      },
      'barrier-lines': {
        pmTilesUrl: 'https://radverkehrsatlas.de/api/uploads/website-nudafa-barrier-lines',
        layers: [
          {
            id: 'railway-rail',
            type: 'line',
            filter: ['match', ['get', 'railway'], ['rail'], true, false],
            paint: {
              'line-color': 'hsl(300, 88%, 10%)',
              'line-width': ['interpolate', ['linear'], ['zoom'], 10, 2, 18, 4],
            },
          },
          {
            id: 'railway_rail-white',
            type: 'line',
            filter: ['match', ['get', 'railway'], ['rail'], true, false],
            paint: {
              'line-color': 'hsl(300, 4%, 97%)',
              'line-width': ['interpolate', ['linear'], ['zoom'], 10, 1.7, 18, 3],
              'line-dasharray': [1, 1.2],
            },
          },
          {
            id: 'railway_light_rail',
            type: 'line',
            filter: ['match', ['get', 'railway'], ['light_rail'], true, false],
            paint: {
              'line-color': 'hsl(300, 88%, 10%)',
              'line-width': ['interpolate', ['linear'], ['zoom'], 10, 1, 18, 2],
            },
          },
          {
            id: 'railway_light_rail-white',
            type: 'line',
            filter: ['match', ['get', 'railway'], ['light_rail'], true, false],
            paint: {
              'line-color': 'hsl(300, 4%, 97%)',
              'line-width': ['interpolate', ['linear'], ['zoom'], 10, 0.7, 18, 1.5],
              'line-dasharray': [2, 2],
            },
          },
          {
            id: 'poibarriers_motorway',
            minzoom: 9,
            filter: ['match', ['geometry-type'], ['LineString'], true, false],
            type: 'line',
            paint: {
              'line-color': [
                'match',
                ['get', 'highway'],
                ['motorway', 'motorway_link', 'primary', 'primary_link', 'trunk', 'trunk_link'],
                '#5e5e5e',
                'hsla(0, 90%, 5%, 0)',
              ],
              'line-width': ['interpolate', ['linear'], ['zoom'], 10, 2, 18, 4],
            },
          },
        ],
      },
      places: {
        pmTilesUrl: 'https://radverkehrsatlas.de/api/uploads/website-nudafa-places',
        layers: placesCirlce,
      },
      poi: {
        pmTilesUrl: 'https://radverkehrsatlas.de/api/uploads/website-nudafa-poi',
        layers: [
          {
            id: 'poiShopping-heatmap',
            minzoom: 10.5,
            type: 'heatmap',
            paint: {
              'heatmap-radius': 7,
              'heatmap-color': [
                'interpolate',
                ['linear'],
                ['heatmap-density'],
                0,
                'rgba(0, 0, 255, 0)',
                0.1,
                'hsla(13, 89%, 31%, 0.1)',
                0.3,
                'hsla(13, 89%, 31%, 0.4)',
                0.5,
                'hsla(13, 89%, 31%, 0.6)',
                0.7,
                'hsla(13, 89%, 31%, 0.8)',
                1,
                '#952809',
              ],
              'heatmap-opacity': ['interpolate', ['linear'], ['zoom'], 11.2, 0.7],
            },
          },
          {
            id: 'poiShopCategory',
            type: 'circle',
            minzoom: 13.51,
            paint: {
              'circle-color': [
                'case',
                ['match', ['get', 'category'], ['Freizeit'], true, false],
                '#960854',
                ['match', ['get', 'category'], ['Bildung'], true, false],
                'hsl(235, 86%, 47%)',
                [
                  'match',
                  ['get', 'category'],
                  ['Grundversorgung', 'Besorgungen', 'Einkauf'],
                  true,
                  false,
                ],
                '#e709fb',
                'hsla(116, 48%, 39%, 0.5)',
              ],
            },
          },
          ...formalEducation,
        ],
      },
      'public-transport': {
        pmTilesUrl: 'https://radverkehrsatlas.de/api/uploads/website-nudafa-public-transport',
        layers: [
          {
            id: 'publicTransport',
            type: 'symbol',
            minzoom: 9,
            layout: {
              'icon-allow-overlap': true,
              'icon-image': [
                'match',
                ['get', 'category'],
                ['ferry_station'],
                'ferry',
                ['railway_station'],
                'singapore-mrt-1',
                ['light_rail_station'],
                'S-Bahn_MB',
                ['tram_station'],
                'rail-metro 1',
                ['subway_station'],
                'de-u-bahn',
                '',
              ],
              'icon-ignore-placement': true,
              'icon-padding': 1,
              'text-offset': [5, 0],
              'text-size': 12,
              'icon-size': 0.7,
            },
            paint: {
              'icon-opacity': [
                'step',
                ['zoom'],
                ['match', ['get', 'category'], ['railway_station'], 1, 0],
                8,
                ['match', ['get', 'category'], ['railway_station'], 1, 0],
                10,
                ['match', ['get', 'category'], ['railway_station', 'light_rail_station'], 1, 0],
                10.1,
                ['match', ['get', 'category'], ['railway_station', 'light_rail_station'], 1, 0],
                12.9,
                ['match', ['get', 'category'], ['railway_station', 'light_rail_station'], 1, 0],
                13,
                [
                  'match',
                  ['get', 'category'],
                  [
                    'railway_station',
                    'light_rail_station',
                    'tram_station',
                    'ferry_station',
                    'subway_station',
                  ],
                  1,
                  0,
                ],
              ],
            },
          },
        ],
      },
    },
    legends: <LegendQuellenUndZiele />,
    colorClass: 'border-l-[#F5E4B7]',
  },
}
