import { LegendZielnetz } from '../legends/LegendZielnetz'
import type { MapDataAndLegend } from './mapDataAndLegend.const'

export const pageZielnetz: MapDataAndLegend = {
  zielnetz: {
    sources: {
      buergerinnen: {
        pmTilesUrl: 'https://radverkehrsatlas.de/api/uploads/nudafa-netzvorschlaege-buergerinnen',
        layers: [],
      },
    },
    legends: <LegendZielnetz />,
  },
}
