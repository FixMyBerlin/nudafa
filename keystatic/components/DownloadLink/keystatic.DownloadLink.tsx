import { fields } from '@keystatic/core'
import { inline } from '@keystatic/core/content-components'

export type DownloadLinkType = {
  href: string
  display: string
  button: boolean
}

export const keystaticDownloadLink = inline({
  label: 'Download-Link',
  schema: {
    href: fields.file({
      label: 'Dokument',
      validation: { isRequired: true },
      directory: 'public/files/',
      publicPath: '/files/',
    }),
    display: fields.text({
      label: 'Link-Label',
      validation: { isRequired: true },
    }),
    button: fields.checkbox({
      label: 'Button-Design',
      description:
        'Soll der Link als Button dargestellt werden? (Standard) Ansonsten wird der Link als Textlink angezeigt.',
      defaultValue: true,
    }),
  },
  NodeView: (props) => {
    return props.value.button ? (
      <span
        style={{
          display: 'inline-block',
          borderRadius: '9999px',
          borderWidth: '1.5px',
          borderStyle: 'solid',
          borderColor: 'black',
          fontWeight: 600,
          lineHeight: '1.25rem',
          color: '#977214',
          padding: '0.5rem 1rem',
        }}
      >
        {props.value.display}
      </span>
    ) : (
      <span style={{ color: '#977214' }}>{props.value.display}</span>
    )
  },
})
