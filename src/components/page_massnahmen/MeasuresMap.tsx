import { MAPTILER_STYLE, MAX_BOUNDS, MAXZOOM, MINZOOM } from '@components/maps/constants'
import { AllLayers } from '@components/page_radnetz/Map/AllLayers'
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

// initialViewState: we add padding right on desktop to make space for the sidebar
const fitBoundsOptionsInitialMapView = {
  mobile: { padding: { right: 15, left: 15, top: 15, bottom: 15 } },
}

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

  const selectedLine = selectedLineId
    ? {
        type: 'FeatureCollection',
        features: geometry.filter((f) => f.properties['NUDAFA_ID'] === selectedLineId),
      }
    : null

  const bbox = turf.bbox(selectableLines)
  const initialMapViewCustom: { bounds: LngLatBoundsLike } = {
    bounds: [
      [bbox[0], bbox[1]],
      [bbox[2], bbox[3]],
    ],
  }

  const selectableLineFeaturesSource = selectableLines ? (
    <Source id="layer_selectable_features" type="geojson" data={selectableLines}>
      <Layer
        // See also  `interactiveLayerIds`
        id="layer_selectable_features--lines"
        type="line"
        paint={{
          'line-width': 7,
          'line-color': '#977214',
          'line-opacity': 0.6,
        }}
        filter={['==', '$type', 'LineString']}
      />
      <Layer
        // See also  `interactiveLayerIds`
        id="layer_selectable_features--points"
        type="symbol"
        layout={{
          'icon-image': 'punktmassnahme',
          'icon-size': ['interpolate', ['linear'], ['zoom'], 10, 0, 11, 0.07, 12.5, 0.2, 15, 0.3],
        }}
        filter={['==', '$type', 'Point']}
      />
    </Source>
  ) : null

  const selectedLineFeaturesSource = selectedLine ? (
    <Source id="selected-geometry" type="geojson" data={selectedLine}>
      <Layer
        id="selected-geometry--lines"
        beforeId="layer_selectable_features--points"
        type="line"
        paint={{
          'line-width': 7.5,
          'line-color': '#EF4444',
          'line-opacity': 1,
        }}
        filter={['==', '$type', 'LineString']}
      />
      <Layer
        id="selected-geometry--point"
        beforeId="layer_selectable_features--points"
        type="circle"
        paint={{
          'circle-radius': ['interpolate', ['linear'], ['zoom'], 10, 0, 11.5, 3, 12.5, 6, 15, 7.5],
          'circle-color': '#EF4444',
          'circle-opacity': 1,
          'circle-translate': [
            'interpolate',
            ['linear'],
            ['zoom'],
            10,
            ['literal', [0, 0]],
            12.5,
            ['literal', [0, 11]],
            15,
            ['literal', [0, 15]],
          ],
        }}
        filter={['==', '$type', 'Point']}
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
        maxBounds={MAX_BOUNDS}
        minZoom={MINZOOM}
        maxZoom={MAXZOOM}
        mapStyle={MAPTILER_STYLE}
        style={{ width: '100%', height: '100%' }}
        // Set map state for <MapData>:
        // onLoad={(event) => handleMapLoad(event)}
        onClick={handleClickMap}
        // Cursor
        cursor={cursorStyle}
        onMouseEnter={() => setCursorStyle('pointer')}
        onMouseLeave={() => setCursorStyle('grab')}
        interactiveLayerIds={[
          'layer_selectable_features--lines',
          'layer_selectable_features--points',
        ]}
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
        {isZielnetzLayer && <AllLayers article="massnahmenZielnetz" />}
        {/* <SourcesLayersArticles article="massnahmenZielnetz" /> */}

        {selectedLineFeaturesSource}
        {selectableLineFeaturesSource}

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
