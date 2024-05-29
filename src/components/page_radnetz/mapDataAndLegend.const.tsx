import type {
  CircleLayerSpecification,
  FillLayerSpecification,
  HeatmapLayerSpecification,
  LineLayerSpecification,
  SymbolLayerSpecification,
} from 'maplibre-gl'
import { LegendBestand } from './legends/LegendBestand'
import { LegendKomfort } from './legends/LegendKomfort'
import { LegendKontext } from './legends/LegendKontext'
import { LegendQuellenUndZiele } from './legends/LegendQuellenUndZiele'
import { LegendSicherheit } from './legends/LegendSicherheit'
import { LegendStrassentypen } from './legends/LegendStrassentypen'
import { LegendZielnetz } from './legends/LegendZielnetz'

export type MapDataAndLegend = {
  // Page `slug`
  [pageSlug: string]: {
    sources: {
      // Source `id`
      [sourceId: string]: {
        pmTilesUrl: string
        // Process:
        // 1. Go to https://studio.mapbox.com/styles/hejco/cl6gf6d0v000n14mhzosikw45/edit/
        // 2. Use "Copy selected layer JSON"
        // 3. Paste and remove wrapping array + `source`, `source-layer` properties
        // Styling:
        // Layer list, copied from Mapbox
        // Last item in list shows on the top of the layer stack
        layers: (
          | Omit<FillLayerSpecification, 'source' | 'source-layer' | 'metadata'>
          | Omit<LineLayerSpecification, 'source' | 'source-layer' | 'metadata'>
          | Omit<SymbolLayerSpecification, 'source' | 'source-layer' | 'metadata'>
          | Omit<CircleLayerSpecification, 'source' | 'source-layer' | 'metadata'>
          | Omit<HeatmapLayerSpecification, 'source' | 'source-layer' | 'metadata'>
        )[]
      }
    }
    legends: JSX.Element | null
  }
}

