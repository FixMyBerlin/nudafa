import { mapDataAndLegend } from './mapDataAndLegend.const'

type Props = {
  articleSlug: string
}

export const RadnetzLegend = ({ articleSlug }: Props) => {
  const legends = mapDataAndLegend[articleSlug]?.legends
  if (!legends) return null

  return <div className="flex-grow bg-gray-50 p-4">{legends}</div>
}
