import { Widget } from '../components/Widget'
import type { DashboardData } from '../DasboardTabs'

export const WidgetPeople = ({ data }: DashboardData) => {
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
