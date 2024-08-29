import measures from './../../data/measures/geometry.json'

export const getGeometryByNudafaId = (nudafaId: string) => {
  const features = measures.features.filter(
    (feature) => feature.properties['NUDAFA_ID'] === nudafaId,
  )
  return features
}
export const getGeometryByNudafaIds = (nudafaIds: string[]) => {
  const features = measures.features.filter((feature) =>
    nudafaIds.includes(feature.properties['NUDAFA_ID']),
  )
  return features
}
