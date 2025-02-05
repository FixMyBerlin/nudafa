import { ChartRelativeVertical } from '../components/ChartRelativeVertical'
import { Widget } from '../components/Widget'
import type { TrafficDashboardData } from '../DasboardTabs'

export const WidgetStrassennetz = ({ data: { widgetStrassennetz } }: TrafficDashboardData) => {
  if (!widgetStrassennetz.chartRelativeVertical.data.length) return null

  return (
    <Widget headline={widgetStrassennetz.chartRelativeVertical.title}>
      <ChartRelativeVertical
        title={widgetStrassennetz.chartRelativeVertical.title}
        data={widgetStrassennetz.chartRelativeVertical.data}
        dataUnit={widgetStrassennetz.chartRelativeVertical.dataUnit}
        source={widgetStrassennetz.chartRelativeVertical.source}
      />
    </Widget>
  )
}
