import { DisclosurePanel } from '@headlessui/react'
import clsx from 'clsx'
import type { TNavigation } from './Navbar'
import { NavigationDisclosureItemMobile } from './NavigationDisclosureItemMobile'

type Props = {
  mainNavigation: TNavigation
  path: string
}

export const NavigationMobile = ({ mainNavigation, path }: Props) => {
  return (
    <DisclosurePanel
      as="div"
      className="bg-beige-50 absolute w-screen space-y-px pb-1 shadow-lg sm:hidden"
    >
      {Object.entries(mainNavigation.first).map(([title, menuChildrenItems]) => (
        <NavigationDisclosureItemMobile
          key={title}
          path={path}
          title={title}
          menuChildrenItems={menuChildrenItems}
        />
      ))}
      {Object.entries(mainNavigation.second).map((seconItem) => {
        if (typeof seconItem[1] === 'string') {
          return (
            <a
              key={seconItem[1]}
              href={seconItem[1]}
              className={clsx(
                'relative w-full divide-y-2 divide-beige-100 bg-white',
                'font-semibold flex w-full items-center justify-between px-3 py-4',
                seconItem[1] === path && 'font-bold',
              )}
            >
              {seconItem[0]}
            </a>
          )
        }

        const [title, menuChildrenItems] = seconItem
        return (
          <NavigationDisclosureItemMobile
            key={title}
            path={path}
            title={title}
            menuChildrenItems={menuChildrenItems}
          />
        )
      })}
    </DisclosurePanel>
  )
}
