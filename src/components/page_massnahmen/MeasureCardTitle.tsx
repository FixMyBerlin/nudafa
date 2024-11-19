import type { MeasureData } from './types'

type Props = {
  title: MeasureData['title']
  id: MeasureData['nudafa_id']
}

export const MeasureCardTitle = ({ title, id }: Props) => {
  return (
    <div className="text-left">
      <h3 className="font-serif font-extrabold leading-snug">{title}</h3>
      <p className="mt-2 break-all text-xs text-gray-500">{id}</p>
    </div>
  )
}
