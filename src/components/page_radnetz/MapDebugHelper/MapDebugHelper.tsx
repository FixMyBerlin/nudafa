import { useStore } from '@nanostores/react'
import { clsx } from 'clsx'
import type { MapStyleImageMissingEvent, SourceSpecification } from 'maplibre-gl'
import { useEffect, useState } from 'react'
import { useMap, type AnyLayer } from 'react-map-gl/maplibre'
import { beforeIds } from '../sortLayers/beforeIds.const'
import { $mapLoaded } from '../utils/store'
import { showDebugMap } from './showDebugMap'

const showMapDebugHelper = showDebugMap('debug')

export const MapDebugHelper = () => {
  const { mainMap } = useMap()
  const [logclicks, setLogclicks] = useState<boolean>()
  const mapLoaded = useStore($mapLoaded)

  if (!showMapDebugHelper || !mainMap) return null

  // mainMap is not available on first render, so we need to catch the erros
  let allLayers: AnyLayer[] = []
  let cleanLayers: AnyLayer[] = []
  let orderedLayers: string[] = []
  let cleanSources: [string, SourceSpecification][] = []
  try {
    allLayers = mainMap.getStyle().layers
    cleanLayers = allLayers.filter(
      (layer) =>
        'source' in layer &&
        !layer.source.includes('maptiler') &&
        !layer.source.includes('openmaptiles'),
    )
    orderedLayers = mainMap.getLayersOrder()

    const sources = mainMap.getStyle().sources
    cleanSources = Object.entries(sources).filter(
      ([key, _]) => !key.includes('maptiler') && !key.includes('openmaptiles'),
    )
  } catch (error) {
    // console.info('MapDebugHelper', error)
  }

  const layerWithoutBeforeId = cleanLayers.filter((layer) => !beforeIds[layer.id])
  const outdatedBeforeIdLayerKeys = Object.entries(beforeIds).filter(
    ([layerKey, _]) => !allLayers.map((l) => l.id).includes(layerKey),
  )
  const outdatedBeforeIds = Object.entries(beforeIds).filter(
    ([_, beforeIdLayerKey]) => !allLayers.map((l) => l.id).includes(beforeIdLayerKey),
  )

  // Fetch existing the sprites
  const [sprites, setSprites] = useState<string | undefined>(undefined)
  useEffect(() => {
    if (!mapLoaded) return
    try {
      const url = mainMap?.getSprite()?.at(0)?.url
      console.log('url', url)
      if (url) {
        fetch(`${url}@2x.json?key=ECOoUBmpqklzSCASXxcu`)
          .then((response) => response.json())
          .then((data) => setSprites(data))
          .catch((error) => setSprites(error.toString()))
      }
    } catch (error) {
      console.info('MapDebugHelper', error, mainMap)
    }
  }, [mapLoaded, mainMap])

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

  if (logclicks) {
    const map = mainMap.getMap()
    map.on('click', (e) => {
      const features = map.queryRenderedFeatures(e.point)
      const cleanFeatures = features.filter(
        (feature) =>
          !feature.source.includes('maptiler') && !feature.source.includes('openmaptiles'),
      )

      console.log(
        'MapDebugHelper feature',
        ...cleanFeatures.map((f) => JSON.parse(JSON.stringify(f))),
      )
    })
  }

  return (
    <section className="border-xl absolute left-20 top-2.5 z-50 max-h-[98%] overflow-y-auto rounded bg-pink-500 p-1 text-xs text-white shadow-2xl print:hidden">
      <button
        onClick={() => setLogclicks((prev) => !prev)}
        className="underline hover:decoration-2"
        disabled={logclicks}
      >
        {logclicks ? 'Clicks are logged to console until reload' : 'Inspect features'}
      </button>

      <details>
        <summary className="cursor-pointer hover:underline">
          Sources ({cleanSources.length})
        </summary>
        <pre>{JSON.stringify(cleanSources, undefined, 2)}</pre>
      </details>
      <hr className="border-1 my-0.5 border-gray-600" />

      <details>
        <summary className="cursor-pointer hover:underline">
          Our Layers ({cleanLayers.length})
        </summary>
        <pre>{JSON.stringify(cleanLayers, undefined, 2)}</pre>
      </details>
      <hr className="border-1 my-0.5 border-gray-600" />

      <details>
        <summary className="cursor-pointer hover:underline">
          All Layers ({allLayers.length})
        </summary>
        {allLayers.map((layer) => {
          return (
            <details key={layer.id}>
              <summary
                className={clsx(
                  'cursor-pointer hover:underline',
                  'layout' in layer && layer.layout?.visibility === 'none'
                    ? 'text-pink-100'
                    : 'font-semibold',
                )}
              >
                <small className="inline-block min-w-28">
                  {'source' in layer ? layer.source : '-'}
                </small>{' '}
                {layer.id}
              </summary>
              <p>
                <code>beforeId</code>: {beforeIds[layer.id] || 'MISSING'}
              </p>
              <pre>{JSON.stringify(layer, undefined, 2)}</pre>
            </details>
          )
        })}
      </details>
      <hr className="border-1 my-0.5 border-gray-600" />

      {missingImages.length > 0 && (
        <>
          <details>
            <summary className="cursor-pointer hover:underline">
              ERROR: {missingImages.length} missing images
            </summary>
            <pre>{JSON.stringify(missingImages, undefined, 2)}</pre>
          </details>
          <hr className="border-1 my-0.5 border-gray-600" />
        </>
      )}

      {sprites && Object.keys(sprites)?.length ? (
        <>
          <details>
            <summary className="cursor-pointer hover:underline">
              Existing sprites ({Object.keys(sprites)?.length})
            </summary>
            <pre>{JSON.stringify(sprites, undefined, 2)}</pre>
          </details>
          <hr className="border-1 my-0.5 border-gray-600" />
        </>
      ) : null}

      <details>
        <summary className="cursor-pointer hover:underline">
          Ordered Layers ({orderedLayers.length})
        </summary>
        {orderedLayers.map((layer, index) => (
          <details key={layer} className="mt-0.5">
            <summary className="flex cursor-pointer items-center gap-2 hover:underline">
              <div className="flex min-w-6 items-center justify-center rounded bg-white/20 px-0.5">
                {index}
              </div>{' '}
              {layer}
            </summary>
            <div className="text-white/60">
              <em>beforeId</em>: {beforeIds[layer] || 'NO BEFORE ID'}
              <br />
              <em>style</em>:{' '}
              <pre>
                <code>
                  {JSON.stringify(
                    cleanLayers.find((l) => l.id === layer),
                    undefined,
                    2,
                  ) || 'NOT FOUND'}
                </code>
              </pre>
            </div>
          </details>
        ))}
      </details>
      <hr className="border-1 my-0.5 border-gray-600" />

      <details>
        <summary className="cursor-pointer hover:underline">
          <code>beforeId</code> helper ({layerWithoutBeforeId.length}/
          {outdatedBeforeIdLayerKeys.length}/{outdatedBeforeIds.length})
        </summary>

        <details>
          <summary className="cursor-pointer hover:underline">
            Layer without a <code>beforeId</code> ({layerWithoutBeforeId.length}):
          </summary>
          About: This checks if all map layers are included in our <code>beforeIds</code> list.
          <br />
          <strong>Add all layer keys from here to the list.</strong>
          <ul>
            {layerWithoutBeforeId.map(({ id }) => (
              <li key={id}>
                <code className="text-red-100">{id}</code>
              </li>
            ))}
          </ul>
        </details>

        <details>
          <summary className="cursor-pointer hover:underline">
            <code>beforeIds</code> to remove ({outdatedBeforeIdLayerKeys.length}):
          </summary>
          About: This checks if all keys in our <code>beforeIds</code> list still match a layer key.
          <br />
          <strong>Remove all entries from our list if no current layer key is found.</strong>
          <ul>
            {outdatedBeforeIdLayerKeys.map(([layerKey, beforeIdLayerKey]) => (
              <li key={layerKey}>
                <strong className="text-red-100">{layerKey}</strong> →{' '}
                <code className="text-white/50">{beforeIdLayerKey}</code>
              </li>
            ))}
          </ul>
        </details>

        <details>
          <summary className="cursor-pointer hover:underline">
            <code>beforeIds</code> to update ({outdatedBeforeIds.length}):
          </summary>
          About: This checks if all <code>beforeId</code> layer keys in our <code>beforeIds</code>{' '}
          list still match a layer key.
          <br />
          <strong>Update all entries from our list to an existing layer key.</strong>
          <ul>
            {outdatedBeforeIds.map(([layerKey, beforeIdLayerKey]) => (
              <li key={layerKey}>
                <code className="text-white/50">{layerKey}</code> →{' '}
                <strong className="text-red-100">{beforeIdLayerKey}</strong>
              </li>
            ))}
          </ul>
        </details>
      </details>
      <hr className="border-1 my-0.5 border-gray-600" />

      <div>Zoom: {zoom}</div>
    </section>
  )
}
