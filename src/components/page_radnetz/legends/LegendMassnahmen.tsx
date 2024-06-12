import { IconWrapper, Legend, LegendCol, LegendItem, LegendItems } from './Legend'
import { IconLegendCircle } from './icons/IconLegendCircle'
import { IconLegendLine } from './icons/IconLegendLine'

export const LegendMassnahmen = () => {
  return (
    <Legend>
      <LegendCol>
        <LegendItems>
          <LegendItem>
            <IconWrapper>
              <IconLegendLine color="#9C0AF5" width={5} />
            </IconWrapper>
            Alle Maßnahmen streckenbezogen
          </LegendItem>
          <LegendItem>
            <IconWrapper>
              <div className="inline-block w-2.5">
                <IconLegendCircle color="#9C0AF5" borderWidth={0} size={5} />
              </div>
            </IconWrapper>
            Alle Maßnahmen punktbezogen
          </LegendItem>
        </LegendItems>
      </LegendCol>
    </Legend>
  )
}
