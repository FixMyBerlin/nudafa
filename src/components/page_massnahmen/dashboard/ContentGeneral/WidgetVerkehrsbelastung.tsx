import { Widget } from '../components/Widget'
import type { GeneralDashboardData } from '../DasboardTabs'

export const WidgetVerkehrsbelastung = ({ data }: GeneralDashboardData) => {
  return (
    <Widget headline="Verkehrsbelastung">
      <p className="mb-2">
        <small>ø Belastung aus Messungen </small>
      </p>
      <code>TODO</code>
    </Widget>
  )
}
