import { IconWrapper, Legend, LegendCol, LegendHeader, LegendItem, LegendItems } from './Legend'
import { IconLegendCircle } from './icons/IconLegendCircle'
import { IconLegendLine } from './icons/IconLegendLine'

export const LegendLuftliniennetz = () => {
  return (
    <Legend>
      <LegendCol>
        <LegendHeader>Luftliniennetz</LegendHeader>
        <LegendItems>
          <LegendItem>
            <IconWrapper>
              <IconLegendCircle
                color="rgba(10, 90, 245, 0)"
                size={3}
                borderColor="hsla(220, 71%, 48%, 73%)"
              />
            </IconWrapper>
            Zentrum
          </LegendItem>
          <LegendItem>
            <IconWrapper>
              <IconLegendCircle
                borderColor="hsla(220, 76%, 26%, 73%)"
                color="rgba(10, 90, 245, 0)"
                size={3}
              />
            </IconWrapper>
            Anzubindende Orte
          </LegendItem>

          <LegendItem>
            <IconWrapper>
              <IconLegendLine strokeDasharray="6 2" color="hsla(233, 71%, 56%, 80%)" width={5} />
            </IconWrapper>
            Luftlinie
          </LegendItem>
          <LegendItem>
            <IconWrapper>
              <IconLegendLine strokeDasharray="6 2" color="hsla(233, 71%, 56%, 80%)" width={3} />
            </IconWrapper>
            Nahverbindung
          </LegendItem>
        </LegendItems>
      </LegendCol>
    </Legend>
  )
}
