import type { MapStyleImageMissingEvent, SourceSpecification } from 'maplibre-gl'
import { useState } from 'react'
import { useMap, type AnyLayer } from 'react-map-gl/maplibre'
import { showDebugMap } from './showDebugMap'

export type MapDebugHelperData = {
  styleModified: string
  styleId: string
  styleName: string
  ourLayers: AnyLayer[]
  ourUpdatedLayers: AnyLayer[]
  source: string
  zoom: number
}

export const showMapDebugHelper = showDebugMap('debug')

export const MapDebugHelper = () => {
  const { mainMap } = useMap()

  if (!showMapDebugHelper || !mainMap) return null

  // mainMap is not available on first render, so we need to catch the erros
  let cleanLayers: AnyLayer[] = []
  let cleanSources: [string, SourceSpecification][] = []
  try {
    const layers = mainMap.getStyle().layers
    cleanLayers = layers.filter(
      (layer) =>
        'source' in layer &&
        !layer.source.startsWith('maptiler') &&
        !layer.source.startsWith('openmaptiles'),
    )

    const sources = mainMap.getStyle().sources
    cleanSources = Object.entries(sources).filter(([key, _]) => !key.startsWith('maptiler'))
  } catch (error) {
    // console.info('MapDebugHelper', error)
  }

  const zoom = mainMap.getZoom()

  mainMap.getMap().showTileBoundaries = true

  // console.log('MapDebugHelper', { layers, sources })

  // Warn when a sprite image is missing
  const [missingImages, setMissingImages] = useState<string[]>([])
  mainMap.getMap().on('styleimagemissing', (e: MapStyleImageMissingEvent) => {
    const imageId = e.id
    if (imageId === 'null') return // Conditional images with Fallback images "Fill pattern: none" result in e.id=NULL
    setMissingImages((prev) => [...new Set([...prev, imageId])])
  })

  return (
    <section className="border-xl absolute left-20 top-2.5 z-50 max-h-[98%] overflow-y-auto rounded bg-pink-500 p-1 text-xs text-white shadow-2xl print:hidden">
      <details>
        <summary className="cursor-pointer">Sources ({cleanSources.length})</summary>
        <pre>{JSON.stringify(cleanSources, undefined, 2)}</pre>
      </details>
      <hr className="border-1 my-0.5 border-gray-600" />

      <details>
        <summary className="cursor-pointer">Layers ({cleanLayers.length})</summary>
        <pre>{JSON.stringify(cleanLayers, undefined, 2)}</pre>
      </details>
      <hr className="border-1 my-0.5 border-gray-600" />

      {missingImages.length > 0 && (
        <>
          <details>
            <summary className="cursor-pointer">
              ERROR: {missingImages.length} missing images
            </summary>
            <pre>{JSON.stringify(missingImages, undefined, 2)}</pre>
          </details>
          <hr className="border-1 my-0.5 border-gray-600" />
        </>
      )}

      <div>Zoom: {zoom}</div>
    </section>
  )
}
