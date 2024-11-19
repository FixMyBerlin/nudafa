import { ASTRO_ENV } from 'astro:env/client'

type Props = {
  title?: string
  data: {
    label: string
    value: number
  }[]
  dataUnit?: 'percent' | 'km' | 'DTV' | 'none'
  source?: string
  className?: string
}

const unitsString: Record<NonNullable<Props['dataUnit']>, string> = {
  percent: '%',
  km: 'km',
  DTV: 'DTV',
  none: '',
}

export const ChartRelativeVertical = ({ title, data, dataUnit, source, className }: Props) => {
  const maxValue = Math.max(...data.map(({ value }) => value))

  // QA of the data
  if (ASTRO_ENV !== 'production') {
    if (!title) console.log('ChartVertical', 'ERROR', 'missing `title`')
  }

  return (
    <figure className={className}>
      <figcaption className="sr-only">{title}</figcaption>
      <ol className="space-y-3 text-sm">
        {data.map(({ label, value }) => {
          const relativeWidth = (value / maxValue) * 100

          return (
            <li key={label} className="w-full leading-snug">
              <p className="mb-2 flex items-end justify-between" aria-hidden={true}>
                <span>{label}</span>
                <span>
                  {value.toLocaleString('de-DE')}&nbsp;{dataUnit ? unitsString[dataUnit] : ''}
                </span>
              </p>

              <div style={{ backgroundColor: '#E8EAED' }} className="w-full rounded-sm">
                <div
                  style={{ width: `${relativeWidth}%`, backgroundColor: '#6D8CF7' }}
                  className="h-1.5 rounded-sm"
                  aria-label={`${label}: ${value} %`}
                />
              </div>
            </li>
          )
        })}
      </ol>

      {source && <p className="mt-3 text-right text-xs text-gray-500">{source}</p>}
    </figure>
  )
}
