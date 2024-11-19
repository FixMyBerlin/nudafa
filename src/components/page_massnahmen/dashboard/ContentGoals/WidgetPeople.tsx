import { Markdown } from '../components/Markdown'
import { Widget } from '../components/Widget'
import type { GoalsDashboardData } from '../DasboardTabs'

export const WidgetPeople = ({ data: { widgetPeople } }: GoalsDashboardData) => {
  if (!widgetPeople) return null

  return (
    <Widget>
      <Markdown markdown={widgetPeople} />
    </Widget>
  )
}
