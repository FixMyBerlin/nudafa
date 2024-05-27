import {
  IconWrapper,
  Legend,
  LegendCol,
  LegendHeader,
  LegendItem,
  LegendItems,
  LegendSources,
} from './Legend'

export const LegendSafety = () => {
  return (
    <Legend>
      <LegendCol>
        <LegendHeader>Schulwegsicherheit</LegendHeader>
        <LegendItems>
          <LegendItem>
            <IconWrapper>{/* <IconToSchool /> */}</IconWrapper>
            <span>Schulwege¹ </span>
          </LegendItem>
          <LegendItem>
            <IconWrapper>{/* <IconToSchoolUnsafe /> */}</IconWrapper>
            Unsichere Abschnitte auf Schulwegen²
          </LegendItem>
          <LegendItem>
            <IconWrapper>{/* <IconSchool /> */}</IconWrapper>
            Bildungseinrichtungen³
          </LegendItem>
        </LegendItems>
      </LegendCol>
      <LegendCol>
        <LegendHeader>Unfälle mit Radfahrbeteiligung (2016-2021)⁴</LegendHeader>
        <LegendItems>
          <LegendItem>
            <IconWrapper>{/* <Icons0 /> */}</IconWrapper> mit Getöteten
          </LegendItem>
          <LegendItem>
            <IconWrapper>{/* <Icons1 /> */}</IconWrapper> mit Schwerverletzten
          </LegendItem>
          <LegendItem>
            <IconWrapper>{/* <Icons2 /> */}</IconWrapper> mit Leichtverletzten
          </LegendItem>
          <LegendItem>
            <IconWrapper>{/* <Icons3 /> */}</IconWrapper> mit Sachschaden
          </LegendItem>
        </LegendItems>
      </LegendCol>
      <LegendCol>
        <LegendHeader>Gefahrenstellen</LegendHeader>
        <LegendItems>
          <LegendItem>
            <IconWrapper>{/* <Icons4 /> */}</IconWrapper> Beinaheunfälle⁵
          </LegendItem>
        </LegendItems>
      </LegendCol>
      <LegendSources>
        Quellen: ¹ ² Gemeinde Eichwalde 2020, ³ OpenStreetMap 2020, ⁴ Polizeipräsidium Brandenburg
        2021, ⁵ SimRa - TU Berlin 2020
      </LegendSources>
    </Legend>
  )
}
