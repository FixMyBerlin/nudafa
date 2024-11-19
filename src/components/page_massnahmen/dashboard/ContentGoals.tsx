import { WidgetInvestitionen } from './ContentGoals/WidgetInvestitionen'
import { WidgetMarkdown } from './ContentGoals/WidgetMarkdown'
import { WidgetPeople } from './ContentGoals/WidgetPeople'
import type { GoalsDashboardData } from './DasboardTabs'

export const ContentGoals = ({ data }: GoalsDashboardData) => {
  return (
    <>
      <WidgetMarkdown data={data} />
      <WidgetPeople data={data} />
      <WidgetInvestitionen data={data} />
    </>
  )
}
