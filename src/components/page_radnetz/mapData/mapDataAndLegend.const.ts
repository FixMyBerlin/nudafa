import type {
  CircleLayerSpecification,
  FillLayerSpecification,
  HeatmapLayerSpecification,
  LineLayerSpecification,
  SymbolLayerSpecification,
} from 'maplibre-gl'
import { pageBedarfe } from './pageBedarf.const'
import { pageBestand } from './pageBestand.const'
import { pageEinleitung } from './pageEinleitung.const'
import { pageInteraktiveKarte } from './pageInteraktiveKarte.const'
import { pageKomfort } from './pageKomfort.const'
import { pageKontext } from './pageKontext.const'
import { pageLuftliniennetz } from './pageLuftliniennetz.const'
import { pageMassnahmen } from './pageMassnahmen.const'
import { pageQuelleZiele } from './pageQuelleZiele.const'
import { pageSicherheit } from './pageSicherheit.const'
import { pageStrassentypen } from './pageStrassentypen.const'
import { pageZielnetz } from './pageZielnetz.const'

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
        layers: ((
          | Omit<FillLayerSpecification, 'source' | 'source-layer' | 'metadata'>
          | Omit<LineLayerSpecification, 'source' | 'source-layer' | 'metadata'>
          | Omit<SymbolLayerSpecification, 'source' | 'source-layer' | 'metadata'>
          | Omit<CircleLayerSpecification, 'source' | 'source-layer' | 'metadata'>
          | Omit<HeatmapLayerSpecification, 'source' | 'source-layer' | 'metadata'>
        ) & {
          beforeId?: string
        })[]
      }
    }
    legends: JSX.Element | null
    colorClass: string
  }
}

export const mapDataAndLegend: MapDataAndLegend = {
  ...pageEinleitung,
  ...pageKontext,
  ...pageQuelleZiele,
  ...pageKomfort,
  ...pageBestand,
  ...pageSicherheit,
  ...pageStrassentypen,
  ...pageZielnetz,
  ...pageLuftliniennetz,
  ...pageBedarfe,
  ...pageMassnahmen,
  ...pageInteraktiveKarte,
}
