import { IconWrapper, Legend, LegendCol, LegendHeader, LegendItem, LegendItems } from './Legend'
import { IconLegendCircle } from './icons/IconLegendCircle'
import { School } from './icons/School'
import { Unsafe } from './icons/Unsafe'
import { WayToSchool } from './icons/WayToSchool'

export const LegendSicherheit = () => {
  return (
    <Legend>
      <LegendCol>
        <LegendHeader>Schulwege mit dem Fahrrad</LegendHeader>
        <LegendItems>
          <LegendItem>
            <IconWrapper>
              <WayToSchool />
            </IconWrapper>
            <span>Schulwege¹ </span>
          </LegendItem>
          <LegendItem>
            <IconWrapper>
              <Unsafe />
            </IconWrapper>
            Unsichere Abschnitte auf Schulwegen²
          </LegendItem>
          <LegendItem>
            <IconWrapper>
              <School />
            </IconWrapper>
            Bildungseinrichtungen³
          </LegendItem>
        </LegendItems>
      </LegendCol>
      <LegendCol>
        <LegendHeader>Unfälle mit Radfahrbeteiligung (2016-2021)⁴</LegendHeader>
        <LegendItems>
          <LegendItem>
            <IconWrapper>
              <IconLegendCircle color="#EB00C7" borderWidth={0} size={15} />
            </IconWrapper>
            mit Getöteten
          </LegendItem>
          <LegendItem>
            <IconWrapper>
              <IconLegendCircle color="#FE2F2F" borderWidth={0} size={15} />
            </IconWrapper>
            mit Schwerverletzten
          </LegendItem>
          <LegendItem>
            <IconWrapper>
              <IconLegendCircle color="#FE7E16" borderWidth={0} size={15} />
            </IconWrapper>
            mit Leichtverletzten
          </LegendItem>
          <LegendItem>
            <IconWrapper>
              <IconLegendCircle color="#FEB816" borderWidth={0} size={15} />
            </IconWrapper>
            mit Sachschaden
          </LegendItem>
        </LegendItems>
      </LegendCol>
      <LegendCol>
        <LegendHeader>Gefahrenstellen</LegendHeader>
        <LegendItems>
          <LegendItem>
            <IconWrapper>
              <IconLegendCircle color="#FE7E16" borderWidth={0} size={15} />
            </IconWrapper>
            Beinaheunfälle⁵
          </LegendItem>
        </LegendItems>
      </LegendCol>
    </Legend>
  )
}
