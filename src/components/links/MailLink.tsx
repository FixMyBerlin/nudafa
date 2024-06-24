import React from 'react'
import { selectLinkStyle } from './styles'
import type { LinkProps } from './types'

type Props = {
  mailto: string
  subject?: string
  className?: string
  /** @desc Style Link as Button */
  button?: LinkProps['button']
  children?: React.ReactNode
} & React.AnchorHTMLAttributes<HTMLAnchorElement>

export const MailLink = ({ className, mailto, subject, button, children, ...props }: Props) => {
  const url = new URL(`mailto:${mailto}`)
  if (subject) {
    url.searchParams.append('subject', subject)
  }

  return (
    <a href={url.toString()} className={selectLinkStyle(button, className)} {...props}>
      {mailto || children}
    </a>
  )
}
