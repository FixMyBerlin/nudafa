import { Markdown } from '../components/Markdown'
import { Widget } from '../components/Widget'
import type { GoalsDashboardData } from '../DasboardTabs'

export const WidgetMarkdown = ({ data: { widgetMarkdown } }: GoalsDashboardData) => {
  return (
    <Widget>
      <Markdown markdown={widgetMarkdown} />
    </Widget>
  )
}
