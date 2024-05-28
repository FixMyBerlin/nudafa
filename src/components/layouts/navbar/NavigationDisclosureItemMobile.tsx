import { Disclosure, DisclosureButton, DisclosurePanel, Transition } from '@headlessui/react'
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/24/outline'
import clsx from 'clsx'
import { Fragment } from 'react'

type Props = {
  title: string
  menuChildrenItems: Record<string, string>
  path: string
}

export const NavigationDisclosureItemMobile = ({ title, menuChildrenItems, path }: Props) => {
  return (
    <Disclosure
      key={title}
      as="div"
      className="relative w-full divide-y-2 divide-beige-50 bg-white"
    >
      {({ open }) => (
        <>
          <div className="w-full">
            <DisclosureButton
              className={clsx(
                'flex w-full items-center justify-between px-3 py-4 font-semibold',
                Object.values(menuChildrenItems).includes(path) && 'font-bold',
              )}
            >
              {title}
              {open ? (
                <ChevronUpIcon className="h-3 w-3" />
              ) : (
                <ChevronDownIcon className="h-3 w-3" />
              )}
            </DisclosureButton>
          </div>
          <Transition
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <DisclosurePanel className="mx-[3%] w-[94%] py-1 text-gray-500">
              {Object.entries(menuChildrenItems).map(([caption, href]) => (
                <a
                  key={caption}
                  href={href}
                  className={clsx(path === href && 'font-bold', 'block px-6 py-2 text-sm')}
                >
                  {caption}
                </a>
              ))}
            </DisclosurePanel>
          </Transition>
        </>
      )}
    </Disclosure>
  )
}
