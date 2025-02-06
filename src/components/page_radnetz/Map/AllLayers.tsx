import { Layer } from 'react-map-gl/maplibre'
import { type MapDataLayers } from '../mapData/mapDataBase.const'

type Props = {
  layers: MapDataLayers
}

export const AllLayers = ({ layers }: Props) => {
  return (
    <>
      {layers.map(({ pageSlug, sourceId, pmTilesUrl, layersVisible, layer }) => {
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
