import { IconWrapper, Legend, LegendCol, LegendHeader, LegendItem, LegendItems } from './Legend'
import { IconLegendLine } from './icons/IconLegendLine'

export const LegendBestand = () => {
  return (
    <Legend>
      <LegendCol>
        <LegendHeader>Ist-Zustand Radinfrastruktur</LegendHeader>
        <LegendItems>
          <LegendItem>
            <IconWrapper>
              <IconLegendLine color="hsl(209, 76%, 38%)" width={3} />
            </IconWrapper>
            Separate Radinfrastruktur
          </LegendItem>
          <LegendItem>
            <IconWrapper>
              <IconLegendLine color="hsl(209, 76%, 38%)" width={3} strokeDasharray="5 2.5" />
            </IconWrapper>
            gemeinsame Führung mit dem Fußverkehr
          </LegendItem>
          <LegendItem>
            <IconWrapper>
              <IconLegendLine color="hsla(232, 99%, 39%, 0.34)" width={3} strokeDasharray="3 2" />
            </IconWrapper>
            verkehrsberuhigte Bereiche
          </LegendItem>
        </LegendItems>
      </LegendCol>
      <LegendCol>
        <LegendHeader>Fahrradeignung Nebenstraßen</LegendHeader>
        <LegendItems>
          <LegendItem>
            <IconWrapper>
              <IconLegendLine color="hsl(203, 93%, 72%)" width={3} strokeDasharray="2.5 3" />
            </IconWrapper>
            Oberflaeche gut oder sehr gut
          </LegendItem>
          <LegendItem>
            <IconWrapper>
              <IconLegendLine color="hsl(0, 93%, 72%)" width={3} strokeDasharray="2.5 3" />
            </IconWrapper>
            Oberflaeche schlecht
          </LegendItem>
        </LegendItems>
      </LegendCol>
    </Legend>
  )
}
