import { WidgetBilder } from './ContentGeneral/WidgetBilder'
import { WidgetMarkdown } from './ContentGeneral/WidgetMarkdown'
import type { GeneralDashboardData } from './DasboardTabs'

export const ContentGeneral = ({ data }: GeneralDashboardData) => {
  return (
    <>
      <div className={data.widgetBilder?.length ? 'md:col-span-2' : 'md:col-span-3'}>
        <WidgetMarkdown data={data} />
      </div>
      <div className="flex flex-col gap-5">
        <WidgetBilder data={data} />
      </div>
    </>
  )
}
