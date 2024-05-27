import 'maplibre-gl/dist/maplibre-gl.css'
import { RadnetzMap } from './RadnetzMap'
import { RadnetzNavMobileAndDesktop } from './RadnetzNav'

export const Radnetz = () => {
  const initialMapView = {
    zoom: 12,
    longitude: 13.61,
    latitude: 52.35,
  }
  return <RadnetzMap initialMapView={initialMapView} interactiveLayerIds={[]} />

  return (
    <main className="relative flex h-full w-full flex-row">
      <RadnetzNavMobileAndDesktop />
      <RadnetzMap initialMapView={initialMapView} interactiveLayerIds={[]} />
    </main>
  )
}
