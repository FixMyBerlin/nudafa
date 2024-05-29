import 'maplibre-gl/dist/maplibre-gl.css'
import { Layer, Source } from 'react-map-gl/maplibre'
import { mapDataBase } from './mapData/mapDataBase.const'

export const RadnetzMapSourcesLayersBase = () => {
  return (
    <>
      {Object.entries(mapDataBase).map(([sourceId, sourceData]) => {
        return (
          <Source
            id={sourceId}
            key={sourceId}
            type="vector"
            url={`pmtiles://${sourceData.pmTilesUrl}`}
          >
            {sourceData.layers?.map((layer) => {
              return (
                <Layer
                  key={layer.id}
                  {...layer}
                  source-layer="default"
                  // A static helper layer from https://cloud.maptiler.com/maps/editor?map=fe7d06df-9fbd-43f3-bd9e-8f394e41efd0
                  // This makes sure this layer always stays on above the page layers
                  beforeId="nudafa-beforeId-maskierung"
                />
              )
            })}
          </Source>
        )
      })}
    </>
  )
}
