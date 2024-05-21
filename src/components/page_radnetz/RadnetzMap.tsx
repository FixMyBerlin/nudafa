import maplibregl from 'maplibre-gl'
import 'maplibre-gl/dist/maplibre-gl.css'
import * as pmtiles from 'pmtiles'
import { useEffect, useState } from 'react'
import type { LngLatBoundsLike } from 'react-map-gl/maplibre'
import {
  AttributionControl,
  Map,
  NavigationControl,
  type ViewStateChangeEvent,
} from 'react-map-gl/maplibre'
import { $clickedMapData, $mapLoaded, $router } from './utils/store'
import { useMapParam, type MapParamObject } from './utils/useMapParam'

type Props = {
  initialMapView: MapParamObject
  interactiveLayerIds: string[]
  children?: React.ReactNode
}

// https://maplibre.org/maplibre-gl-js/docs/API/classes/Map/#setmaxbounds
const maxBounds = [
  [13.3579, 52.2095],
  [13.825, 52.4784],
] satisfies LngLatBoundsLike
// https://maplibre.org/maplibre-gl-js/docs/API/classes/Map/#setminzoom
const minZoom = 11.5
// https://maplibre.org/maplibre-gl-js/docs/API/classes/Map/#setmaxzoom
const maxZoom = 16

export const RadnetzMap = ({ initialMapView, interactiveLayerIds, children }: Props) => {
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

  return (
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
      // @ts-expect-error: See https://github.com/visgl/react-map-gl/issues/2310
      RTLTextPlugin={null}
    >
      {children}
      {/* TODO: Make Loading state nice with some spinner component */}
      {mapDataLoading && <div className="absolute left-0 top-0 bg-white p-2">Loading...</div>}
      <AttributionControl compact={true} position="bottom-left" />
      <NavigationControl showCompass={false} position="top-left" />
    </Map>
  )
}
