import { MapDebugHelper } from '@components/page_radnetz/MapDebugHelper/MapDebugHelper'
import { useScreenHorizontal } from '@components/page_radnetz/utils/useScreenHorizontal'
import type { FeatureCollection } from 'geojson'
import maplibregl from 'maplibre-gl'
import 'maplibre-gl/dist/maplibre-gl.css'
import * as pmtiles from 'pmtiles'
import { useEffect, useState } from 'react'
import type { LngLatBoundsLike } from 'react-map-gl/maplibre'
import {
  AttributionControl,
  Layer,
  Map,
  MapProvider,
  NavigationControl,
  Source,
} from 'react-map-gl/maplibre'
type Props = {
  geometry: any
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

const initialMapView: { bounds: LngLatBoundsLike } = {
  bounds: [
    [13.559414556, 52.311013214],
    [13.653410334, 52.38213296],
  ],
}

// initialViewState: we add padding right on desktop to make space for the sidebar
const fitBoundsOptionsInitialMapView = {
  mobile: { padding: { right: 5, left: 5, top: 5, bottom: 5 } },
}

// Style: https://cloud.maptiler.com/maps/fe7d06df-9fbd-43f3-bd9e-8f394e41efd0/
export const MAPTILER_STYLE =
  'https://api.maptiler.com/maps/fe7d06df-9fbd-43f3-bd9e-8f394e41efd0/style.json?key=ECOoUBmpqklzSCASXxcu'

export const MeasureMap = ({ geometry }: Props) => {
  const [isScreenHorizontal] = useScreenHorizontal()

  // Setup pmtiles
  useEffect(() => {
    const protocol = new pmtiles.Protocol()
    maplibregl.addProtocol('pmtiles', protocol.tile)
    return () => {
      maplibregl.removeProtocol('pmtiles')
    }
  }, [])

  const [cursorStyle, setCursorStyle] = useState('grab')

  const geojson: FeatureCollection = {
    type: 'FeatureCollection',
    features: [...geometry],
  }

  const layerStyle = {
    id: 'line-layer',
    type: 'line',
    source: 'line-source',
    layout: {
      'line-join': 'round',
      'line-cap': 'round',
    },
    paint: {
      'line-color': 'hsl(325, 95%, 44%)',
      'line-width': 8,
    },
  }

  return (
    <MapProvider>
      <Map
        id="mainMap"
        // Map View
        initialViewState={{
          ...initialMapView,
          fitBoundsOptions: fitBoundsOptionsInitialMapView.mobile,
        }}
        // onMoveEnd={handleMoveEnd}
        // Contain Map
        maxBounds={maxBounds}
        minZoom={minZoom}
        maxZoom={maxZoom}
        mapStyle={MAPTILER_STYLE}
        style={{ width: '100%', height: '100%' }}
        // Set map state for <MapData>:
        // onLoad={(event) => handleMapLoad(event)}

        // Cursor
        cursor={cursorStyle}
        onMouseEnter={() => setCursorStyle('pointer')}
        onMouseLeave={() => setCursorStyle('grab')}
        // Inspector
        // UNUSED at the moment
        // Some defaults
        attributionControl={false}
        dragRotate={false}
        scrollZoom={isScreenHorizontal}
        // @ts-expect-error: See https://github.com/visgl/react-map-gl/issues/2310
        RTLTextPlugin={null}
      >
        <Source id="my-data" type="geojson" data={geojson}>
          {/* @ts-ignore */}
          <Layer {...layerStyle} />
        </Source>
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
