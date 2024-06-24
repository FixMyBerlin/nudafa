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
              <IconLegendLine color="#37f644" width={3} />
            </IconWrapper>
            sehr gut
          </LegendItem>
          <LegendItem>
            <IconWrapper>
              <IconLegendLine color="#b5ea2e" width={3} />
            </IconWrapper>
            gut
          </LegendItem>
          <LegendItem>
            <IconWrapper>
              <IconLegendLine color="#faa00f" width={3} />
            </IconWrapper>
            mittel
          </LegendItem>
          <LegendItem>
            <IconWrapper>
              <IconLegendLine color="#f90606" width={3} />
            </IconWrapper>
            schlecht
          </LegendItem>
          <LegendItem>
            <IconWrapper>
              <IconLegendLine color="#d8035c" width={3} />
            </IconWrapper>
            sehr schlecht
          </LegendItem>
        </LegendItems>
      </LegendCol>
    </Legend>
  )
}
