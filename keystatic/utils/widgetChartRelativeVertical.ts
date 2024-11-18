import { fields } from '@keystatic/core'
import { z } from 'astro/zod'

export const astroWidgetChartRelativeVertical = z.object({
  title: z.string().optional(),
  data: z.array(
    z.object({
      label: z.string(),
      value: z.number(),
    }),
  ),
  dataUnit: z.union([z.undefined(), z.literal('percent'), z.literal('km'), z.literal('')]),
  source: z.string().optional(),
})

export const keystaticWidgetChartRelativeVertical = fields.object(
  {
    title: fields.text({ label: 'Screenreader Chart Titel' }),
    data: fields.array(
      fields.object({
        label: fields.text({ label: 'Label der Balken' }),
        value: fields.number({ label: 'Balken Wert' }),
      }),
      {
        label: 'Balken',
        itemLabel: (props) => props.fields.label.value,
      },
    ),
    dataUnit: fields.select({
      label: 'Quellenangabe',
      options: [
        { label: 'None', value: '' },
        { label: 'Percent', value: 'percent' },
        { label: 'Kilometer', value: 'km' },
      ],
      defaultValue: '',
    }),
    source: fields.text({ label: 'Quellenangabe' }),
  },
  { label: 'CHART: Balkendiagramm vertikal' },
)
