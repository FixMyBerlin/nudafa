import React from 'react'
import { selectLinkStyle } from './styles'
import type { LinkProps } from './types'

type Props = {
  tel: string
  className?: string
  /** @desc Style Link as Button */
  button?: LinkProps['button']
  children?: React.ReactNode
} & React.AnchorHTMLAttributes<HTMLAnchorElement>

export const TelLink = ({ className, tel, button, children, ...props }: Props) => {
  return (
    <a href={`tel:${tel}`} className={selectLinkStyle(button, className)} {...props}>
      {children || tel}
    </a>
  )
}
