import {
  IconWrapper,
  Legend,
  LegendCol,
  LegendHeader,
  LegendItem,
  LegendItems,
  LegendSources,
} from './Legend'
import { IconLegendLine } from './icons/IconLegendLine'

export const LegendInfrastructure = () => {
  return (
    <Legend>
      <LegendCol>
        <LegendHeader>Ist-Zustand Radinfrastruktur</LegendHeader>
        <LegendItems>
          <LegendItem>
            <IconWrapper>
              <IconLegendLine color="hsl(209, 76%, 38%)" width={3} />
            </IconWrapper>
            Separate Radinfrastruktur
          </LegendItem>
          <LegendItem>
            <IconWrapper>
              <IconLegendLine color="hsl(209, 76%, 38%)" width={3} strokeDasharray="5 2.5" />
            </IconWrapper>
            gemeinsame Führung mit dem Fußverkehr
          </LegendItem>
          <LegendItem>
            <IconWrapper>
              <IconLegendLine color="hsla(232, 99%, 39%, 0.34)" width={3} strokeDasharray="3 2" />
            </IconWrapper>
            verkehrsberuhigte Bereiche
          </LegendItem>
        </LegendItems>
      </LegendCol>
      <LegendCol>
        <LegendHeader>Oberfläche</LegendHeader>
        <LegendItems>
          <LegendItem>
            <IconWrapper>
              <IconLegendLine color="hsl(5, 96%, 52%)" width={3} strokeDasharray="2.5 3" />
            </IconWrapper>
            Oberfläche schlecht
          </LegendItem>
        </LegendItems>
      </LegendCol>

      <LegendSources>Quellen: OpenStreetMap</LegendSources>
    </Legend>
  )
}
