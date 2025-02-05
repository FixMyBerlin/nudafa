import { ASTRO_ENV } from 'astro:env/client'

type Props = {
  title?: string
  /** @desc value in px */
  height?: number
  data: {
    label: string
    values: {
      value: number
      color: string
    }[]
  }[]
  legend: { text: string; color: string }[]
  source?: string
  className?: string
}

export const ChartHorizontal = ({
  title,
  height = 100,
  data,
  legend,
  source,
  className,
}: Props) => {
  const maxValue = Math.max(...data.map(({ values }) => values.map(({ value }) => value)).flat())

  // QA of the data
  if (ASTRO_ENV !== 'production') {
    if (!title) console.log('ChartHorizontal', 'ERROR', 'missing `title`')

    const colorsWithoutLegend = data
      .map(({ values }) => values.map(({ color }) => color))
      .flat()
      .filter((color) => !legend.find(({ color: legendColor }) => legendColor === color))
    if (colorsWithoutLegend.length > 0)
      console.log(
        'ChartHorizontal',
        'ERROR',
        'missing `legend` for color',
        colorsWithoutLegend,
        'for Chart',
        { title, data, legend, source },
      )
  }

  return (
    <figure className={className}>
      <figcaption className="sr-only">{title}</figcaption>
      <ol className="flex flex-row">
        {data.map(({ label, values }, index) => {
          return (
            <li key={index} className="flex grow flex-col justify-center gap-1 text-sm">
              <div className="flex h-full flex-row justify-center gap-0.5">
                {values.map(({ value, color }) => {
                  const legendText = legend.find(
                    ({ color: legendColor }) => legendColor === color,
                  )?.text
                  const relativeHeight = (value / maxValue) * 100

                  return (
                    // `gap` is our buffer to 100 %
                    <div
                      key={[label, value].join()}
                      className="flex flex-col items-start justify-between gap-2"
                      style={{ height: `${height}px` }}
                    >
                      <span className="-rotate-90 transform text-xs text-gray-500">
                        {value.toLocaleString('de-DE')}
                      </span>
                      <div
                        key={[label, value].join()}
                        style={{ height: `${relativeHeight}%`, backgroundColor: color }}
                        className="w-5"
                        aria-label={`${legendText}: ${value} %`}
                      />
                    </div>
                  )
                })}
              </div>

              <span className="text-center">{label}</span>
            </li>
          )
        })}
      </ol>

      {legend.length && (
        <ul className="mt-2 flex flex-wrap gap-1">
          {legend.map(({ text, color }) => {
            return (
              <li
                key={text}
                className="mr-3 flex items-center gap-1 text-sm"
                // We hide this because we have a `aria-label` above
                aria-hidden={true}
              >
                <span className="h-2 w-2 rounded-full" style={{ backgroundColor: color }} />
                <span>{text}</span>
              </li>
            )
          })}
        </ul>
      )}

      {source && <p className="mt-2 text-xs text-gray-500">{source}</p>}
    </figure>
  )
}
