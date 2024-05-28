import {
  IconWrapper,
  Legend,
  LegendCol,
  LegendHeader,
  LegendItem,
  LegendItems,
  LegendSources,
} from './Legend'
import { LegendItemPoiShop } from './LegendItems/LegendItemPoiShop'
import { IconLegendLine } from './icons/IconLegendLine'

export const LegendRoadClassification = () => {
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
              <IconLegendLine color="hsla(313, 18%, 69%, 0.37)" width={3} />
            </IconWrapper>
            Frei geführt
          </LegendItem>
        </LegendItems>
      </LegendCol>
      <LegendCol>
        <LegendHeader>Zielorte</LegendHeader>
        <LegendItems>
          <LegendItemPoiShop />
        </LegendItems>
      </LegendCol>

      <LegendSources>Quellen: OpenStreetMap</LegendSources>
    </Legend>
  )
}
