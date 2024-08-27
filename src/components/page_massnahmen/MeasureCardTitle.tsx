type Props = {
  title: string
}

export const MeasureCardTitle = ({ title }: Props) => {
  return (
    <div className="text-left">
      <h3 className="break-all font-serif font-extrabold leading-none">{title}</h3>
    </div>
  )
}
