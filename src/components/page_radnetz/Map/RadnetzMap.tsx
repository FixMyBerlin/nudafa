import { SmallSpinner } from '@components/spinner/SmallSpinner'
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
import { SourcesLayersArticles } from '../Map/SourcesLayersArticles'
import { SourcesLayersBase } from '../Map/SourcesLayersBase'
import { MapDebugHelper } from '../MapDebugHelper/MapDebugHelper'
import { SortLayers } from '../sortLayers/SortLayers'
import { $clickedMapData, $mapLoaded, $router } from '../utils/store'
import { useMapParam, type MapParamObject } from '../utils/useMapParam'
import { useScreenHorizontal } from '../utils/useScreenHorizontal'

type Props = {
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
const maxZoom = 22
const initialMapView: { center: MapParamObject; bounds: { bounds: LngLatBoundsLike } } = {
  center: {
    zoom: 11,
    longitude: 13.610416,
    latitude: 52.344601,
  },
  bounds: {
    bounds: [
      [13.557266, 52.301193],
      [13.662332, 52.3849],
    ],
  },
}

const fitBoundsOptionsInitialMapView = {
  desktop: { padding: { right: 480, left: 20, top: 20, bottom: 20 } },
  mobile: { padding: { right: 10, left: 10, top: 10, bottom: 10 } },
}

const interactiveLayerIds: string[] = []

// Style: https://cloud.maptiler.com/maps/fe7d06df-9fbd-43f3-bd9e-8f394e41efd0/
export const MAPTILER_STYLE =
  'https://api.maptiler.com/maps/fe7d06df-9fbd-43f3-bd9e-8f394e41efd0/style.json?key=ECOoUBmpqklzSCASXxcu'

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
  const { mapParamsObject, setMapParams } = useMapParam()

  // Update ?map param on zoom or pan of map
  const handleMoveEnd = (event: ViewStateChangeEvent) => {
    const { latitude, longitude, zoom } = event.viewState
    setMapParams({ latitude, longitude, zoom })
  }

  return (
    <MapProvider>
      <Map
        id="mainMap"
        // Map View
        initialViewState={
          mapParamsObject()
            ? mapParamsObject()
            : {
                ...initialMapView.bounds,
                fitBoundsOptions: window.matchMedia('(min-width: 768px)').matches
                  ? fitBoundsOptionsInitialMapView.desktop
                  : fitBoundsOptionsInitialMapView.mobile,
              }
        }
        onMoveEnd={handleMoveEnd}
        // Contain Map
        maxBounds={maxBounds}
        minZoom={minZoom}
        maxZoom={maxZoom}
        mapStyle={MAPTILER_STYLE}
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

        <SourcesLayersArticles />
        <SourcesLayersBase />
        <SortLayers />

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
