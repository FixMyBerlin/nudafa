import { ChartVertical } from '../components/ChartVertical'
import { Widget } from '../components/Widget'
import type { TrafficDashboardData } from '../DasboardTabs'

export const WidgetFahrzeuge = ({ data: { widgetFahrzeuge } }: TrafficDashboardData) => {
  return (
    <Widget headline="Fahrzeuge pro Kopf">
      <ChartVertical
        title={widgetFahrzeuge.chartVertical.title}
        data={widgetFahrzeuge.chartVertical.data}
        source={widgetFahrzeuge.chartVertical.source}
      />
    </Widget>
  )
}
