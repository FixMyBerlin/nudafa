import { ChartHorizontal } from '../components/ChartHorizontal'
import { Table } from '../components/Table'
import { Widget } from '../components/Widget'
import type { GoalsDashboardData } from '../DasboardTabs'

export const WidgetInvestitionen = ({ data }: GoalsDashboardData) => {
  return (
    <Widget headline="WidgetInventionen gemäß NRVP">
      <p className="mb-3">
        Einwohnerzahl: <strong>20.678</strong>
      </p>

      <Table
        heads={['', 'Ausgaben gesamt', 'Eigenanteil']}
        rows={[
          ['2023', '590.000 €', '260.000 €'],
          ['2022', '900.000 €', '540.000 €'],
          ['2021', '120.000 €', '72.000 €'],
          ['ø 3 Jahre ', '1.206.666 €', '290.666 €'],
        ]}
        className="mb-6"
      />

      <h3 className="mb-3 text-sm text-gray-500">Ausgaben</h3>
      <ChartHorizontal
        title="Ausgaben"
        height={70}
        data={[
          {
            label: '2023',
            values: [
              { value: 4.2, color: '#98AEF8' },
              { value: 8.6, color: '#EFC865' },
            ],
          },
          {
            label: '2021',
            values: [
              { value: 6.9, color: '#98AEF8' },
              { value: 3.9, color: '#EFC865' },
            ],
          },
          {
            label: '2019',
            values: [
              { value: 4.2, color: '#98AEF8' },
              { value: 2.2, color: '#EFC865' },
            ],
          },
        ]}
        legend={[
          { text: 'pro Kopf insgesamt', color: '#98AEF8' },
          { text: 'Eigenanteil', color: '#EFC865' },
        ]}
        source="Quelle: MID"
      />
    </Widget>
  )
}
