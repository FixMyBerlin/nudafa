import { ChartVertical } from '../components/ChartVertical'
import { Widget } from '../components/Widget'
import type { TrafficDashboardData } from '../DasboardTabs'

export const WidgetPentlersaldo = ({ data: { widgetPentlersaldo } }: TrafficDashboardData) => {
  if (!widgetPentlersaldo.chartVertical.data.length) return null

  return (
    <Widget headline={widgetPentlersaldo.chartVertical.title}>
      <ChartVertical
        title={widgetPentlersaldo.chartVertical.title}
        data={widgetPentlersaldo.chartVertical.data}
        source={widgetPentlersaldo.chartVertical.source}
        dataUnit={widgetPentlersaldo.chartVertical.dataUnit}
      />
    </Widget>
  )
}
