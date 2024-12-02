import clsx from 'clsx'
import type { LinkProps } from './types'

// LINK
export const linkStyles =
  'underline decoration-beige-600 hover:text-beige-600 underline-offset-2 active:decoration-2 decoration-[1.5px]'

const buttonBase =
  'inline-block rounded-full border-[1.5px] font-semibold active:border-[#60A5FA] leading-5'

export const buttonStylesForLinkElement = clsx(
  buttonBase,
  'border-gray-600 bg-white px-4 py-2 text-gray-600 sm:hover:bg-beige-50',
)

export const selectedButtonStylesForLinkElement = clsx(
  buttonBase,
  'border-beige-600 bg-beige-600 px-4 py-2 text-white sm:hover:bg-beige-50 sm:hover:text-gray-600',
)

export const menuButtonStylesForLinkElement = clsx(
  buttonBase,
  'border-white bg-white px-4 py-2 text-gray-900',
)

export const selectedMenuButtonStylesForLinkElement = clsx(
  buttonBase,
  'border-beige-600 bg-beige-600 px-4 py-2 text-white',
)

const hoverTranslateClassNames =
  'hover:-translate-y-0.5 transition-all duration-200 hover:shadow-lg cursor-pointer'

export const cardStylesForLinkElements = clsx(
  hoverTranslateClassNames,
  'active:ring-2 active:ring-beige-600', // activeStyleForLinkElement
)

export const selectLinkStyle = (button: LinkProps['button'], className?: string) => {
  switch (button) {
    case true:
      return clsx(buttonStylesForLinkElement, className)
    default:
      return clsx(linkStyles, className)
  }
}
