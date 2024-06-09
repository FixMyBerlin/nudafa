import { LegendMassnahmen } from '../legends/LegendMassnahmen'
import type { MapDataAndLegend } from './mapDataAndLegend.const'

export const pageMassnahmen: MapDataAndLegend = {
  massnahmen: {
    sources: {
      combined: {
        pmTilesUrl: 'https://radverkehrsatlas.de/api/uploads/nudafa-combined',
        layers: [],
      },
    },
    legends: <LegendMassnahmen />,
  },
}
