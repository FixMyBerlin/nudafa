import { WidgetFahrzeuge } from './ContentTraffic/WidgetFahrzeuge'
import { WidgetModalsplit } from './ContentTraffic/WidgetModalsplit'
import { WidgetPentlersaldo } from './ContentTraffic/WidgetPentlersaldo'
import { WidgetStrassennetz } from './ContentTraffic/WidgetStrassennetz'
import { WidgetUnfaelle } from './ContentTraffic/WidgetUnfaelle'
import { WidgetVerkehrsbelastung } from './ContentTraffic/WidgetVerkehrsbelastung'
import type { TrafficDashboardData } from './DasboardTabs'

export const ContentTraffic = ({ data }: TrafficDashboardData) => {
  return (
    <>
      <div className="flex flex-col gap-5">
        <WidgetPentlersaldo data={data} />
        <WidgetFahrzeuge data={data} />
      </div>
      <div className="flex flex-col gap-5">
        <WidgetModalsplit data={data} />
        <WidgetStrassennetz data={data} />
      </div>
      <WidgetVerkehrsbelastung data={data} />
      <div className="md:col-span-3">
        <WidgetUnfaelle data={data} />
      </div>
    </>
  )
}
