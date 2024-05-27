import { IconLegendCircle } from '../IconLegend'
import { IconWrapper, LegendItem } from '../Legend'

export const LegendItemPoiShop = () => {
  return (
    <>
      <LegendItem>
        <IconWrapper>
          {/* <IconHeatmap /> */}
          <div>hallo</div>
        </IconWrapper>
        Wichtige Zielorte
      </LegendItem>
      {/* todo legend */}
      <LegendItem>
        <IconWrapper> </IconWrapper>
        <div>
          <em>Wenn nah heran gezoomed:</em> <br />
          <div style={{ width: '10px', display: 'inline-block' }}>
            <IconLegendCircle color="#e709fb" borderWidth={0} size={5} />
          </div>{' '}
          Einkaufen
          <br />
          <div style={{ width: '10px', display: 'inline-block' }}>
            <IconLegendCircle color="#960854" borderWidth={0} size={5} />
          </div>{' '}
          Freizeit / Sport
          <br />
          <div style={{ width: '10px', display: 'inline-block' }}>
            <IconLegendCircle color="#1122df" borderWidth={0} size={5} />
          </div>{' '}
          Bildungsstätten
        </div>
      </LegendItem>
    </>
  )
}
