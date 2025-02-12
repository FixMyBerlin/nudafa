import { fields } from '@keystatic/core'
import { z } from 'astro/zod'

export const astroWidgetChartVertical = z.object({
  title: z.string().optional(),
  data: z.array(
    z.object({
      label: z.string(),
      value: z.number(),
      color: z.string(),
    }),
  ),
  dataUnit: z.union([z.undefined(), z.literal('percent'), z.literal('none')]),
  source: z.string().optional(),
})

export const keystaticWidgetChartVertical = fields.object(
  {
    title: fields.text({ label: 'Screenreader Chart Titel' }),
    data: fields.array(
      fields.object({
        label: fields.text({ label: 'Label der Balken' }),
        value: fields.number({ label: 'Balken Wert' }),
        color: fields.text({
          label: 'Balken Farbe (HEX, muss mit legende übereinstimmen)',
        }),
      }),
      {
        label: 'Balken',
        itemLabel: (props) => props.fields.label.value,
      },
    ),
    dataUnit: fields.select({
      label: 'Einheit',
      options: [
        { label: 'None', value: 'none' },
        { label: 'Percent', value: 'percent' },
      ],
      defaultValue: 'none',
    }),
    source: fields.text({ label: 'Quellenangabe' }),
  },
  { label: 'CHART: Balkendiagramm vertikal' },
)
