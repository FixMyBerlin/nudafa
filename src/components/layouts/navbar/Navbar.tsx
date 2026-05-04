import {
  menuButtonStylesForLinkElement,
  selectedMenuButtonStylesForLinkElement,
} from '@components/links/styles'
import { Disclosure, DisclosureButton } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { clsx } from 'clsx'
import { isSameNavPath } from './navActivePath'
import { NavbarMenuItem } from './NavbarMenuItem'
import { NavigationMobile } from './NavigationMobile'

export type TNavigation = {
  first: Record<string, Record<string, string> | string>
  second: Record<string, string | Record<string, string>>
}

type Props = {
  mainNavigation: TNavigation
  path: string
}

// we export theses classes to size positioned elements correctly (h-screen minus height of navigation)
export const navHeightClass = 'h-16'
export const navHeightClassAsNegativeMarginBottom = 'md:-mb-16'
export const navHeightClassAsNegativeMarginTop = '-mt-16'

export const Navbar = ({ mainNavigation, path }: Props) => {
  return (
    <Disclosure
      as="nav"
      className={clsx('z-20 bg-beige-50 text-gray-900 shadow-sm', navHeightClass)}
    >
      {({ open }) => (
        <>
          <div className="mx-auto px-4 leading-5 md:px-6 lg:px-8">
            <div className="flex h-16 items-center justify-between">
              <a href="/" className="flex-shrink-0">
                <img className="w-[171px]" src="/Logo_NUDAFA.png" />
              </a>
              <div className="hidden md:ml-6 md:block">
                <div className="flex gap-6 divide-x divide-solid divide-gray-900">
                  <div className="flex">
                    {Object.entries(mainNavigation.first).map(([title, item]) =>
                      typeof item === 'string' ? (
                        <a
                          key={title}
                          href={item}
                          className={clsx(
                            'ml-6 text-nowrap',
                            isSameNavPath(path, item)
                              ? selectedMenuButtonStylesForLinkElement
                              : menuButtonStylesForLinkElement,
                          )}
                        >
                          {title}
                        </a>
                      ) : (
                        <NavbarMenuItem
                          key={title}
                          path={path}
                          title={title}
                          menuChildrenItems={item}
                        />
                      ),
                    )}
                  </div>

                  <div className="flex">
                    {Object.entries(mainNavigation.second).map(([label, href]) =>
                      typeof href === 'string' ? (
                        <a
                          key={href}
                          href={href}
                          className={clsx(
                            'ml-5 text-nowrap',
                            isSameNavPath(path, href)
                              ? selectedMenuButtonStylesForLinkElement
                              : menuButtonStylesForLinkElement,
                          )}
                        >
                          {label}
                        </a>
                      ) : (
                        <NavbarMenuItem
                          button
                          key={label}
                          path={path}
                          title={label}
                          menuChildrenItems={href}
                        />
                      ),
                    )}
                  </div>
                </div>
              </div>

              <div className="-mr-2 flex md:hidden">
                {/* Mobile menu button */}
                <DisclosureButton className="relative inline-flex items-center justify-center p-2 text-gray-900 hover:text-beige-600">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </DisclosureButton>
              </div>
            </div>
          </div>

          <NavigationMobile mainNavigation={mainNavigation} path={path} />
        </>
      )}
    </Disclosure>
  )
}
