import { ChartVertical } from '../components/ChartVertical'
import { Widget } from '../components/Widget'
import type { TrafficDashboardData } from '../DasboardTabs'

export const WidgetFahrzeuge = ({ data: { widgetFahrzeuge } }: TrafficDashboardData) => {
  if (!widgetFahrzeuge.chartVertical.data.length) return null

  return (
    <Widget headline={widgetFahrzeuge.chartVertical.title}>
      <ChartVertical
        title={widgetFahrzeuge.chartVertical.title}
        data={widgetFahrzeuge.chartVertical.data}
        source={widgetFahrzeuge.chartVertical.source}
      />
    </Widget>
  )
}
