import { ASTRO_ENV } from 'astro:env/client'

type Props = {
  title?: string
  data: {
    label: string
    value: number
    color: string
  }[]
  dataUnit?: 'percent'
  source?: string
  className?: string
}

const unitsString: Record<NonNullable<Props['dataUnit']>, string> = { percent: '%' }

export const ChartVertical = ({ title, data, dataUnit, source, className }: Props) => {
  const maxValue = Math.max(...data.map(({ value }) => value))

  // QA of the data
  if (ASTRO_ENV !== 'production') {
    if (!title) console.log('ChartVertical', 'ERROR', 'missing `title`')
  }

  return (
    <figure className={className}>
      <figcaption className="sr-only">{title}</figcaption>
      <ol className="space-y-1 text-xs">
        {data.map(({ label, value, color }) => {
          const relativeWidth = (value / maxValue) * 100
          return (
            <li
              key={label}
              // `gap` is our buffer to 100 %
              className="flex w-full flex-row items-center justify-between gap-5 leading-none"
            >
              <div
                style={{ width: `${relativeWidth}%`, backgroundColor: color }}
                className="h-3"
                aria-label={`${label}: ${value} %`}
              />

              <span style={{ color }}>
                {value.toLocaleString('de-DE')}&nbsp;{dataUnit ? unitsString[dataUnit] : ''}
              </span>
            </li>
          )
        })}
      </ol>

      <ul className="mt-3 flex flex-wrap gap-0.5 leading-none">
        {data.map(({ label, value, color }) => {
          return (
            <li
              key={label}
              className="mr-3 flex items-center gap-1 text-sm"
              // We hide this because we have a `aria-label` above
              aria-hidden={true}
              title={`${label}: ${value.toLocaleString('de-DE')} ${dataUnit ? unitsString[dataUnit] : ''}`}
            >
              <span className="h-2 w-2 rounded-full" style={{ backgroundColor: color }} />
              <span>
                {label}
                {/* ({value.toLocaleString('de-DE')}) */}
              </span>
            </li>
          )
        })}
      </ul>

      {source && <p className="mt-2 text-right text-xs text-gray-500">{source}</p>}
    </figure>
  )
}
