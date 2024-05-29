import { LegendKomfort } from '../legends/LegendKomfort'
import type { MapDataAndLegend } from './mapDataAndLegend.const'

export const pageKomfort: MapDataAndLegend = {
  komfort: {
    sources: {
      roads: {
        pmTilesUrl: 'https://radverkehrsatlas.de/api/uploads/website-nudafa-roads',
        layers: [],
      },
    },
    legends: <LegendKomfort />,
  },
}
