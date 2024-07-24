import { IconWrapper, Legend, LegendCol, LegendHeader, LegendItem, LegendItems } from './Legend'
import { IconLegendLine } from './icons/IconLegendLine'

export const LegendMassnahmen = () => {
  return (
    <Legend>
      <LegendCol>
        <LegendHeader>Maßnahmen</LegendHeader>
        <LegendItems>
          <LegendItem>
            <IconWrapper>
              <IconLegendLine color="hsl(201, 92%, 63%)" width={5} />
            </IconWrapper>
            Maßnahmen der Gemeinde Wildau
          </LegendItem>
          <LegendItem>
            <IconWrapper>
              <IconLegendLine color="hsl(105, 41%, 54%)" width={5} />
            </IconWrapper>
            Maßnahmen der Gemeinde Eichwalde
          </LegendItem>
          <LegendItem>
            <IconWrapper>
              <IconLegendLine color="hsl(168, 64%, 40%)" width={5} />
            </IconWrapper>
            Maßnahmen der Gemeinde Zeuthen
          </LegendItem>
          <LegendItem>
            <IconWrapper>
              <IconLegendLine color="hsl(327, 82%, 56%)" width={5} />
            </IconWrapper>
            Maßnahmen der Gemeinde Schulzendorf
          </LegendItem>
        </LegendItems>
      </LegendCol>
    </Legend>
  )
}
