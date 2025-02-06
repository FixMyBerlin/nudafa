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
              <IconLegendLine color="rgba(5, 156, 250, 0.71)" width={3} />
            </IconWrapper>
            Asphalt mit guter Oberflächenqualität
          </LegendItem>
          <LegendItem>
            <IconWrapper>
              <IconLegendLine color="rgba(4, 159, 159, 0.71)" width={3} />
            </IconWrapper>
            Andere Oberflächen mit guter Oberflächenqualität
          </LegendItem>
        </LegendItems>
      </LegendCol>
      {/* <LegendSources>
          Quellen: -
        </LegendSources> */}
    </Legend>
  )
}
