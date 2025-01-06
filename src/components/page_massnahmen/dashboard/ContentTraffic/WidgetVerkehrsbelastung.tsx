import { ChartRelativeVertical } from '../components/ChartRelativeVertical'
import { Markdown } from '../components/Markdown'
import { Widget } from '../components/Widget'
import type { TrafficDashboardData } from '../DasboardTabs'

export const WidgetVerkehrsbelastung = ({
  data: { widgetVerkehrsbelastung },
}: TrafficDashboardData) => {
  if (!widgetVerkehrsbelastung.chartRelativeVertical.data.length) return null

  return (
    <Widget headline={widgetVerkehrsbelastung.title}>
      <Markdown markdown={widgetVerkehrsbelastung.subText} className="mb-3 text-xs" />

      <ChartRelativeVertical
        title={widgetVerkehrsbelastung.chartRelativeVertical.title}
        data={widgetVerkehrsbelastung.chartRelativeVertical.data}
        dataUnit={widgetVerkehrsbelastung.chartRelativeVertical.dataUnit}
        source={widgetVerkehrsbelastung.chartRelativeVertical.source}
      />
    </Widget>
  )
}
