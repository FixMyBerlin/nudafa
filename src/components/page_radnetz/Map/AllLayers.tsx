import { Layer } from 'react-map-gl/maplibre'
import { type MapDataLayers } from '../mapData/mapDataBase.const'
import { beforeIdEntries } from '../sortLayers/beforeIdEntries.const'

type Props = {
  layers: MapDataLayers
}

export const AllLayers = ({ layers }: Props) => {
  const layerOrderMap = new Map<string, number>()
  beforeIdEntries.forEach(({ key }, index) => {
    layerOrderMap.set(key, index)
  })
  const sortedAllLayers = layers.sort((a, b) => {
    const aIndex = layerOrderMap.get(a.layerKey) ?? Infinity
    const bIndex = layerOrderMap.get(b.layerKey) ?? Infinity
    return aIndex - bIndex
  })

  return (
    <>
      {sortedAllLayers.map(({ layerKey, pmTilesUrl, layersVisible, layer }) => {
        // Layers might have a layout property which we merge here with our visibility property
        const visibility = layersVisible
          ? ({ visibility: 'visible' } as const)
          : ({ visibility: 'none' } as const)
        const layerLayout = { ...visibility, ...(layer.layout || {}) }

        const beforeIdEntry = beforeIdEntries.find((e) => e.key === layerKey)

        return (
          <Layer
            {...layer}
            source={pmTilesUrl}
            key={layerKey}
            id={layerKey}
            source-layer="default"
            layout={layerLayout}
            beforeId={beforeIdEntry?.beforeId}
          />
        )
      })}
    </>
  )
}
