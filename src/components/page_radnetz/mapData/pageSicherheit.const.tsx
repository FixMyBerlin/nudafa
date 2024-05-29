import { LegendSicherheit } from '../legends/LegendSicherheit'
import type { MapDataAndLegend } from './mapDataAndLegend.const'

export const pageSicherheit: MapDataAndLegend = {
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
}
