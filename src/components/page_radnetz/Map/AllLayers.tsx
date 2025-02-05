import { useStore } from '@nanostores/react'
import React from 'react'
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

  const articleLayers = Object.entries(mapDataAndLegend).map(([slug, pageData]) => {
    // We render all layer, but show only those that belong to the current article
    // This way we can manage one beforIds list for all layers
    const layersVisible = slug === articleSlug
    return { sources: pageData.sources, visible: layersVisible, slug }
  })

  const baseLayers = Object.entries(mapDataBase).map(([slug, sourceData]) => {
    return { sources: { [slug]: sourceData }, visible: true, slug }
  })

  const allLayers = [...articleLayers, ...baseLayers]

  return (
    <>
      {allLayers.map(({ sources, visible, slug }) => {
        return Object.entries(sources).map(([sourceId, sourceData]) => {
          const sourceKey = `${slug}-${sourceId}`

          return (
            <React.Fragment key={sourceKey}>
              {sourceData.layers?.map((layer) => {
                // Layers might have a layout property which we merge here with our visibility property
                const visibility = visible
                  ? ({ visibility: 'visible' } as const)
                  : ({ visibility: 'none' } as const)
                const layerLayout = { ...visibility, ...(layer.layout || {}) }

                const layerKey = `${slug}-${sourceId}-${layer.id}`

                return (
                  <Layer
                    {...layer}
                    source={sourceData.pmTilesUrl}
                    key={layerKey}
                    id={layerKey}
                    source-layer="default"
                    layout={layerLayout}
                    beforeId="nudafa-beforeId-pagelayer"
                  />
                )
              })}
            </React.Fragment>
          )
        })
      })}
    </>
  )
}
