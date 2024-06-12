import { IconWrapper, Legend, LegendCol, LegendHeader, LegendItem, LegendItems } from './Legend'
import { IconLegendLine } from './icons/IconLegendLine'

export const LegendKomfort = () => {
  return (
    <Legend>
      <LegendCol>
        <LegendHeader>Ist-Zustand Oberflächen</LegendHeader>
        <LegendItems>
          <LegendItem>
            <IconWrapper>
              <IconLegendLine color="hsl(119, 76%, 26%)" width={3} />
            </IconWrapper>
            sehr gut &amp; gut
          </LegendItem>
          <LegendItem>
            <IconWrapper>
              <IconLegendLine color="hsl(47, 94%, 46%)" width={3} />
            </IconWrapper>
            mittel
          </LegendItem>
          <LegendItem>
            <IconWrapper>
              <IconLegendLine color="hsl(5, 96%, 52%)" width={3} />
            </IconWrapper>
            schlecht &amp; sehr schlecht
          </LegendItem>
        </LegendItems>
      </LegendCol>
    </Legend>
  )
}
