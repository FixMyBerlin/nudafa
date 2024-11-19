import { ChartVertical } from '../components/ChartVertical'
import { Widget } from '../components/Widget'
import type { DashboardData } from '../DasboardTabs'

export const WidgetModalsplit = ({ data }: DashboardData) => {
  return (
    <Widget headline="Modalsplit (innerorts)">
      <p className="mb-3">
        <small>Jahr 2023</small>
      </p>
      <ChartVertical
        title="Modalsplit (innerorts)"
        data={[
          { label: 'PKW', value: 39, color: '#960854' },
          { label: 'Öffentlicher Verkehr', value: 27, color: '#9C27B0' },
          { label: 'Fahrrad', value: 6, color: '#EFC865' },
          { label: 'Zu Fuß', value: 27, color: '#98AEF8' },
        ]}
        dataUnit="percent"
        source="Quelle: MID"
      />
    </Widget>
  )
}
