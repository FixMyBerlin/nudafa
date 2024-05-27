import 'maplibre-gl/dist/maplibre-gl.css'
import { RadnetzMap } from './RadnetzMap'

export const Radnetz = () => {
  const initialMapView = {
    zoom: 12,
    longitude: 13.61,
    latitude: 52.35,
  }
  return <RadnetzMap initialMapView={initialMapView} interactiveLayerIds={[]} />
}
