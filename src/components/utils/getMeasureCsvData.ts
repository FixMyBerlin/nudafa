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
    'description',
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
      acc[key] =
        key === 'description'
          ? measure.body
          : // @ts-expect-error
            Array.isArray(measure.data[key])
            ? // @ts-expect-error
              measure.data[key].join(' | ')
            : // @ts-expect-error
              measure.data[key]
      return acc
    }, {}),
    slug: measure.slug,
    // @ts-expect-error
    geometry_data: JSON.stringify(measure.data.geometry_data),
  }))

  const csvHeader = [...measureDataKeys, 'slug', 'geometry_data']

  return { csvData, csvHeader }
}
