import type { Feature } from 'maplibre-gl'
import measures from './../../data/measures/geometry.json'

export const getGeometryByNudafaId = (nudafaId: string): Feature[] => {
  const features = measures.features.filter(
    (feature) => feature.properties['NUDAFA_ID'] === nudafaId,
  )
  // @ts-ignore todo make sure we can be sure of geometry type - as we fetch the geo data locally, we have control over this
  return features as Feature[]
}
export const getGeometryByNudafaIds = (nudafaIds: string[]): Feature[] => {
  const features = measures.features
    .filter((feature) => feature.properties['NUDAFA_ID'])
    .filter((feature) => nudafaIds.includes(feature.properties['NUDAFA_ID']!))
  // @ts-ignore todo make sure we can be sure of geometry type - as we fetch the geo data locally, we have control over this
  return features as Feature[]
}
