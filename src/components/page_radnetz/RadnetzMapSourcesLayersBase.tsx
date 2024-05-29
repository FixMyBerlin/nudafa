import 'maplibre-gl/dist/maplibre-gl.css'
import { Layer, Source } from 'react-map-gl/maplibre'
import { mapDataBase } from './mapDataBase.const'

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
              return <Layer key={layer.id} {...layer} source-layer="default" />
            })}
          </Source>
        )
      })}
    </>
  )
}
