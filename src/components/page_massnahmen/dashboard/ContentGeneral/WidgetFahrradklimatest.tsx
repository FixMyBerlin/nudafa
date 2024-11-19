import { ChartHorizontal } from '../components/ChartHorizontal'
import { Markdown } from '../components/Markdown'
import { Widget } from '../components/Widget'
import type { GeneralDashboardData } from '../DasboardTabs'

export const WidgetFahrradklimatest = ({
  data: { widgetFahrradklimatest },
}: GeneralDashboardData) => {
  return (
    <Widget headline={widgetFahrradklimatest.title}>
      <Markdown markdown={widgetFahrradklimatest.subText} className="mb-3 text-xs" />

      <ChartHorizontal
        title={widgetFahrradklimatest.chartHorizontal.title}
        height={widgetFahrradklimatest.chartHorizontal.height}
        data={widgetFahrradklimatest.chartHorizontal.data}
        legend={widgetFahrradklimatest.chartHorizontal.legend}
        source={widgetFahrradklimatest.chartHorizontal.source}
      />
    </Widget>
  )
}
