import type { Measure } from '@components/page_massnahmen/types'
import { getGeometryByNudafaId } from 'src/utils/getGeometryByNudafaId'

export const getMeasuresCsvData = (measures: Measure[]) => {
  for (const measure of measures) {
    if (measure.data.geometry === true) {
      // @ts-expect-error
      measure.data.geometry_data = getGeometryByNudafaId(measure.data.nudafa_id)
    }
  }

  const measureDataKeys = [
    'nudafa_id',
    'geometry',
    'location',
    'title',
    'problem',
    'topics',
    'project_hidden',
    'complexity_level',
    'status',
    'urgency',
    'start',
    'deadline',
    'deadline_hidden',
    'costs_amount',
    'costs_remarks',
    'funding_quota',
    'admin_authority',
    'stakeholders',
    'town',
    'length',
    'imageCopyright',
  ]

  const csvData = measures.map((measure) => ({
    ...measureDataKeys.reduce((acc, key) => {
      // @ts-expect-error
      acc[key] = Array.isArray(measure.data[key])
        ? // @ts-expect-error
          measure.data[key].join(' | ')
        : // @ts-expect-error
          measure.data[key]
      return acc
    }, {}),
    slug: measure.slug,
    // @ts-expect-error
    geometry_data: JSON.stringify(measure.data.geometry_data),
    description: measure.body,
  }))

  const csvHeader = [...measureDataKeys, 'slug', 'geometry_data', 'description']

  return { csvData, csvHeader }
}
