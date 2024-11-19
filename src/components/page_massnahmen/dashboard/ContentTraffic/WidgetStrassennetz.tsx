import { ChartRelativeVertical } from '../components/ChartRelativeVertical'
import { Widget } from '../components/Widget'
import type { TrafficDashboardData } from '../DasboardTabs'

export const WidgetStrassennetz = ({ data: { widgetStrassennetz } }: TrafficDashboardData) => {
  return (
    <Widget headline="Straßennetz">
      <ChartRelativeVertical
        title={widgetStrassennetz.chartRelativeVertical.title}
        data={widgetStrassennetz.chartRelativeVertical.data}
        dataUnit={widgetStrassennetz.chartRelativeVertical.dataUnit}
        source={widgetStrassennetz.chartRelativeVertical.source}
      />
    </Widget>
  )
}
