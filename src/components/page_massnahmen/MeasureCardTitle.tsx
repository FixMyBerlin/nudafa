type Props = {
  title: string
  id: string
}

export const MeasureCardTitle = ({ title, id }: Props) => {
  return (
    <div className="text-left">
      <h3 className="break-all font-serif font-extrabold leading-none">{title}</h3>
      <p className="mt-2 break-all text-xs text-gray-500">{id}</p>
    </div>
  )
}
