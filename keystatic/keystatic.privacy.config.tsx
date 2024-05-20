import { config, fields, singleton } from '@keystatic/core'

export const keystaticPrivacyConfig: ReturnType<typeof config>['singletons'] = {
  privacypage: singleton({
    entryLayout: 'content',
    label: 'Datenschutz',
    format: { contentField: 'content' },
    path: 'src/content/privacypage/',
    schema: {
      title: fields.text({
        label: 'Überschrift',
        validation: { length: { min: 1, max: 80 } },
      }),
      subTitle: fields.text({
        label: 'Unterüberschrift',
        validation: { length: { max: 160 } },
      }),
      content: fields.mdx({
        label: 'Content',
      }),
    },
  }),
}
