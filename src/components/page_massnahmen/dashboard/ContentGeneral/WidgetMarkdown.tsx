import { Markdown } from '../components/Markdown'
import { Widget } from '../components/Widget'
import type { GeneralDashboardData } from '../DasboardTabs'

export const WidgetMarkdown = ({ data: { widgetMarkdown } }: GeneralDashboardData) => {
  if (!widgetMarkdown) return null

  return (
    <Widget headline="Besondere Herausforderungen">
      <Markdown markdown={widgetMarkdown} />
    </Widget>
  )
}
