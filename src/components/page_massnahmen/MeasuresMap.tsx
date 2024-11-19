import { SourcesLayersArticles } from '@components/page_radnetz/Map/SourcesLayersArticles'
import { SourcesLayersBase } from '@components/page_radnetz/Map/SourcesLayersBase'
import { MapDebugHelper } from '@components/page_radnetz/MapDebugHelper/MapDebugHelper'
import { useScreenHorizontal } from '@components/page_radnetz/utils/useScreenHorizontal'
import * as turf from '@turf/turf'
import type { FeatureCollection } from 'geojson'
import maplibregl, { type Feature } from 'maplibre-gl'
import 'maplibre-gl/dist/maplibre-gl.css'
import * as pmtiles from 'pmtiles'
import { useEffect, useState } from 'react'
import type { LngLatBoundsLike, MapLayerMouseEvent } from 'react-map-gl/maplibre'
import {
  AttributionControl,
  Layer,
  Map,
  MapProvider,
  NavigationControl,
  Source,
} from 'react-map-gl/maplibre'
import type { MeasureData } from './types'

type Props = {
  isZielnetzLayer?: boolean
  geometry: Feature[]
  selectedLineId: string | null
  setSelectedLineId?: any
}

const selectableLineLayerId = 'layer_selectable_line_features'

// https://maplibre.org/maplibre-gl-js/docs/API/classes/Map/#setmaxbounds
const maxBounds = [
  [13.247683121825787, 52.05970889348518],
  [14.057293817329509, 52.517318654366335],
] satisfies LngLatBoundsLike
// https://maplibre.org/maplibre-gl-js/docs/API/classes/Map/#setminzoom
const minZoom = 7
// https://maplibre.org/maplibre-gl-js/docs/API/classes/Map/#setmaxzoom
const maxZoom = 22

// initialViewState: we add padding right on desktop to make space for the sidebar
const fitBoundsOptionsInitialMapView = {
  mobile: { padding: { right: 15, left: 15, top: 15, bottom: 15 } },
}

// Style: https://cloud.maptiler.com/maps/fe7d06df-9fbd-43f3-bd9e-8f394e41efd0/
export const MAPTILER_STYLE =
  'https://api.maptiler.com/maps/fe7d06df-9fbd-43f3-bd9e-8f394e41efd0/style.json?key=ECOoUBmpqklzSCASXxcu'

export const MeasureMap = ({
  geometry,
  selectedLineId,
  setSelectedLineId,
  isZielnetzLayer,
}: Props) => {
  const [isScreenHorizontal] = useScreenHorizontal()
  const [cursorStyle, setCursorStyle] = useState('grab')

  // Setup pmtiles
  useEffect(() => {
    const protocol = new pmtiles.Protocol()
    maplibregl.addProtocol('pmtiles', protocol.tile)
    return () => {
      maplibregl.removeProtocol('pmtiles')
    }
  }, [])

  const selectableLines: FeatureCollection = {
    type: 'FeatureCollection',
    // @ts-expect-error
    features: [...geometry],
  }

  const bbox = turf.bbox(selectableLines)

  const initialMapViewCustom: { bounds: LngLatBoundsLike } = {
    bounds: [
      [bbox[0], bbox[1]],
      [bbox[2], bbox[3]],
    ],
  }

  const selectedLine = selectedLineId
    ? {
        type: 'FeatureCollection',
        features: geometry.filter((f) => f.properties['NUDAFA_ID'] === selectedLineId),
      }
    : null

  const selectableLineFeaturesSource = selectableLines ? (
    <Source key={selectableLineLayerId} type="geojson" data={selectableLines}>
      <Layer
        id={selectableLineLayerId}
        type="line"
        paint={{
          'line-width': 7,
          'line-color': ['case', ['has', 'color'], ['get', 'color'], '#977214'],
          'line-opacity': ['case', ['has', 'opacity'], ['get', 'opacity'], 0.6],
        }}
      />
    </Source>
  ) : null

  const selectedLineFeaturesSource = selectedLine ? (
    <Source key="selected-line" type="geojson" data={selectedLine}>
      <Layer
        id="selected-line"
        type="line"
        paint={{
          'line-width': 7.5,
          'line-color': ['case', ['has', 'color'], ['get', 'color'], '#EF4444'],
          'line-opacity': ['case', ['has', 'opacity'], ['get', 'opacity'], 1],
        }}
      />
    </Source>
  ) : null

  const handleClickMap = (e: MapLayerMouseEvent) => {
    const id = e.features?.at(0)?.properties['NUDAFA_ID'] as MeasureData['nudafa_id']
    if (id) setSelectedLineId(id)
  }

  return (
    <MapProvider>
      <Map
        id="mainMap"
        // Map View
        initialViewState={{
          ...initialMapViewCustom,
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
        onClick={handleClickMap}
        // Cursor
        cursor={cursorStyle}
        onMouseEnter={() => setCursorStyle('pointer')}
        onMouseLeave={() => setCursorStyle('grab')}
        interactiveLayerIds={[selectableLines && selectableLineLayerId].flat().filter(Boolean)}
        // Inspector
        // UNUSED at the moment
        // Some defaults
        attributionControl={false}
        dragRotate={false}
        scrollZoom={isScreenHorizontal}
        // @ts-expect-error: See https://github.com/visgl/react-map-gl/issues/2310
        RTLTextPlugin={null}
      >
        <SourcesLayersBase />
        {isZielnetzLayer && <SourcesLayersArticles article="massnahmenZielnetz" />}
        {/* <SourcesLayersArticles article="massnahmenZielnetz" /> */}
        {selectableLineFeaturesSource}
        {selectedLineFeaturesSource}
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
