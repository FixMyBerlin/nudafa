import { defineCollection, z } from 'astro:content'
import { contentBaseMeasureTowns } from './measuretownsKeystatic'
import { loader } from './utils/loader'
import { astroWidgetChartHorizontal } from './widgets/widgetChartHorizontal'
import { astroWidgetChartRelativeVertical } from './widgets/widgetChartRelativeVertical'
import { astroWidgetChartVertical } from './widgets/widgetChartVertical'

export const astroMeasuretownsDefinition = defineCollection({
  loader: loader(contentBaseMeasureTowns, 'json'),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      general: z.object({
        widgetMarkdown: z.string().optional(),
        widgetFahrradklimatest: z.object({
          title: z.string().optional(),
          subText: z.string().optional(),
          chartHorizontal: astroWidgetChartHorizontal,
        }),
        widgetBilder: z
          .array(
            z.object({
              image: image(),
              imageCopyright: z.string().optional(),
              alt: z.string().optional(),
            }),
          )
          .optional(),
      }),
      traffic: z.object({
        widgetPentlersaldo: z.object({
          chartVertical: astroWidgetChartVertical,
        }),
        widgetVerkehrsbelastung: z.object({
          title: z.string().optional(),
          subText: z.string().optional(),
          chartRelativeVertical: astroWidgetChartRelativeVertical,
        }),
        widgetFahrzeuge: z.object({
          chartVertical: astroWidgetChartVertical,
        }),
        widgetModalsplit: z.object({
          title: z.string().optional(),
          subText: z.string().optional(),
          chartVertical: astroWidgetChartVertical,
        }),
        widgetStrassennetz: z.object({
          chartRelativeVertical: astroWidgetChartRelativeVertical,
        }),
        widgetUnfaelle: z.object({
          title: z.string().optional(),
          subText: z.string().optional(),
          list: z.array(z.object({ number: z.number(), label: z.string(), color: z.string() })),
          source: z.string().optional(),
        }),
      }),
      goals: z.object({
        widgetMarkdown: z.string().optional(),
        widgetPeople: z.string().optional(),
        widgetInvestitionen: z.object({
          title: z.string().optional(),
          tableTitle: z.string().optional(),
          sourceLink: z.string().optional(),
          population: z.number().optional(),
          table: z.array(
            z.object({
              label: z.string().optional(),
              ausgaben: z.number(),
              eigenanteil: z.number(),
            }),
          ),
          chartHorizontal: astroWidgetChartHorizontal,
        }),
      }),
    }),
})
