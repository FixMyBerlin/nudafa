import { Widget } from '../components/Widget'
import type { DashboardData } from '../DasboardTabs'

export const WidgetVerkehrsbelastung = ({ data }: DashboardData) => {
  return (
    <Widget headline="Verkehrsbelastung">
      <p className="mb-2">
        <small>ø Belastung aus Messungen </small>
      </p>
      <code>TODO</code>
    </Widget>
  )
}
