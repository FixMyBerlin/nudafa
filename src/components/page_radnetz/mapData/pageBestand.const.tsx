import { LegendBestand } from '../legends/LegendBestand'
import type { MapDataAndLegend } from './mapDataAndLegend.const'

export const pageBestand: MapDataAndLegend = {
  bestand: {
    sources: {
      roads: {
        pmTilesUrl: 'https://radverkehrsatlas.de/api/uploads/website-nudafa-roads',
        layers: [
          {
            id: 'Oberflaeche schlecht',
            filter: [
              'all',
              [
                'match',
                ['get', 'road'],
                ['residential', 'living_street', 'bicycle_road'],
                true,
                false,
              ],
              ['match', ['get', 'smoothness'], ['bad', 'very_bad'], true, false],
            ],
            type: 'line',
            paint: {
              'line-width': ['interpolate', ['linear'], ['zoom'], 0, 0.5, 11.36, 1, 22, 5],
              'line-color': '#fa7575',
              'line-dasharray': [2, 2],
            },
          },
          {
            id: 'Oberflaeche gut oder sehr gut',
            filter: [
              'all',
              ['match', ['get', 'road'], ['residential', 'bicycle_road'], true, false],
              ['match', ['get', 'smoothness'], ['bad', 'very_bad', 'intermediate'], false, true],
            ],
            type: 'line',
            paint: {
              'line-width': ['interpolate', ['linear'], ['zoom'], 0, 0.5, 11.36, 0.5, 22, 5],
              'line-opacity': 0.71,
              'line-color': '#059cfa',
            },
          },
        ],
      },
      bikelanes: {
        pmTilesUrl: 'https://radverkehrsatlas.de/api/uploads/website-nudafa-bikelanes',
        layers: [
          {
            id: 'nudafa-bikelanes-seperateinfra',
            type: 'line',
            filter: [
              'match',
              ['get', 'category'],
              [
                'sharedBusLaneBusWithBike',
                'bicycleRoad_vehicleDestination',
                'cyclewayLink',
                'crossing',
                'cyclewayOnHighwayBetweenLanes',
                'cyclewayOnHighway_exclusive',
                'cyclewayOnHighway_advisoryOrExclusive',
                'cycleway_isolated',
                'bicycleRoad',
                'cycleway_adjoining',
                'cycleway_adjoiningOrIsolated',
                'footAndCyclewaySegregated_adjoining',
                'footAndCyclewaySegregated_adjoiningOrIsolated',
                'cyclewayOnHighway_advisory',
              ],
              true,
              false,
            ],
            paint: {
              'line-color': '#031ab5',
              'line-width': ['interpolate', ['linear'], ['zoom'], 0, 1, 11.36, 1.5, 22, 6],
              'line-offset': 1.5,
            },
          },
          {
            id: 'nudafa-bikelanes-fuehrungmitfuss',
            type: 'line',
            paint: {
              'line-color': [
                'match',
                ['get', 'category'],
                ['livingStreet'],
                '#92a0fc',
                ['needsClarification'],
                '#a46bfa',
                '#031ab5',
              ],
              'line-dasharray': [2, 1],
              'line-offset': 1.5,
              'line-width': ['interpolate', ['linear'], ['zoom'], 0, 1, 11.36, 1.5, 22, 6],
            },
            filter: [
              'match',
              ['get', 'category'],
              [
                'sharedBusLaneBusWithBike',
                'bicycleRoad_vehicleDestination',
                'cyclewayLink',
                'crossing',
                'cyclewayOnHighwayBetweenLanes',
                'cyclewayOnHighway_exclusive',
                'cyclewayOnHighway_advisoryOrExclusive',
                'cycleway_isolated',
                'bicycleRoad',
                'cycleway_adjoining',
                'cycleway_adjoiningOrIsolated',
                'footAndCyclewaySegregated_adjoining',
                'footAndCyclewaySegregated_adjoiningOrIsolated',
                'cyclewayOnHighway_advisory',
              ],
              false,
              true,
            ],
          },
        ],
      },
    },
    legends: <LegendBestand />,
    colorClass: 'border-l-[#F5E4B7]',
  },
}
