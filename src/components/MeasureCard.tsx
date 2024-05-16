import { Disclosure, Transition } from '@headlessui/react'
import clsx from 'clsx'
import React from 'react'
import { linkStyles } from './links/styles'

type Props = {
  button: any
  panel: any
}

export const MeasureCard: React.FC<Props> = ({ button, panel }) => {
  return (
    <li className={clsx(['mb-8 flex flex-col rounded-sm bg-white shadow-lg'])}>
      <Disclosure>
        {({ open }) => (
          <>
            <Disclosure.Button className="flex w-full flex-col p-4">
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
            </Disclosure.Button>

            <Transition
              enter="transition duration-100 ease-out"
              enterFrom="transform scale-95 opacity-0"
              enterTo="transform scale-100 opacity-100"
              leave="transition duration-75 ease-out"
              leaveFrom="transform scale-100 opacity-100"
              leaveTo="transform scale-95 opacity-0"
            >
              <Disclosure.Panel className="flex flex-col gap-2 px-4 pb-4">
                {panel}
                <Disclosure.Button>
                  <p
                    className={clsx(
                      linkStyles,
                      'flex-shrink-0 flex-grow text-left text-sm md:text-right',
                    )}
                  >
                    Weniger Details
                  </p>
                </Disclosure.Button>
              </Disclosure.Panel>
            </Transition>
          </>
        )}
      </Disclosure>
    </li>
  )
}
