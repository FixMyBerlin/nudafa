import { Disclosure, DisclosureButton, DisclosurePanel, Transition } from '@headlessui/react'
import clsx from 'clsx'
import { linkStyles } from '../links/styles'

type Props = {
  button?: React.ReactNode
  panel?: React.ReactNode
}

export const MeasureCard = ({ button, panel }: Props) => {
  return (
    <li className={clsx(['mb-8 flex flex-col rounded-sm bg-white shadow-lg'])}>
      <Disclosure>
        {({ open }) => (
          <>
            <DisclosureButton className="flex w-full flex-col p-4">
              {button}
              {!open && (
                <p
                  className={clsx(
                    linkStyles,
                    'w-full flex-shrink-0 flex-grow text-left text-sm md:-mt-5 md:text-right',
                  )}
                >
                  Mehr Details
                </p>
              )}
            </DisclosureButton>

            <Transition
              enter="transition duration-100 ease-out"
              enterFrom="transform scale-95 opacity-0"
              enterTo="transform scale-100 opacity-100"
              leave="transition duration-75 ease-out"
              leaveFrom="transform scale-100 opacity-100"
              leaveTo="transform scale-95 opacity-0"
            >
              <DisclosurePanel className="flex flex-col gap-2 px-4 pb-4">
                {panel}
                <DisclosureButton>
                  <p
                    className={clsx(
                      linkStyles,
                      'flex-shrink-0 flex-grow text-left text-sm md:text-right',
                    )}
                  >
                    Weniger Details
                  </p>
                </DisclosureButton>
              </DisclosurePanel>
            </Transition>
          </>
        )}
      </Disclosure>
    </li>
  )
}
