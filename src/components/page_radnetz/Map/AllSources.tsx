import { Source } from 'react-map-gl/maplibre'
import { mapDataAndLegend } from '../mapData/mapDataAndLegend.const'
import { mapDataBase } from '../mapData/mapDataBase.const'

export const AllSources = () => {
  const pageSourceUrls = Object.values(mapDataAndLegend)
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
