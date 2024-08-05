import { IconWrapper, Legend, LegendCol, LegendHeader, LegendItem, LegendItems } from './Legend'
import { IconLegendCircle } from './icons/IconLegendCircle'
import { IconLegendLine } from './icons/IconLegendLine'

export const LegendBedarfe = () => {
  return (
    <Legend>
      <LegendCol>
        <LegendHeader>Beteiligungsergebnisse</LegendHeader>
        <LegendItems>
          <LegendItem>
            <IconWrapper>
              <IconLegendLine color="hsla(24, 87%, 54%, 33%)" width={8} />
            </IconWrapper>
            Handlungsbedarfe Strecke
          </LegendItem>
          <LegendItem>
            <IconWrapper>
              <IconLegendLine color="hsla(217, 87%, 54%,33%)" width={8} />
            </IconWrapper>
            Impulse fuer die Netzplanung
          </LegendItem>
          <LegendItem>
            <IconWrapper>
              <IconLegendCircle color="hsla(24, 87%, 54%, 33%)" borderWidth={0} size={15} />
            </IconWrapper>
            Handlungsbedarfe Punkt
          </LegendItem>
          <LegendItem>
            <IconWrapper>
              <IconLegendCircle color="hsla(217, 87%, 54%,33%)" borderWidth={0} size={15} />
            </IconWrapper>
            Wichtige Ziele
          </LegendItem>
        </LegendItems>
      </LegendCol>
    </Legend>
  )
}
