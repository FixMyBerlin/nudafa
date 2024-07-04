import {
  IconWrapper,
  Legend,
  LegendCol,
  LegendHeader,
  LegendItem,
  LegendItems,
  LegendSources,
} from './Legend'
import { FreeForBike } from './icons/FreeForBike'
import { IconLegendLine } from './icons/IconLegendLine'
import { Oneway } from './icons/Oneway'

export const LegendStrassentypen = () => {
  return (
    <Legend>
      <LegendCol>
        <LegendHeader>Straßentypen</LegendHeader>
        <LegendItems>
          <LegendItem>
            <IconWrapper>
              <IconLegendLine color="hsl(163, 56%, 51%)" width={3} />
            </IconWrapper>
            Wohnstraße
          </LegendItem>
          <LegendItem>
            <IconWrapper>
              <IconLegendLine color="hsl(50, 90%, 47%)" width={3} />
            </IconWrapper>
            Sammelstraßen
          </LegendItem>
          <LegendItem>
            <IconWrapper>
              <IconLegendLine color="hsl(18, 97%, 47%)" width={3} />
            </IconWrapper>
            Hauptstraßen
          </LegendItem>
          <LegendItem>
            <IconWrapper>
              <IconLegendLine color="#b36b19" width={3} />
            </IconWrapper>
            Frei geführt
          </LegendItem>
          <LegendItem>
            <IconWrapper>
              <Oneway />
            </IconWrapper>
            Einbahnstraßen
          </LegendItem>
          <LegendItem>
            <IconWrapper>
              <FreeForBike />
            </IconWrapper>
            Freigabe für Fahrrad
          </LegendItem>
        </LegendItems>
      </LegendCol>

      <LegendSources>Quellen: OpenStreetMap</LegendSources>
    </Legend>
  )
}
