import { WidgetFahrradklimatest } from './ContentGeneral/WidgetFahrradklimatest'
import { WidgetMarkdown } from './ContentGeneral/WidgetMarkdown'
import { WidgetVerkehrsbelastung } from './ContentGeneral/WidgetVerkehrsbelastung'
import type { DashboardData } from './DasboardTabs'

export const ContentGeneral = ({ data }: DashboardData) => {
  return (
    <>
      <WidgetMarkdown data={data} />
      <WidgetFahrradklimatest data={data} />
      <WidgetVerkehrsbelastung data={data} />
    </>
  )
}
