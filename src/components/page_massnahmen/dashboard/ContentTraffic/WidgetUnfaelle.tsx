import { Markdown } from '../components/Markdown'
import { Widget } from '../components/Widget'
import type { TrafficDashboardData } from '../DasboardTabs'

export const WidgetUnfaelle = ({ data: { widgetUnfaelle } }: TrafficDashboardData) => {
  if (!widgetUnfaelle.list.length) return null

  return (
    <Widget headline={widgetUnfaelle.title}>
      <Markdown markdown={widgetUnfaelle.subText} className="mb-3 text-xs" />

      <dl className="flex flex-col gap-2 text-xs md:flex-row md:flex-wrap md:gap-0.5 md:space-x-5">
        {widgetUnfaelle.list.map((item) => {
          return (
            <div key={item.label} className="flex items-center gap-2">
              <dt
                className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-gray-400 font-serif font-bold"
                style={{ borderColor: item.color }}
              >
                {item.number.toLocaleString('de-DE')}
              </dt>
              <dd>{item.label}</dd>
            </div>
          )
        })}
      </dl>
      <p className="mt-3 text-right text-xs text-gray-500">{widgetUnfaelle.source}</p>
    </Widget>
  )
}
