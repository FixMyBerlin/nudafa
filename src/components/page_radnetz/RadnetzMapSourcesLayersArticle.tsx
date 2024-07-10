import { useStore } from '@nanostores/react'
import 'maplibre-gl/dist/maplibre-gl.css'
import { Layer, Source } from 'react-map-gl/maplibre'
import { mapDataAndLegend } from './mapData/mapDataAndLegend.const'
import { beforeIds } from './utils/beforeIds.const'
import { $router } from './utils/store'

export const RadnetzMapSourcesLayersArticle = () => {
  const router = useStore($router)
  const articleSlug = router?.params.section
  if (!articleSlug) return null

  const articleMapSources = mapDataAndLegend[articleSlug]?.sources
  if (!articleMapSources) return null

  return (
    <>
      {Object.entries(articleMapSources).map(([sourceId, sourceData]) => {
        const sourceKey = `${articleSlug}-${sourceId}`
        return (
          <Source
            id={sourceKey}
            key={sourceKey}
            type="vector"
            url={`pmtiles://${sourceData.pmTilesUrl}`}
          >
            {sourceData.layers?.map((layer) => {
              const layerKey = `${articleSlug}-${sourceId}-${layer.id}`
              const beforeIdKey = `${sourceId}-${layer.id}`
              const beforeId = beforeIds[beforeIdKey]
                ? beforeIds[articleSlug][beforeIdKey].replace(`${sourceId}-`, '')
                : undefined
              console.log('layer', { sourceId, beforeIdKey, beforeId: beforeIds[beforeIdKey] })
              return <Layer key={layerKey} {...layer} source-layer="default" beforeId={beforeId} />
            })}
          </Source>
        )
      })}
    </>
  )
}
