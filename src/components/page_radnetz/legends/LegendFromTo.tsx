import { IconLegendArea, IconLegendCircle } from './IconLegend'
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

export const LegendFromTo = () => {
  return (
    <Legend>
      <LegendCol>
        <LegendHeader>Hindernisse und natürliche Barrieren</LegendHeader>
        <LegendItems>
          <LegendItem>
            <IconWrapper>{/* <IconTrain>/> */}</IconWrapper>
            Eisenbahnstrecken
          </LegendItem>
          <LegendItem>
            <IconWrapper>{/* <IconLine/> */}</IconWrapper>
            Autobahnen
          </LegendItem>
          <LegendItem>
            <IconWrapper>{/* <IconAirport /> */}</IconWrapper>
            Gewässer, Flughafen
          </LegendItem>
        </LegendItems>
      </LegendCol>
      <LegendCol>
        <LegendHeader>Quell-Orte</LegendHeader>
        <LegendItems>
          <LegendItem>
            <IconWrapper className="border border-[rgb(94,94,94)] bg-white">
              <IconLegendArea
                color="hsla(17, 93%, 81%, 20%)"
                borderColor="transparent"
                borderWidth={0}
              />
            </IconWrapper>
            Wohngebiete
          </LegendItem>
          <LegendItem>
            <IconWrapper className="border border-[rgb(94,94,94)] bg-white">
              <IconLegendArea
                color="hsla(215, 87%, 78%, 20%)"
                borderColor="transparent"
                borderWidth={0}
              />
            </IconWrapper>
            Andere bebaute Gebiete
          </LegendItem>
          <LegendItem>
            <IconWrapper>
              <IconLegendCircle
                color="rgba(33, 134, 196, 40%)"
                borderColor="rgb(26, 104, 153)"
                borderWidth={2}
              />
            </IconWrapper>
            Siedlungszentren mit Einwohnerzahlen
          </LegendItem>
        </LegendItems>
      </LegendCol>
      <LegendCol>
        <LegendHeader>Zielorte</LegendHeader>
        <LegendItems>
          <LegendItem>
            <IconWrapper>
              <IconLegendCircle
                color="hsl(209, 76%, 38%)"
                borderColor="white"
                borderWidth={0.5}
                size={5}
              />
            </IconWrapper>
            Schulen
          </LegendItem>
          <LegendItem>
            <IconWrapper>{/* <SbahnIcon /> */}</IconWrapper>
            S-Bahnhöfe
          </LegendItem>
          <LegendItemPoiShop />
        </LegendItems>
      </LegendCol>

      <LegendSources>
        Quellen: OpenStreetMap, Vorhandene Netzkonzepte aus manuellen Importen
      </LegendSources>
    </Legend>
  )
}
