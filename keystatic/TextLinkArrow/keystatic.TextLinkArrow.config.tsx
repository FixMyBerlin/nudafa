import { ArrowRightIcon, ArrowUpRightIcon } from '@heroicons/react/24/outline'
import { fields } from '@keystatic/core'
import { inline } from '@keystatic/core/content-components'

export type TextLinkArrowType = {
  href: string
  display: string
  external: boolean
}

export const keystaticTextLinkArrowConfig = inline({
  label: 'Textlink mit Pfeil',
  schema: {
    href: fields.url({
      label: 'URL',
      validation: { isRequired: true },
    }),
    display: fields.text({
      label: 'Link-Label',
      validation: { isRequired: true },
    }),
    external: fields.checkbox({
      label: 'Externer Link',
      defaultValue: false,
    }),
  },
  NodeView: (props) => {
    return props.value.external ? (
      <span style={{ color: '#977214' }}>
        <ArrowUpRightIcon style={{ width: '0.74rem' }} /> {props.value.display}
      </span>
    ) : (
      <span style={{ color: '#977214' }}>
        <ArrowRightIcon style={{ width: '0.74rem' }} /> {props.value.display}
      </span>
    )
  },
})
