import { LegendSources } from './legends/Legend'
import { mapDataAndLegend } from './mapData/mapDataAndLegend.const'

type Props = {
  articleSlug: string
  sources?: string
}

export const RadnetzLegend = ({ articleSlug, sources }: Props) => {
  const legends = mapDataAndLegend[articleSlug]?.legends
  if (!legends) return null

  return (
    <div className="flex-grow bg-gray-50 p-4">
      {legends}
      {sources && <LegendSources>Quellen: {sources}</LegendSources>}
    </div>
  )
}
