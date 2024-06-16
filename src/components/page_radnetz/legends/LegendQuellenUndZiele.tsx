import { IconWrapper, Legend, LegendCol, LegendHeader, LegendItem, LegendItems } from './Legend'
import { LegendItemPoiShop } from './LegendItems/LegendItemPoiShop'
import { Airport } from './icons/Airport'
import { Ferry } from './icons/Ferry'
import { IconLegendArea } from './icons/IconLegendArea'
import { IconLegendCircle } from './icons/IconLegendCircle'
import { Line } from './icons/Line'
import { Metro } from './icons/Metro'
import { Sbahn } from './icons/Sbahn'
import { Train } from './icons/Train'
import { Ubahn } from './icons/Ubahn'

export const LegendQuellenUndZiele = () => {
  return (
    <Legend>
      <LegendCol>
        <LegendHeader>Hindernisse und natürliche Barrieren</LegendHeader>
        <LegendItems>
          <LegendItem>
            <IconWrapper>
              <Train />
            </IconWrapper>
            Eisenbahnstrecken
          </LegendItem>
          <LegendItem>
            <IconWrapper>
              <Line />
            </IconWrapper>
            Autobahnen
          </LegendItem>
          <LegendItem>
            <IconWrapper>
              <Airport />
            </IconWrapper>
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
            <IconWrapper>
              <Sbahn />
            </IconWrapper>
            S-Bahnhöfe
          </LegendItem>
          <LegendItem>
            <IconWrapper>
              <Metro />
            </IconWrapper>
            Metro
          </LegendItem>
          <LegendItem>
            <IconWrapper>
              <Ubahn />
            </IconWrapper>
            U-Bahn
          </LegendItem>
          <LegendItem>
            <IconWrapper>
              <Ferry />
            </IconWrapper>
            Fähre
          </LegendItem>
          <LegendItemPoiShop />
        </LegendItems>
      </LegendCol>
    </Legend>
  )
}
