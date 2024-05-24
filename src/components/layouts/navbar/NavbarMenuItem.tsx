import { Menu, MenuButton, MenuItem, MenuItems, Transition } from '@headlessui/react'
import { Fragment } from 'react'

import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/24/outline'
import clsx from 'clsx'

type Props = {
  title: string
  menuChildrenItems: Record<string, string>
  path: string
}

export const NavbarMenuItem = ({ title, menuChildrenItems, path }: Props) => {
  return (
    <Menu key={title} as="div" className="relative ml-3 flex items-center justify-start">
      {({ open }) => (
        <>
          <MenuButton
            className={clsx(
              'font-semibold hover:bg-beige-50 flex items-center gap-2 px-3 py-2  text-left',
              Object.values(menuChildrenItems).includes(path) && 'font-bold',
            )}
          >
            {title}
            {open ? <ChevronUpIcon className="h-3 w-3" /> : <ChevronDownIcon className="h-3 w-3" />}
          </MenuButton>
          <Transition
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <MenuItems className="absolute left-0 top-12 z-10 mt-2 w-52 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none ">
              {Object.entries(menuChildrenItems).map(([caption, href]) => (
                <MenuItem key={caption}>
                  <a
                    href={href}
                    className={clsx(
                      path === href ? 'font-bold' : '',
                      'ui-active:bg-black block px-4 py-2 text-sm text-gray-900 hover:bg-beige-100 focus:bg-white focus:ring-[1.5px] focus:ring-beige-500',
                    )}
                  >
                    {caption}
                  </a>
                </MenuItem>
              ))}
            </MenuItems>
          </Transition>
        </>
      )}
    </Menu>
  )
}
