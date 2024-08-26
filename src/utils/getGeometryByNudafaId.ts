import measures from './../../data/measures/geometry.json'

// todo return multiple features if there are multiple

export const getGeometryByNudafaId = (nudafaId: string) => {
  const features = measures.features.filter(
    (feature) => feature.properties['NUDAFA_ID'] === nudafaId,
  )
  return features
}
