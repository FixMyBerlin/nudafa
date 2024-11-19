import { WidgetFahrradklimatest } from './ContentGeneral/WidgetFahrradklimatest'
import { WidgetMarkdown } from './ContentGeneral/WidgetMarkdown'
import { WidgetVerkehrsbelastung } from './ContentGeneral/WidgetVerkehrsbelastung'
import type { GeneralDashboardData } from './DasboardTabs'

export const ContentGeneral = ({ data }: GeneralDashboardData) => {
  return (
    <>
      <WidgetMarkdown data={data} />
      <WidgetFahrradklimatest data={data} />
      <WidgetVerkehrsbelastung data={data} />
    </>
  )
}
