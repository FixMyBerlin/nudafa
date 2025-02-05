import { ChartVertical } from '../components/ChartVertical'
import { Markdown } from '../components/Markdown'
import { Widget } from '../components/Widget'
import type { TrafficDashboardData } from '../DasboardTabs'

export const WidgetModalsplit = ({ data: { widgetModalsplit } }: TrafficDashboardData) => {
  if (!widgetModalsplit.chartVertical.data.length) return null

  return (
    <Widget headline={widgetModalsplit.chartVertical.title}>
      <Markdown markdown={widgetModalsplit.subText} className="mb-3 text-xs" />

      <ChartVertical
        title={widgetModalsplit.chartVertical.title}
        data={widgetModalsplit.chartVertical.data}
        source={widgetModalsplit.chartVertical.source}
      />
    </Widget>
  )
}
