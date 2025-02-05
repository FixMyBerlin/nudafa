import { useStore } from '@nanostores/react'
import { Layer } from 'react-map-gl/maplibre'
import { mapDataAndLegend } from '../mapData/mapDataAndLegend.const'
import { mapDataBase } from '../mapData/mapDataBase.const'
import { $router } from '../utils/store'

type Props = {
  article?: string
}

export const AllLayers = ({ article }: Props) => {
  const router = useStore($router)
  const articleSlug = article || router?.params.section
  if (!articleSlug) return null

  const articleLayers = Object.entries(mapDataAndLegend)
    .map(([pageSlug, pageData]) => {
      // We render all layer, but show only those that belong to the current article
      // This way we can manage one beforIds list for all layers
      const layersVisible = pageSlug === articleSlug
      return Object.entries(pageData.sources).map(([sourceId, sources]) => {
        return sources.layers.map((layer) => {
          return { pageSlug, sourceId, pmTilesUrl: sources.pmTilesUrl, layersVisible, layer }
        })
      })
    })
    .flat(2)

  const baseLayers = Object.entries(mapDataBase)
    .map(([sourceId, sourceData]) => {
      return sourceData.layers.map((layer) => {
        return {
          pageSlug: 'base',
          sourceId,
          pmTilesUrl: sourceData.pmTilesUrl,
          layersVisible: true,
          layer,
        }
      })
    })
    .flat()

  const allLayers = [...articleLayers, ...baseLayers]

  return (
    <>
      {allLayers.map(({ pageSlug, sourceId, pmTilesUrl, layersVisible, layer }) => {
        // Layers might have a layout property which we merge here with our visibility property
        const visibility = layersVisible
          ? ({ visibility: 'visible' } as const)
          : ({ visibility: 'none' } as const)
        const layerLayout = { ...visibility, ...(layer.layout || {}) }

        const layerKey = `${pageSlug}-${sourceId}-${layer.id}`

        return (
          <Layer
            {...layer}
            source={pmTilesUrl}
            key={layerKey}
            id={layerKey}
            source-layer="default"
            layout={layerLayout}
            beforeId="nudafa-beforeId-pagelayer"
          />
        )
      })}
    </>
  )
}
