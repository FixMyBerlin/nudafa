import { IconWrapper, Legend, LegendCol, LegendItem, LegendItems } from './Legend'
import { IconLegendCircle } from './icons/IconLegendCircle'
import { IconLegendLine } from './icons/IconLegendLine'

export const LegendLuftliniennetz = () => {
  return (
    <Legend>
      <LegendCol>
        <LegendItems>
          <LegendItem>
            <IconWrapper>
              <IconLegendLine color="#1B87EB" width={3} />
            </IconWrapper>
            Luftlinien
          </LegendItem>
          <LegendItem>
            <IconWrapper>
              <IconLegendCircle
                color="rgba(10, 90, 245, 0.24)"
                borderColor="#0A5AF5"
                borderWidth={2}
              />
            </IconWrapper>
            Zielpunkte
          </LegendItem>
          <LegendItem>
            <IconWrapper>
              <div className="inline-block w-2.5">
                <IconLegendCircle color="#0A5AF5" borderWidth={0} size={5} />
              </div>
            </IconWrapper>
            Zwangspunkte
          </LegendItem>
        </LegendItems>
      </LegendCol>
    </Legend>
  )
}
