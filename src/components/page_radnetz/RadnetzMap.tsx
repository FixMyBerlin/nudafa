import { SmallSpinner } from '@components/spinner/SmallSpinner'
import maplibregl from 'maplibre-gl'
import 'maplibre-gl/dist/maplibre-gl.css'
import * as pmtiles from 'pmtiles'
import { useEffect, useState } from 'react'
import type { LngLatBoundsLike } from 'react-map-gl/maplibre'
import {
  AttributionControl,
  Layer,
  Map,
  NavigationControl,
  Source,
  type ViewStateChangeEvent,
} from 'react-map-gl/maplibre'
import { mapDataAndLegend } from './mapDataAndLegend.const'
import { mapDataBase } from './mapDataBase.const'
import { $clickedMapData, $mapLoaded, $router } from './utils/store'
import { useMapParam, type MapParamObject } from './utils/useMapParam'
import { useScreenHorizontal } from './utils/useScreenHorizontal'

type Props = {
  articleSlug: string
  children?: React.ReactNode
}

// https://maplibre.org/maplibre-gl-js/docs/API/classes/Map/#setmaxbounds
const maxBounds = [
  [13.247683121825787, 52.05970889348518],
  [14.057293817329509, 52.517318654366335],
] satisfies LngLatBoundsLike
// https://maplibre.org/maplibre-gl-js/docs/API/classes/Map/#setminzoom
const minZoom = 7
// https://maplibre.org/maplibre-gl-js/docs/API/classes/Map/#setmaxzoom
const maxZoom = 16
const initialMapView: MapParamObject = {
  zoom: 12,
  longitude: 13.61,
  latitude: 52.35,
}
const interactiveLayerIds: string[] = []

export const RadnetzMap = ({ articleSlug, children }: Props) => {
  const [isScreenHorizontal] = useScreenHorizontal()

  // Setup pmtiles
  useEffect(() => {
    const protocol = new pmtiles.Protocol()
    maplibregl.addProtocol('pmtiles', protocol.tile)
    return () => {
      maplibregl.removeProtocol('pmtiles')
    }
  }, [])

  // Set ?map to `initialMapView` if no `map` present, yet
  useEffect(() => {
    const params = $router.get()
    if (params?.search.map) return
    setMapParams(initialMapView)
  }, [])

  const [cursorStyle, setCursorStyle] = useState('grab')
  const [mapDataLoading, setMapDataLoading] = useState(true)
  const { mapParamsObject, setMapParams } = useMapParam()

  // Update ?map param on zoom or pan of map
  const handleMoveEnd = (event: ViewStateChangeEvent) => {
    const { latitude, longitude, zoom } = event.viewState
    setMapParams({ latitude, longitude, zoom })
  }

  const articleMapSources = mapDataAndLegend[articleSlug]?.sources

  return (
    <div className="relative h-[500px] w-full md:h-full">
      <Map
        id="mainMap"
        // Map View
        initialViewState={mapParamsObject()}
        onMoveEnd={handleMoveEnd}
        // Contain Map
        maxBounds={maxBounds}
        minZoom={minZoom}
        maxZoom={maxZoom}
        // Style: https://cloud.maptiler.com/maps/dataviz/
        mapStyle="https://api.maptiler.com/maps/dataviz/style.json?key=ECOoUBmpqklzSCASXxcu"
        style={{ width: '100%', height: '100%' }}
        // Set map state for <MapData>:
        onLoad={() => $mapLoaded.set(true)}
        // "Loading…"
        onData={() => setMapDataLoading(true)}
        onIdle={() => setMapDataLoading(false)}
        // Cursor
        // UNUSED at the moment
        interactiveLayerIds={interactiveLayerIds}
        cursor={cursorStyle}
        onMouseEnter={() => setCursorStyle('pointer')}
        onMouseLeave={() => setCursorStyle('grab')}
        // Inspector
        // UNUSED at the moment
        onClick={(event) => $clickedMapData.set(event.features)}
        // Some defaults
        attributionControl={false}
        dragRotate={false}
        scrollZoom={isScreenHorizontal}
        // @ts-expect-error: See https://github.com/visgl/react-map-gl/issues/2310
        RTLTextPlugin={null}
      >
        {children}

        {mapDataLoading && (
          <div className="absolute left-5 top-5 flex items-center justify-center">
            <SmallSpinner />
          </div>
        )}

        {articleMapSources &&
          Object.entries(articleMapSources).map(([sourceId, sourceData]) => {
            const sourceKey = `${articleSlug}-${sourceId}`
            return (
              <Source key={sourceKey} type="vector" url={`pmtiles://${sourceData.pmTilesUrl}`}>
                {sourceData.layers?.map((layer) => {
                  const layerKey = `${sourceKey}-${layer.id}`
                  return <Layer key={layerKey} {...layer} source-layer="default" />
                })}
              </Source>
            )
          })}

        {Object.entries(mapDataBase).map(([sourceId, sourceData]) => {
          const sourceKey = `${articleSlug}-${sourceId}`
          return (
            <Source key={sourceKey} type="vector" url={`pmtiles://${sourceData.pmTilesUrl}`}>
              {sourceData.layers?.map((layer) => {
                const layerKey = `${sourceKey}-${layer.id}`
                return <Layer key={layerKey} {...layer} source-layer="default" />
              })}
            </Source>
          )
        })}

        <AttributionControl compact={true} position="bottom-left" />
        <NavigationControl
          showCompass={false}
          position={isScreenHorizontal ? 'top-left' : 'top-right'}
        />
      </Map>
    </div>
  )
}
