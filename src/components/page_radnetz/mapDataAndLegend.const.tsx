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
  [pageSlug: string]: {
    sources: {
      [sourceId: string]: {
        pmTilesUrl: string
        // Process:
        // 1. Go to https://studio.mapbox.com/styles/hejco/cl6gf6d0v000n14mhzosikw45/edit/
        // 2. Use "Copy selected layer JSON"
        // 3. Paste and remove wrapping array + `source`, `source-layer` properties
        layers: (
          | Omit<FillLayerSpecification, 'source' | 'source-layer' | 'metadata'>
          | Omit<LineLayerSpecification, 'source' | 'source-layer' | 'metadata'>
          | Omit<SymbolLayerSpecification, 'source' | 'source-layer' | 'metadata'>
          | Omit<CircleLayerSpecification, 'source' | 'source-layer' | 'metadata'>
          | Omit<HeatmapLayerSpecification, 'source' | 'source-layer' | 'metadata'>
        )[]
      }
    }[]
    legends: JSX.Element
  }
}

export const mapDataAndLegend: MapDataAndLegend = {
  // Page `slug`
  'quellen-und-ziele': {
    sources: [
      {
        // Source `id`
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
      },
    ],
    legends: <LegendQuellenUndZiele />,
  },
  komfort: {
    sources: [],
    legends: <LegendKomfort />,
  },
  // todo: check if this matching is correct
  // "Kontext" in table = "Netze und Planungen" in map / former website ?
  kontext: {
    sources: [],
    legends: <LegendKontext />,
  },
  // todo: check if this matching is correct
  // "Bestand" in table = "Radinfrastruktur" in map / former website ?
  bestand: {
    sources: [],
    legends: <LegendBestand />,
  },
  sicherheit: {
    sources: [],
    legends: <LegendSicherheit />,
  },
  strassentypen: {
    sources: [],
    legends: <LegendStrassentypen />,
  },
  zielnetz: {
    sources: [],
    legends: <LegendZielnetz />,
  },
  // missing legends:
  // massnahmen
  // bedarfe
  // luftliniennetz
}
