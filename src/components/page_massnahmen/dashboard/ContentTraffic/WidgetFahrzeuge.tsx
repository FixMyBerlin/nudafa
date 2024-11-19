import { ChartVertical } from '../components/ChartVertical'
import { Widget } from '../components/Widget'
import type { TrafficDashboardData } from '../DasboardTabs'

export const WidgetFahrzeuge = ({ data }: TrafficDashboardData) => {
  return (
    <Widget headline="Fahrzeuge pro Kopf">
      <ChartVertical
        title="Fahrzeuge pro Kopf"
        data={[
          { label: 'PKW', value: 1.7, color: '#960854' },
          { label: 'Fahrräder', value: 4, color: '#EFC865' },
        ]}
        source="Quelle: MID"
      />
    </Widget>
  )
}
