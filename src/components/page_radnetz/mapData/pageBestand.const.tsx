import { LegendBestand } from '../legends/LegendBestand'
import type { MapDataAndLegend } from './mapDataAndLegend.const'

export const pageBestand: MapDataAndLegend = {
  // todo: check if this matching is correct
  // "Bestand" in table = "Radinfrastruktur" in map / former website ?
  bestand: {
    sources: {
      roads: {
        pmTilesUrl: 'https://radverkehrsatlas.de/api/uploads/website-nudafa-roads',
        layers: [
          {
            layout: {},
            filter: [
              'all',
              [
                'match',
                ['get', 'road'],
                ['residential', 'living_street', 'bicycle_road'],
                true,
                false,
              ],
              ['match', ['get', 'smoothness'], ['bad', 'very_bad', 'intermediate'], false, true],
            ],
            type: 'line',
            id: 'fahradgeeigneteNebenstrassen',
            paint: {
              'line-width': ['interpolate', ['linear'], ['zoom'], 0, 0.5, 11.36, 0.5, 22, 5],
              'line-opacity': 0.71,
              'line-color': ['match', ['get', 'surface'], ['asphalt'], '#059cfa', '#049f9f'],
            },
          },
        ],
      },
      bikelanes: {
        pmTilesUrl: 'https://radverkehrsatlas.de/api/uploads/website-nudafa-bikelanes',
        layers: [
          {
            id: 'needsClarification',
            type: 'line',
            paint: {
              'line-width': ['interpolate', ['linear'], ['zoom'], 8, 1.5, 10, 1.5, 14, 2, 16, 3],
              'line-color': '#a97bea',
              'line-dasharray': [2.5, 0.5],
            },
            filter: ['match', ['get', 'category'], ['needsClarification'], true, false],
          },
          {
            id: 'Gehweg Rad frei',
            type: 'line',
            paint: {
              'line-width': ['interpolate', ['linear'], ['zoom'], 8, 1.5, 10, 1.5, 14, 2, 16, 3],
              'line-dasharray': [2, 2],
              'line-color': '#9fb9f9',
              'line-offset': ['interpolate', ['linear'], ['zoom'], 12, 0, 15, -1],
            },
            filter: [
              'match',
              ['get', 'category'],
              [
                'footwayBicycleYes_isolated',
                'pedestrianAreaBicycleYes',
                'footwayBicycleYes_adjoining',
                'footwayBicycleYes_adjoiningOrIsolated',
              ],
              true,
              false,
            ],
          },
          {
            id: 'Fuehrung mit Kfz-explizit',
            type: 'line',
            paint: {
              'line-width': ['interpolate', ['linear'], ['zoom'], 8, 1.5, 10, 1.5, 14, 2, 16, 3],
              'line-dasharray': [3, 1],
              'line-color': '#0098f0',
              'line-offset': ['interpolate', ['linear'], ['zoom'], 12, 0, 15, -1],
            },
            filter: [
              'match',
              ['get', 'category'],
              [
                'sharedMotorVehicleLane',
                'bicycleRoad_vehicleDestination',
                'sharedBusLaneBusWithBike',
                'explicitSharedLaneButNoSignage',
                'livingStreet',
              ],
              true,
              false,
            ],
          },
          {
            id: 'Fuehrung mit Fussverkehr',
            type: 'line',
            paint: {
              'line-width': ['interpolate', ['linear'], ['zoom'], 8, 1.5, 10, 1.5, 14, 2, 16, 3],
              'line-dasharray': [3, 1],
              'line-color': '#174ed9',
              'line-offset': ['interpolate', ['linear'], ['zoom'], 12, 0, 15, -1],
            },
            filter: [
              'match',
              ['get', 'category'],
              [
                'footAndCyclewayShared_isolated',
                'footAndCyclewayShared_adjoining',
                'footAndCyclewayShared_adjoiningOrIsolated',
              ],
              true,
              false,
            ],
          },
          {
            id: 'Fuehrung eigenstaendig auf Fahrbahn',
            type: 'line',
            paint: {
              'line-width': ['interpolate', ['linear'], ['zoom'], 8, 1.5, 10, 1.5, 14, 2, 16, 3],
              'line-color': '#0098f0',
              'line-offset': ['interpolate', ['linear'], ['zoom'], 12, 0, 15, -1],
            },
            filter: [
              'match',
              ['get', 'category'],
              [
                'cyclewayOnHighway_exclusive',
                'cyclewayOnHighwayBetweenLanes',
                'cyclewayLink',
                'crossing',
                'cyclewayOnHighway_advisory',
                'cyclewayOnHighway_advisoryOrExclusive',
              ],
              true,
              false,
            ],
          },
          {
            id: 'fuehrung baul. abgesetzt von Kfz',
            type: 'line',
            paint: {
              'line-width': ['interpolate', ['linear'], ['zoom'], 8, 1.5, 10, 1.5, 14, 2, 16, 3],
              'line-color': '#174ed9',
              'line-offset': ['interpolate', ['linear'], ['zoom'], 12, 0, 15, -1],
            },
            filter: [
              'match',
              ['get', 'category'],
              [
                'footAndCyclewaySegregated_adjoining',
                'footAndCyclewaySegregated_adjoiningOrIsolated',
                'cycleway_isolated',
                'cycleway_adjoining',
                'bicycleRoad',
                'footAndCyclewaySegregated_isolated',
                'cycleway_adjoiningOrIsolated',
              ],
              true,
              false,
            ],
          },
        ],
      },
    },
    legends: <LegendBestand />,
    colorClass: 'border-l-[#F5E4B7]',
  },
}
