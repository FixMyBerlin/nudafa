import measures from '../data/geojson/measures.json'

export const getGeometryByNudafaId = (nudafaId: string) => {
  const feature = measures.features.find((feature) => feature.properties.nudafaid === nudafaId)
  return feature
}
