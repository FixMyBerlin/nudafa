import { LegendMassnahmen } from '../legends/LegendMassnahmen'
import type { MapDataAndLegend } from './mapDataAndLegend.const'

export const pageMassnahmen: MapDataAndLegend = {
  massnahmen: {
    sources: {
      massnahmen: {
        pmTilesUrl: 'https://radverkehrsatlas.de/api/uploads/nudafa-massnahmen',
        layers: [],
      },
    },
    legends: <LegendMassnahmen />,
    colorClass: 'border-l-[#C6E6D5]',
  },
}
