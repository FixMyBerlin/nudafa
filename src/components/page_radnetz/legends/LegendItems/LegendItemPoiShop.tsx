import { IconWrapper, LegendItem } from '../Legend'
import { IconLegendCircle } from '../icons/IconLegendCircle'

import { Heatmap } from './../icons/Heatmap'

export const LegendItemPoiShop = () => {
  return (
    <>
      <LegendItem>
        <IconWrapper>
          <Heatmap />
        </IconWrapper>
        Weitere Zielorte
      </LegendItem>
      <LegendItem className="mt-2">
        <div>
          <em>Wenn nah heran gezoomed:</em> <br />
          <div className="mr-2 inline-block w-2.5">
            <IconLegendCircle color="#e709fb" borderWidth={0} size={5} />
          </div>
          Einkaufen
          <br />
          <div className="mr-2 inline-block w-2.5">
            <IconLegendCircle color="#960854" borderWidth={0} size={5} />
          </div>
          Freizeit / Sport
          <br />
          <div className="mr-2 inline-block w-2.5">
            <IconLegendCircle color="#1122df" borderWidth={0} size={5} />
          </div>
          Bildungsstätten
        </div>
      </LegendItem>
    </>
  )
}
