import 'maplibre-gl/dist/maplibre-gl.css'
import React from 'react'
import { Layer, Source } from 'react-map-gl/maplibre'
import { mapDataBase } from '../mapData/mapDataBase.const'

export const SourcesLayersBase = () => {
  return (
    <>
      {Object.entries(mapDataBase).map(([sourceId, sourceData]) => {
        return (
          <React.Fragment key={sourceId}>
            <Source id={sourceId} type="vector" url={`pmtiles://${sourceData.pmTilesUrl}`} />
            {sourceData.layers?.map((layer) => {
              return (
                <Layer
                  {...layer}
                  key={layer.id}
                  source={sourceId}
                  source-layer="default"
                  // A static helper layer from https://cloud.maptiler.com/maps/editor?map=fe7d06df-9fbd-43f3-bd9e-8f394e41efd0
                  // This makes sure this layer always stays on above the page layers
                  beforeId="nudafa-beforeId-maskierung"
                />
              )
            })}
          </React.Fragment>
        )
      })}
    </>
  )
}
