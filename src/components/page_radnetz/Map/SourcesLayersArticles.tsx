import { useStore } from '@nanostores/react'
import 'maplibre-gl/dist/maplibre-gl.css'
import { Layer, Source } from 'react-map-gl/maplibre'
import { mapDataAndLegend } from '../mapData/mapDataAndLegend.const'
import { $router } from '../utils/store'

export const SourcesLayersArticles = () => {
  const router = useStore($router)
  const articleSlug = router?.params.section
  if (!articleSlug) return null

  return (
    <>
      {Object.entries(mapDataAndLegend).map(([slug, pageData]) => {
        // We render all layer, but show only those that belong to the current article
        // This way we can manage one beforIds list for all layers
        const layersVisible = slug === articleSlug

        return Object.entries(pageData.sources).map(([sourceId, sourceData]) => {
          const sourceKey = `${slug}-${sourceId}`

          return (
            <Source
              id={sourceKey}
              key={sourceKey}
              type="vector"
              url={`pmtiles://${sourceData.pmTilesUrl}`}
            >
              {sourceData.layers?.map((layer) => {
                // Layers might have a layout property which we merge here with our visibility property
                const visibility = layersVisible
                  ? ({ visibility: 'visible' } as const)
                  : ({ visibility: 'none' } as const)
                const layerLayout = { ...visibility, ...(layer.layout || {}) }

                const layerKey = `${slug}-${sourceId}-${layer.id}`

                return (
                  <Layer
                    {...layer}
                    key={layerKey}
                    id={layerKey}
                    source-layer="default"
                    layout={layerLayout}
                  />
                )
              })}
            </Source>
          )
        })
      })}
      )
    </>
  )
}
