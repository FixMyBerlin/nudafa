import { collection, fields } from '@keystatic/core'
import { keystaticWidgetChartHorizontal } from './widgets/widgetChartHorizontal'
import { keystaticWidgetChartRelativeVertical } from './widgets/widgetChartRelativeVertical'
import { keystaticWidgetChartVertical } from './widgets/widgetChartVertical'

const keystaticWidgetTitleSubtext = {
  title: fields.text({ label: 'Titel' }),
  subText: fields.text({
    label: 'Text below Title',
    multiline: true,
    validation: { isRequired: false },
  }),
} as const

const keystaticWidgetMarkdown = (context: string, desc: string | undefined = undefined) =>
  fields.mdx.inline({
    label: `${context}: Widget Content`,
    description: desc,
    options: {
      image: false,
      heading: [3],
      table: false,
    },
  })

export const contentBaseMeasureTowns = '/src/content/measuretowns'
export const keystaticMeasuretownsConfig = collection({
  label: 'Kommunen (Dashboards)',
  slugField: 'title',
  path: `${contentBaseMeasureTowns}/*`,
  format: { data: 'json' },
  entryLayout: 'form',
  columns: ['title'],
  schema: {
    title: fields.slug({
      name: {
        label: 'Titel',
        validation: { length: { min: 1, max: 80 } },
      },
      slug: {
        description: 'Bitte keine Änderungen!',
        label: 'URL-Teil',
        validation: { length: { min: 1, max: 80 } },
      },
    }),
    general: fields.object(
      {
        widgetMarkdown: keystaticWidgetMarkdown(
          'ALLGEMEIN',
          'Sobald dieses Widget gefüllt ist, wird das Modul angezeigt. Die einzelnen Widgets wiederum sind nur sichtbar, wenn sie Text bzw. Chart-Daten enthalten.',
        ),
        widgetFahrradklimatest: fields.object(
          {
            ...keystaticWidgetTitleSubtext,
            chartHorizontal: keystaticWidgetChartHorizontal,
          },
          { label: 'ALLGEMEIN: Widget Fahrradklimatest' },
        ),
        widgetVerkehrsbelastung: fields.object(
          {
            ...keystaticWidgetTitleSubtext,
            chartRelativeVertical: keystaticWidgetChartRelativeVertical,
          },
          { label: 'ALLGEMEIN: Widget Verkehrsbelastung (TODO)' },
        ),
      },
      { label: 'WIDGETS ALLGEMEIN' },
    ),
    traffic: fields.object(
      {
        widgetPentlersaldo: fields.object(
          { chartVertical: keystaticWidgetChartVertical },
          { label: 'VERKEHR: Pentlersaldo' },
        ),
        widgetFahrzeuge: fields.object(
          { chartVertical: keystaticWidgetChartVertical },
          { label: 'VERKEHR: Fahrzeuge' },
        ),
        widgetModalsplit: fields.object(
          { ...keystaticWidgetTitleSubtext, chartVertical: keystaticWidgetChartVertical },
          { label: 'VERKEHR: Modalsplit' },
        ),
        widgetStrassennetz: fields.object(
          { chartRelativeVertical: keystaticWidgetChartRelativeVertical },
          { label: 'VERKEHR: Straßennetz' },
        ),
        widgetUnfaelle: fields.object({
          ...keystaticWidgetTitleSubtext,
          list: fields.array(
            fields.object({
              number: fields.number({ label: 'Zahl' }),
              label: fields.text({ label: 'Text' }),
              color: fields.text({ label: 'Farbe' }),
            }),
            {
              label: 'Unfälle',
              itemLabel: (props) => props.fields.label.value,
            },
          ),
          source: fields.text({ label: 'Quellenangabe' }),
        }),
      },
      { label: 'WIDGETS VERKEHR' },
    ),
    goals: fields.object(
      {
        widgetMarkdown: keystaticWidgetMarkdown('ZIELE: Widget Konzepte'),
        widgetPeople: keystaticWidgetMarkdown('ZIELE: Widget Menschen'),
        widgetInvestitionen: fields.object(
          {
            title: fields.text({ label: 'Titel' }),
            population: fields.number({ label: 'Einwohnerzahl' }),
            table: fields.array(
              fields.object({
                label: fields.text({ label: 'Jahr' }),
                ausgaben: fields.number({ label: 'Ausgaben Gesamt' }),
                eigenanteil: fields.number({ label: 'Eigenanteil' }),
              }),
              {
                label: 'Zeilen',
                itemLabel: (props) => props.fields.label.value,
              },
            ),
            chartHorizontal: keystaticWidgetChartHorizontal,
          },
          { label: 'ZIELE: Widget Investitionen' },
        ),
      },
      { label: 'WIDGETS ZIELE' },
    ),
    // image: fields.image({
    //   label: 'Bild',
    //   validation: { isRequired: true },
    //   description:
    //     'Bild bitte im Format 4:3 (quer) hochladen bzw. wird dementsprechend beschnitten.',
    //   directory: 'src/assets/measuretowns',
    //   publicPath: '/src/assets/measuretowns',
    // }),
    // imageCopyright: fields.text({
    //   label: 'Copyright Bild',
    //   validation: { length: { min: 1, max: 100 } },
    // }),
    // content: fields.mdx({
    //   label: 'Beschreibung',
    //   options: {
    //     image: {
    //       directory: 'src/assets/images/measuretowns',
    //       publicPath: '/src/assets/images/measuretowns/',
    //     },
    //   },
    // }),
  },
})
