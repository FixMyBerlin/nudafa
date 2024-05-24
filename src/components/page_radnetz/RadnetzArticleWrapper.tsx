import {
  navHeightClass,
  navHeightClassAsNegativeMarginTop,
} from '@components/layouts/navbar/Navbar'
import { Disclosure, DisclosureButton, DisclosurePanel, Transition } from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/20/solid'
import { ChevronLeftIcon } from '@heroicons/react/24/outline'
import { useStore } from '@nanostores/react'
import clsx from 'clsx'
import { useEffect, useState } from 'react'
import { markdownProseClasses } from 'src/proseClasses'
import { $router } from './utils/store'

type Props = {
  articleSlug: string
  title: string
  children: React.ReactNode
  links:
    | {
        display: string
        url: string
      }[]
    | undefined
}

/**
 * @desc In SSR we render all articles of the collection on every page but hide all but the current.
 * In React we update the hidden state for the current article.
 */
export const RadnetzArticleWrapper = ({ articleSlug, title, children, links }: Props) => {
  // SSR: We need to tell the router which page is pre-rendered so there is no hydration mismatch
  if (import.meta.env.SSR) {
    $router.open(`/radnetz/${articleSlug}`)
  }
  // SSR: We have to use this weird useEffect roundtrip in order to work around hydration mismatches
  const router = useStore($router)
  const section = router?.params.section
  const [visible, setVisible] = useState(false)
  useEffect(() => setVisible(section === articleSlug), [section])

  return (
    <Disclosure defaultOpen={true}>
      {({ open }) => (
        <article
          className={
            visible
              ? clsx(
                  'absolute right-0 top-0 z-10 flex h-screen flex-col overflow-y-auto',
                  open ? 'w-[480px]' : '',
                  open ? 'bg-green-50 ' : '',
                  navHeightClassAsNegativeMarginTop,
                )
              : 'sr-only'
          }
          aria-hidden={visible}
        >
          {/* navHeightClasses make 'max h-screen minus height of Navbar' possible */}
          <div className={navHeightClass}></div>
          <div className={clsx('relative flex items-start gap-4 px-4 pt-4')}>
            <h3 className="text-lg font-bold md:text-2xl">{open ? title : ''}</h3>
            <DisclosureButton>
              <span className="sr-only">Artikel {open ? 'zuklappen' : 'aufklapp'}</span>
              {open ? (
                <XMarkIcon className="bg-beige-200 hover:bg-beige-600 size-10 rounded-full p-2 hover:text-white" />
              ) : (
                <ChevronLeftIcon className="bg-beige-200 hover:bg-beige-600 size-10 rounded-full p-2 hover:text-white" />
              )}
            </DisclosureButton>
          </div>
          <Transition
            enter="duration-200 ease-out"
            enterFrom="opacity-0 -translate-y-6"
            enterTo="opacity-100 translate-y-0"
            leave="duration-300 ease-out"
            leaveFrom="opacity-100 translate-y-0"
            leaveTo="opacity-0 -translate-y-6"
          >
            <DisclosurePanel static className="flex flex-grow flex-col">
              <div className="p-4">
                <div className={clsx(markdownProseClasses)}>{children}</div>
                <div>
                  <p> Weiterführende Links:</p>
                  <div className="grid grid-cols-2 gap-2 py-4">
                    {links &&
                      links.map((link: any) => (
                        <div>
                          <a
                            className="font-semibold hover:bg-beige-600 inline-block rounded-full border border-beige-700 bg-white px-5 py-3 hover:text-white"
                            target="_blank"
                            href={link.url}
                          >
                            {link.display}
                          </a>
                        </div>
                      ))}
                  </div>
                </div>
              </div>
              <div className="flex-grow bg-gray-50 p-4">Legende Platzhalter</div>
            </DisclosurePanel>
          </Transition>
        </article>
      )}
    </Disclosure>
  )
}
