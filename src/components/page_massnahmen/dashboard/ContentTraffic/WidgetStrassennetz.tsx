import { ChartRelativeVertical } from '../components/ChartRelativeVertical'
import { Widget } from '../components/Widget'
import type { DashboardData } from '../DasboardTabs'

export const WidgetStrassennetz = ({ data }: DashboardData) => {
  return (
    <Widget headline="Straßennetz">
      <ChartRelativeVertical
        title="Straßennetz"
        data={[
          { label: 'Hauptverkehrsstraßen', value: 350 },
          { label: 'Nebenstraßen', value: 600 },
        ]}
        dataUnit="km"
        source="Quelle: OpenStreetMap Beitragende"
      />
    </Widget>
  )
}
