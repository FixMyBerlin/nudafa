import { WidgetInvestitionen } from './ContentGoals/WidgetInvestitionen'
import { WidgetMarkdown } from './ContentGoals/WidgetMarkdown'
import { WidgetPeople } from './ContentGoals/WidgetPeople'
import type { DashboardData } from './DasboardTabs'

export const ContentGoals = ({ data }: DashboardData) => {
  return (
    <>
      <WidgetMarkdown data={data} />
      <WidgetPeople data={data} />
      <WidgetInvestitionen data={data} />
    </>
  )
}
