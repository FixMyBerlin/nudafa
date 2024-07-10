import { useStore } from '@nanostores/react'
import type { MapStyleImageMissingEvent } from 'maplibre-gl'
import { useMap } from 'react-map-gl/maplibre'
import { $mapLoaded } from '../utils/store'
import { beforeIds } from './beforeIds.const'

export const SortLayers = () => {
  const { mainMap } = useMap()
  const mapLoaded = useStore($mapLoaded)

  if (!mainMap || !mapLoaded) return null

  mainMap.getMap().on('load', (e: MapStyleImageMissingEvent) => {
    Object.entries(beforeIds).forEach(([layerId, beforeId]) => {
      mainMap.moveLayer(layerId, beforeId)
    })
  })

  return null
}
