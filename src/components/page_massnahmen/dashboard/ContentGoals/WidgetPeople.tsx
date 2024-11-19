import { Widget } from '../components/Widget'
import type { GoalsDashboardData } from '../DasboardTabs'

export const WidgetPeople = ({ data }: GoalsDashboardData) => {
  return (
    // prettier-ignore
    <Widget headline="Personen)">
Radverkehrsbeauftragter
Hector Heinrich
Radverkehrsmanager
Maria Kuppelwieser
PKWs
Fahrräder
Klimaschutzmanager
Matthias Schöneweger</Widget>
  )
}
