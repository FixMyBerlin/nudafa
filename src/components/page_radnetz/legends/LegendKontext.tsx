import { IconWrapper, Legend, LegendCol, LegendHeader, LegendItem, LegendItems } from './Legend'
import { IconLegendLine } from './icons/IconLegendLine'

export const LegendKontext = () => {
  return (
    <Legend>
      <LegendCol>
        <LegendHeader>Vorhandene Netzkonzepte</LegendHeader>
        <LegendItems>
          <LegendItem>
            <IconWrapper>
              <IconLegendLine color="hsl(48, 93%, 53%)" width={4} />
            </IconWrapper>
            Konzept LK Dahme-Spree
          </LegendItem>
          <LegendItem>
            <IconWrapper>
              <IconLegendLine color="hsl(88, 89%, 36%)" width={4} />
            </IconWrapper>
            Touristische Radrouten
          </LegendItem>
          <LegendItem>
            <IconWrapper>
              <IconLegendLine color="hsl(307, 89%, 40%)" width={4} />
            </IconWrapper>
            RSV BER-KW Varianten
          </LegendItem>
          <LegendItem>
            <IconWrapper>
              <IconLegendLine color="hsl(278, 92%, 47%)" width={4} />
            </IconWrapper>
            Radschnellverbindung Y-Trasse
          </LegendItem>
          <LegendItem>
            <IconWrapper>
              <IconLegendLine color="hsl(178, 81%, 48%)" width={4} />
            </IconWrapper>
            Radkonzept Schönefeld
          </LegendItem>
          <LegendItem>
            <IconWrapper>
              <IconLegendLine color="hsl(203, 100%, 38%)" width={4} />
            </IconWrapper>
            Berliner Radverkehrsnetz Vorrangrouten
          </LegendItem>
        </LegendItems>
      </LegendCol>
    </Legend>
  )
}
