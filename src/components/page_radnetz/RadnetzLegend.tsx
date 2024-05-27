import { LegendInfrastructure } from './legends/LegendInfrastructure'

type Props = {
  legend: any
}

// todo: make legend dynamic
export const RadnetzLegend = ({ legend }: Props) => {
  return (
    <div className="flex-grow bg-gray-50 p-4">
      <LegendInfrastructure />
      {/* <LegendFromTo /> */}
      {/* <LegendCurrent /> */}
      {/* <LegendNetwork /> */}
      {/* <LegendRoadClassification /> */}
      {/* <LegendInfrastructure /> */}
      {/* <LegendSafety /> */}
    </div>
  )
}
