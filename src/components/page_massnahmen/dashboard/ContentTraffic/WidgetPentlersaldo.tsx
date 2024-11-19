import { ChartVertical } from '../components/ChartVertical'
import { Widget } from '../components/Widget'
import type { TrafficDashboardData } from '../DasboardTabs'

export const WidgetPentlersaldo = ({ data }: TrafficDashboardData) => {
  return (
    <Widget headline="Pendlersaldo">
      <ChartVertical
        title="Pendlersaldo"
        data={[
          { label: 'Einpendler', value: 21000, color: '#14B8A6' },
          { label: 'Auspendler', value: 44000, color: '#F37575' },
        ]}
        source="Quelle: MID"
      />
    </Widget>
  )
}
