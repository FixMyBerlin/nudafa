import {
  IconWrapper,
  Legend,
  LegendCol,
  LegendHeader,
  LegendItem,
  LegendItems,
  LegendSources,
} from './Legend'

import { Icon0 } from './icons/Icon0'
import { Icon1 } from './icons/Icon1'
import { Icon2 } from './icons/Icon2'
import { Icon3 } from './icons/Icon3'
import { Icon4 } from './icons/Icon4'
import { School } from './icons/School'
import { Unsafe } from './icons/Unsafe'
import { WayToSchool } from './icons/WayToSchool'

export const LegendSafety = () => {
  return (
    <Legend>
      <LegendCol>
        <LegendHeader>Schulwegsicherheit</LegendHeader>
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
              <Icon0 />
            </IconWrapper>
            mit Getöteten
          </LegendItem>
          <LegendItem>
            <IconWrapper>
              <Icon1 />
            </IconWrapper>
            mit Schwerverletzten
          </LegendItem>
          <LegendItem>
            <IconWrapper>
              <Icon2 />
            </IconWrapper>
            mit Leichtverletzten
          </LegendItem>
          <LegendItem>
            <IconWrapper>
              <Icon3 />
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
              <Icon4 />
            </IconWrapper>
            Beinaheunfälle⁵
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