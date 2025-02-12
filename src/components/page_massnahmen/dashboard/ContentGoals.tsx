import { WidgetFahrradklimatest } from './ContentGeneral/WidgetFahrradklimatest'
import { WidgetInvestitionen } from './ContentGoals/WidgetInvestitionen'
import { WidgetMarkdown } from './ContentGoals/WidgetMarkdown'
import { WidgetPeople } from './ContentGoals/WidgetPeople'
import type { GoalsDashboardData } from './DasboardTabs'

export const ContentGoals = ({ data }: GoalsDashboardData) => {
  return (
    <>
      <WidgetMarkdown data={data} />
      <div className="flex flex-col gap-5">
        <WidgetPeople data={data} />
        <WidgetFahrradklimatest data={data} />
      </div>
      <WidgetInvestitionen data={data} />
    </>
  )
}