export const mapDataAndLegend: MapDataAndLegend = {
  'quellen-und-ziele': {
    sources: {
      places: {
        pmTilesUrl: 'https://radverkehrsatlas.de/api/uploads/website-nudafa-places',
        layers: [],
      },
      poi: {
        pmTilesUrl: 'https://radverkehrsatlas.de/api/uploads/website-nudafa-poi',
        layers: [],
      },
      landuse: {
        pmTilesUrl: 'https://radverkehrsatlas.de/api/uploads/website-nudafa-landuse',
        layers: [],
      },
      'public-transport': {
        pmTilesUrl: 'https://radverkehrsatlas.de/api/uploads/website-nudafa-public-transport',
        layers: [],
      },
      'barrier-areas': {
        pmTilesUrl: 'https://radverkehrsatlas.de/api/uploads/website-nudafa-barrier-areas',
        layers: [],
      },
      'barrier-lines': {
        pmTilesUrl: 'https://radverkehrsatlas.de/api/uploads/website-nudafa-barrier-lines',
        layers: [],
      },
      buildings: {
        pmTilesUrl: 'https://radverkehrsatlas.de/api/uploads/website-nudafa-buildings',
        layers: [
          {
            id: 'buildings-black',
            type: 'fill',
            paint: {
              'fill-color': 'black',
              'fill-opacity': ['interpolate', ['linear'], ['zoom'], 15.9, 1, 16, 0],
            },
          },
        ],
      },
    },
    legends: <LegendQuellenUndZiele />,
  },
  komfort: {
    sources: {
      roads: {
        pmTilesUrl: 'https://radverkehrsatlas.de/api/uploads/website-nudafa-roads',
        layers: [],
      },
    },
    legends: <LegendKomfort />,
  },
  // todo: check if this matching is correct
  // "Kontext" in table = "Netze und Planungen" in map / former website ?
  kontext: {
    sources: {
      'vorhandene-netze': {
        pmTilesUrl: 'https://radverkehrsatlas.de/api/uploads/nudafa-netzvorschlaege-buergerinnen',
        layers: [
          {
            id: 'Vorhandene-netze_uebergeordnet',
            minzoom: 9,
            filter: [
              'match',
              ['get', 'layer'],
              [
                // Diese Filter waren in Mapbox zustäzlich, aber nicht im Atlas:
                // 'RSV_Teltowkanalroute',
                // 'RSV BER-KW varianten',
                // Diese Filter kommen aus dem Atlas:
                'Hauptachsen',
                'radnetz_zesplus_vers__4',
                'LDS_zielnetz',
                'Schulwege_Rad',
                'Radnetz_berlin',
                'Schulwege_UnsichereStellen',
                'Schulwege_ZuFuss',
              ],
              false,
              true,
            ],
            type: 'line',
            paint: {
              'line-color': [
                'match',
                ['get', 'layer'],
                ['osm_routen'],
                'hsl(88, 89%, 36%)',
                ['RSV_Teltowkanalroute', 'RSV_Y-Trasse'],
                'hsl(278, 92%, 47%)',
                ['radnetz_zesplus_vers__4', 'Hauptachsen'],
                '#ffbc0a',
                ['Idealtrasse RVK LDS 2030', 'Alternativtrasse  RVK LDS 2030'],
                '#f816f8',
                ['radkonzept schoenefeld'],
                'hsl(178, 81%, 48%)',
                ['Radnetz_berlin'],
                'hsla(229, 100%, 38%, 0)',
                ['Vorrangnetz_berlin'],
                'hsl(203, 100%, 38%)',
                ['LDS_zielnetz'],
                'hsl(48, 93%, 53%)',
                'hsl(48, 89%, 36%)',
              ],
              'line-opacity': ['interpolate', ['linear'], ['zoom'], 0, 0, 10, 0.9],
              'line-width': [
                'interpolate',
                ['linear'],
                ['zoom'],
                10,
                [
                  'match',
                  ['get', 'layer'],
                  ['Hauptachsen', 'osm_routen'],
                  3,
                  ['RSV_Y-Trasse', 'RSV_Teltowkanalroute', 'Idealtrasse RVK LDS 2030'],
                  5,
                  1.5,
                ],
                22,
                1,
              ],
              'line-dasharray': [2, 0],
            },
          },
        ],
      },
    },
    legends: <LegendKontext />,
  },
  // todo: check if this matching is correct
  // "Bestand" in table = "Radinfrastruktur" in map / former website ?
  bestand: {
    sources: {
      bikelanes: {
        pmTilesUrl: 'https://radverkehrsatlas.de/api/uploads/website-nudafa-bikelanes',
        layers: [],
      },
      roads: {
        pmTilesUrl: 'https://radverkehrsatlas.de/api/uploads/website-nudafa-roads',
        layers: [],
      },
    },
    legends: <LegendBestand />,
  },
  sicherheit: {
    sources: {
      schulwege: {
        pmTilesUrl: 'https://radverkehrsatlas.de/api/uploads/nudafa-schulwege',
        layers: [],
      },
      unfaelle: {
        pmTilesUrl: 'https://radverkehrsatlas.de/api/uploads/nudafa-unfaelle',
        layers: [],
      },
      gefahrenstellen: {
        pmTilesUrl: 'https://radverkehrsatlas.de/api/uploads/nudafa-schulwege-gefahrstellen',
        layers: [],
      },
    },
    legends: <LegendSicherheit />,
  },
  strassentypen: {
    sources: {
      roads: {
        pmTilesUrl: 'https://radverkehrsatlas.de/api/uploads/website-nudafa-roads',
        layers: [],
      },
    },
    legends: <LegendStrassentypen />,
  },
  zielnetz: {
    sources: {
      buergerinnen: {
        pmTilesUrl: 'https://radverkehrsatlas.de/api/uploads/nudafa-netzvorschlaege-buergerinnen',
        layers: [],
      },
    },
    legends: <LegendZielnetz />,
  },
  // missing legends:
  // massnahmen
  // bedarfe
  luftliniennetz: {
    sources: {
      combined: {
        pmTilesUrl: 'https://radverkehrsatlas.de/api/uploads/nudafa-combined',
        layers: [
          // Zielpunkte
          // Luftlinien
          // Zwangspunkte??
        ],
      },
    },
    legends: null, // not specified
  },
}
