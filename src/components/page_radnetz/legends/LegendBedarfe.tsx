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
              <IconLegendLine color="#F5510A" width={5} />
            </IconWrapper>
            Handlungsbedarfe Strecke
          </LegendItem>

          <LegendItem>
            <IconWrapper>
              <div className="inline-block w-2.5">
                <IconLegendCircle color="#0AE7F5" borderWidth={0} size={5} />
              </div>
            </IconWrapper>
            Wichtige Ziele aus Beteiligung
          </LegendItem>
          <LegendItem>
            <IconWrapper>
              <div className="inline-block w-2.5">
                <IconLegendCircle color="#F5510A" borderWidth={0} size={5} />
              </div>
            </IconWrapper>
            Handlungsbedarfe Punkt
          </LegendItem>
        </LegendItems>
      </LegendCol>
    </Legend>
  )
}
