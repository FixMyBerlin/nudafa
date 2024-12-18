import { ChartHorizontal } from '../components/ChartHorizontal'
import { Table, type TableRow } from '../components/Table'
import { Widget } from '../components/Widget'
import type { GoalsDashboardData } from '../DasboardTabs'

export const WidgetInvestitionen = ({ data: { widgetInvestitionen } }: GoalsDashboardData) => {
  const tableData = widgetInvestitionen.table
    .slice(-3)
    .map((item) => [item.label ?? '–', item.ausgaben, item.eigenanteil] satisfies TableRow)
  const averageAusgaben = tableData.reduce((sum, item) => sum + item[1], 0) / tableData.length
  const averageEigenanteil = tableData.reduce((sum, item) => sum + item[2], 0) / tableData.length
  const averageRow = ['ø 3 Jahre', averageAusgaben, averageEigenanteil] satisfies TableRow
  const finalTableData = [...tableData, averageRow]

  if (!widgetInvestitionen.chartHorizontal.data.length) return null

  return (
    <Widget headline="WidgetInventionen gemäß NRVP">
      <p className="mb-3">
        Einwohnerzahl: <strong>{widgetInvestitionen.population}</strong>
      </p>

      <Table
        heads={['', 'Ausgaben gesamt', 'Eigenanteil']}
        rows={finalTableData}
        className="mb-6"
      />

      <h3 className="mb-3 text-sm text-gray-500">Ausgaben</h3>
      <ChartHorizontal
        title={widgetInvestitionen.chartHorizontal.title}
        height={widgetInvestitionen.chartHorizontal.height}
        data={widgetInvestitionen.chartHorizontal.data}
        legend={widgetInvestitionen.chartHorizontal.legend}
        source={widgetInvestitionen.chartHorizontal.source}
      />
    </Widget>
  )
}
