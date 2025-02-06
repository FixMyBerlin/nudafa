import { Source } from 'react-map-gl/maplibre'
import { type MapDataAndLegend } from '../mapData/mapDataAndLegend.const'
import { mapDataBase } from '../mapData/mapDataBase.const'

type Props = { pageMapData: MapDataAndLegend }

export const AllSources = ({ pageMapData }: Props) => {
  const pageSourceUrls = Object.values(pageMapData)
    .map((pageData) => Object.values(pageData.sources).map((source) => source.pmTilesUrl))
    .flat()

  const baseSourceUrls = Object.values(mapDataBase).map((baseData) => baseData.pmTilesUrl)

  const uniqueSourceUrls = [...new Set([...pageSourceUrls, ...baseSourceUrls])]

  return (
    <>
      {uniqueSourceUrls.map((sourceUrl) => {
        return (
          <Source id={sourceUrl} key={sourceUrl} type="vector" url={`pmtiles://${sourceUrl}`} />
        )
      })}
    </>
  )
}
