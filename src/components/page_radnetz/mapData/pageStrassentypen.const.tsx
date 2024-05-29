import { LegendStrassentypen } from '../legends/LegendStrassentypen'
import type { MapDataAndLegend } from './mapDataAndLegend.const'

export const pageStrassentypen: MapDataAndLegend = {
  strassentypen: {
    sources: {
      roads: {
        pmTilesUrl: 'https://radverkehrsatlas.de/api/uploads/website-nudafa-roads',
        layers: [],
      },
    },
    legends: <LegendStrassentypen />,
  },
}
