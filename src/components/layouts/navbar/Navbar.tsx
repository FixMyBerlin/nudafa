import { Disclosure, DisclosureButton } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { clsx } from 'clsx'
import { NavbarMenuItem } from './NavbarMenuItem'
import { NavigationMobile } from './NavigationMobile'

export type TNavigation = {
  first: Record<string, Record<string, string>>
  second: Record<string, string | Record<string, string>>
}

type Props = {
  mainNavigation: TNavigation
  path: string
}

export const Navbar = ({ mainNavigation, path }: Props) => {
  return (
    <Disclosure as="nav" className="bg-beige-100 text-gray-900 shadow-md">
      {({ open }) => (
        <>
          <div className="mx-auto px-4 leading-5 sm:px-6 lg:px-8">
            <div className="flex h-16 items-center justify-between">
              <a href="/" className="flex-shrink-0">
                <img className="w-[171px]" src="/Logo_NUDAFA.png" />
              </a>
              <div className="hidden sm:ml-6 sm:block">
                <div className="flex gap-2 divide-x divide-solid divide-gray-900">
                  <div className="flex">
                    {Object.entries(mainNavigation.first).map(([title, menuChildrenItems]) => (
                      <NavbarMenuItem
                        key={title}
                        path={path}
                        title={title}
                        menuChildrenItems={menuChildrenItems}
                      />
                    ))}
                  </div>

                  <div className="flex">
                    {Object.entries(mainNavigation.second).map((seconItem) => {
                      if (typeof seconItem[1] === 'string') {
                        return (
                          <a
                            key={seconItem[1]}
                            href={seconItem[1]}
                            className={clsx(
                              'ml-3 flex',
                              'font-medium flex items-center gap-2 px-3 py-2 hover:text-beige-500',
                              seconItem[1] === path && 'font-bold',
                            )}
                          >
                            {seconItem[0]}
                          </a>
                        )
                      }

                      const [title, menuChildrenItems] = seconItem
                      return (
                        <NavbarMenuItem
                          key={title}
                          path={path}
                          title={title}
                          menuChildrenItems={menuChildrenItems}
                        />
                      )
                    })}
                  </div>
                </div>
              </div>

              <div className="-mr-2 flex sm:hidden">
                {/* Mobile menu button */}
                <DisclosureButton className="relative inline-flex items-center justify-center p-2 text-gray-900 hover:text-beige-500">
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
