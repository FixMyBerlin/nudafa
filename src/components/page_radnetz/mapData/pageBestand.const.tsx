import { LegendBestand } from '../legends/LegendBestand'
import type { MapDataAndLegend } from './mapDataAndLegend.const'

export const pageBestand: MapDataAndLegend = {
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
}
