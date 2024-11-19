import { ChartHorizontal } from '../components/ChartHorizontal'
import { Widget } from '../components/Widget'
import type { DashboardData } from '../DasboardTabs'

export const WidgetFahrradklimatest = ({ data }: DashboardData) => {
  return (
    <Widget headline="Fahrradklimatest">
      <p className="mb-2">
        <small>Verlauf der letzten Jahre?</small>
      </p>
      <ChartHorizontal
        title="Fahrradklimatest"
        height={110}
        data={[
          { label: '2023', values: [{ value: 3.6, color: '#98AEF8' }] },
          { label: '2021', values: [{ value: 3.9, color: '#98AEF8' }] },
          { label: '2019', values: [{ value: 4.2, color: '#98AEF8' }] },
        ]}
        legend={[{ text: 'TODO', color: '#98AEF8' }]}
        source="Quelle: MID"
      />
    </Widget>
  )
}
