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
              <IconLegendLine color="rgb(16, 94, 249)" width={3} />
            </IconWrapper>
            Wunschlinien
          </LegendItem>
          <LegendItem>
            <IconWrapper>
              <IconLegendLine strokeDasharray="6 2" color="#dd0303" width={3} />
            </IconWrapper>
            Netzentwurf
          </LegendItem>
          <LegendItem>
            <IconWrapper>
              <IconLegendLine color="#dd0303" width={1} />
            </IconWrapper>
            Wohnstraßen ohne Oberfläche=schlecht
          </LegendItem>
          <LegendItem>
            <IconWrapper>
              <IconLegendLine color="#ffd53d" width={4} />
            </IconWrapper>
            Netzvorschläge Bürger:innen
          </LegendItem>
        </LegendItems>
      </LegendCol>
      {/* <LegendSources>
          Quellen: -
        </LegendSources> */}
    </Legend>
  )
}
