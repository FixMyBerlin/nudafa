import { IconWrapper, Legend, LegendCol, LegendHeader, LegendItem, LegendItems } from './Legend'
import { IconLegendLine } from './icons/IconLegendLine'

export const LegendZielnetz = () => {
  return (
    <Legend>
      <LegendCol>
        <LegendHeader>Netzentwurfskarte</LegendHeader>
        <LegendItems>
          <LegendItem>
            <IconWrapper>
              <IconLegendLine color="hsl(310, 95%, 39%)" width={4} />
            </IconWrapper>
            Hauptrouten
          </LegendItem>
          <LegendItem>
            <IconWrapper>
              <IconLegendLine color="hsl(310, 82%, 71%)" width={2} />
            </IconWrapper>
            Nebenrouten
          </LegendItem>
          <LegendItem>
            <IconWrapper>
              <IconLegendLine color="hsl(133, 74%, 24%)" width={4} />
            </IconWrapper>
            Radschnellverbindungen
          </LegendItem>
          <LegendItem>
            <IconWrapper>
              <IconLegendLine color="#ffd53d" width={4} />
            </IconWrapper>
            Netzvorschläge Bürger:innen
          </LegendItem>
        </LegendItems>
      </LegendCol>
      <LegendCol>
        <LegendHeader>Fahrradeignung Nebenstraßen</LegendHeader>
        <LegendItems>
          <LegendItem>
            <IconWrapper>
              <IconLegendLine color="#059cfa" width={2.5} />
            </IconWrapper>
            Oberfläche gut oder sehr gut
          </LegendItem>
        </LegendItems>
      </LegendCol>
      {/* <LegendSources>
          Quellen: -
        </LegendSources> */}
    </Legend>
  )
}
