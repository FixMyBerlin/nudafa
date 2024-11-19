import { Markdown } from '../components/Markdown'
import { Widget } from '../components/Widget'
import type { GoalsDashboardData } from '../DasboardTabs'

export const WidgetPeople = ({ data: { widgetPeople } }: GoalsDashboardData) => {
  return (
    <Widget>
      <Markdown markdown={widgetPeople} />
    </Widget>
  )
}
