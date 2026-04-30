import { DisclosurePanel } from '@headlessui/react'
import { clsx } from 'clsx'
import type { TNavigation } from './Navbar'
import { NavigationDisclosureItemMobile } from './NavigationDisclosureItemMobile'
import { isSameNavPath } from './navActivePath'

type Props = {
  mainNavigation: TNavigation
  path: string
}

export const NavigationMobile = ({ mainNavigation, path }: Props) => {
  return (
    <DisclosurePanel
      as="div"
      className="absolute w-screen space-y-px bg-beige-50 pb-1 shadow-lg md:hidden"
    >
      {Object.entries(mainNavigation.first).map(([title, item]) =>
        typeof item === 'string' ? (
          <a
            key={title}
            href={item}
            className={clsx(
              'relative flex w-full items-center justify-between divide-y-2 divide-beige-100 bg-white px-3 py-4',
              isSameNavPath(path, item) ? 'font-bold' : 'font-semibold',
            )}
          >
            {title}
          </a>
        ) : (
          <NavigationDisclosureItemMobile
            key={title}
            path={path}
            title={title}
            menuChildrenItems={item}
          />
        ),
      )}
      {Object.entries(mainNavigation.second).map(([label, href]) => {
        if (typeof href === 'string') {
          return (
            <a
              key={href}
              href={href}
              className={clsx(
                'relative flex w-full items-center justify-between divide-y-2 divide-beige-100 bg-white px-3 py-4',
                isSameNavPath(path, href) ? 'font-bold' : 'font-semibold',
              )}
            >
              {label}
            </a>
          )
        }

        return (
          <NavigationDisclosureItemMobile
            key={label}
            path={path}
            title={label}
            menuChildrenItems={href}
          />
        )
      })}
    </DisclosurePanel>
  )
}
