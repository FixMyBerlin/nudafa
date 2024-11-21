import { fields } from '@keystatic/core'
import { z } from 'astro/zod'

export const astroWidgetChartHorizontal = z.object({
  title: z.string().optional(),
  height: z.number().optional(),
  data: z.array(
    z.object({
      label: z.string(),
      values: z.array(
        z.object({
          value: z.number(),
          color: z.string(),
        }),
      ),
    }),
  ),
  legend: z.array(
    z.object({
      text: z.string(),
      color: z.string(),
    }),
  ),
  source: z.string().optional(),
})

export const keystaticWidgetChartHorizontal = fields.object(
  {
    title: fields.text({ label: 'Screenreader Chart Titel' }),
    height: fields.number({ label: 'Höhe in Pixel' }),
    data: fields.array(
      fields.object({
        label: fields.text({ label: 'Label der Balken' }),
        values: fields.array(
          fields.object({
            value: fields.number({ label: 'Balken Wert' }),
            color: fields.text({
              label: 'Balken Farbe (HEX, muss mit legende übereinstimmen',
            }),
          }),
          {
            label: 'Balken',
            itemLabel: (props) => String(props.fields.value.value),
          },
        ),
      }),
      {
        label: 'Balken',
        itemLabel: (props) => props.fields.label.value,
      },
    ),
    legend: fields.array(
      fields.object({
        text: fields.text({ label: 'Legende Text' }),
        color: fields.text({
          label: 'Legende Farbe (muss mit Balken Farbe übereinstimmen)',
        }),
      }),
      {
        label: 'Legende',
        itemLabel: (props) => props.fields.text.value,
      },
    ),
    source: fields.text({ label: 'Quellenangabe' }),
  },
  { label: 'CHART: Balkendiagramm horizontal' },
)
