import { ChartRelativeVertical } from '../components/ChartRelativeVertical'
import { Widget } from '../components/Widget'

type Props = { foo: true }

export const WidgetStrassennetz = ({ foo }: Props) => {
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
