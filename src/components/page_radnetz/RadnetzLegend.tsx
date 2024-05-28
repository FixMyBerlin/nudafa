import { mapDataAndLegend } from './mapDataAndLegend.const'

type Props = {
  slug: string
}

export const RadnetzLegend = ({ slug }: Props) => {
  const legends = mapDataAndLegend[slug]?.legends
  if (!legends) return null

  return <div className="flex-grow bg-gray-50 p-4">{legends}</div>
}
