import { getMeasuresCsvData } from '@components/utils/getMeasureCsvData'
import type { APIRoute } from 'astro'
import { getCollection } from 'astro:content'

// export const GET: APIRoute = async ({ params, request }) => {
export const GET: APIRoute = async () => {
  const measures = await getCollection('measures')
  const { csvHeader, csvData } = getMeasuresCsvData(measures)

  const escapeCsvValue = (value: any) => {
    if (value === null || value === undefined) {
      return ''
    }
    const stringValue = String(value).replace(/"/g, '""')
    return `"${stringValue}"`
  }

  const csvRows = csvData.map((row) => {
    // @ts-expect-error
    return csvHeader.map((key) => escapeCsvValue(row[key])).join(',')
  })

  const csvString = [csvHeader.join(','), ...csvRows].join('\n')

  return new Response(csvString, {
    headers: {
      'Content-Type': 'text/csv',
      'Content-Disposition': 'attachment; filename="measures.csv"',
    },
  })
}
