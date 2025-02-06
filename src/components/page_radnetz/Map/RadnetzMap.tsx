import { MAPTILER_STYLE, MAX_BOUNDS, MAXZOOM, MINZOOM } from '@components/maps/constants'
import { SmallSpinner } from '@components/spinner/SmallSpinner'
import { useStore } from '@nanostores/react'
import maplibregl from 'maplibre-gl'
import 'maplibre-gl/dist/maplibre-gl.css'
import * as pmtiles from 'pmtiles'
import { useEffect, useState } from 'react'
import type { LngLatBoundsLike } from 'react-map-gl/maplibre'
import {
  AttributionControl,
  Map,
  MapProvider,
  NavigationControl,
  type ViewStateChangeEvent,
} from 'react-map-gl/maplibre'
import {
  generateArticleLayers,
  mapDataAndLegendMassnahmen,
} from '../mapData/mapDataAndLegend.const'
import { generateBaseLayers } from '../mapData/mapDataBase.const'
import { MapDebugHelper } from '../MapDebugHelper/MapDebugHelper'
import { beforeIds } from '../sortLayers/beforeIds.const'
import { $clickedMapData, $mapLoaded, $router } from '../utils/store'
import { useMapParam, type MapParamObject } from '../utils/useMapParam'
import { useScreenHorizontal } from '../utils/useScreenHorizontal'
import { AllLayers } from './AllLayers'
import { AllSources } from './AllSources'

type Props = {
  children?: React.ReactNode
}

const initialMapView: { center: MapParamObject; bounds: { bounds: LngLatBoundsLike } } = {
  center: {
    zoom: 11,
    longitude: 13.610416,
    latitude: 52.344601,
  },
  bounds: {
    bounds: [
      [13.559414556, 52.311013214],
      [13.653410334, 52.38213296],
    ],
  },
}

// initialViewState: we add padding right on desktop to make space for the sidebar
const fitBoundsOptionsInitialMapView = {
  desktop: { padding: { right: 490, left: 10, top: 10, bottom: 10 } },
  mobile: { padding: { right: 5, left: 5, top: 5, bottom: 5 } },
}

const interactiveLayerIds: string[] = []

export const RadnetzMap = ({ children }: Props) => {
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
    setMapParams(initialMapView.center)
  }, [])

  const [cursorStyle, setCursorStyle] = useState('grab')
  const [mapDataLoading, setMapDataLoading] = useState(true)
  const { setMapParams } = useMapParam()

  // Update ?map param on zoom or pan of map
  const handleMoveEnd = (event: ViewStateChangeEvent) => {
    const { latitude, longitude, zoom } = event.viewState
    setMapParams({ latitude, longitude, zoom })
  }

  const handleMapLoad = (event: maplibregl.MapLibreEvent) => {
    $mapLoaded.set(true)

    // Sort the layers based on beforeIds.const.ts
    const layers = event.target.getStyle().layers
    Object.entries(beforeIds).forEach(([layerId, beforeId]) => {
      const layerExists = Boolean(layers.find((l) => l.id === layerId))
      if (!layerExists) return
      try {
        event.target.moveLayer(layerId, beforeId)
      } catch (error) {
        console.log('ERROR', error)
      }
    })
  }

  const articleSlug = useStore($router)?.params.section
  if (!articleSlug) return null

  return (
    <MapProvider>
      <Map
        id="mainMap"
        // Map View
        initialViewState={{
          ...initialMapView.bounds,
          fitBoundsOptions:
            typeof window !== 'undefined' && window.matchMedia('(min-width: 768px)').matches
              ? fitBoundsOptionsInitialMapView.desktop
              : fitBoundsOptionsInitialMapView.mobile,
        }}
        onMoveEnd={handleMoveEnd}
        // Contain Map
        maxBounds={MAX_BOUNDS}
        minZoom={MINZOOM}
        maxZoom={MAXZOOM}
        mapStyle={MAPTILER_STYLE}
        style={{ width: '100%', height: '100%' }}
        // Set map state for <MapData>:
        onLoad={(event) => handleMapLoad(event)}
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

        <AllSources pageMapData={mapDataAndLegendMassnahmen} />
        <AllLayers
          layers={[
            ...generateBaseLayers(),
            ...generateArticleLayers(mapDataAndLegendMassnahmen, articleSlug),
          ]}
        />

        <AttributionControl compact={true} position="bottom-left" />
        <NavigationControl
          showCompass={false}
          position={isScreenHorizontal ? 'top-left' : 'top-right'}
        />
        <MapDebugHelper />
      </Map>
    </MapProvider>
  )
}
