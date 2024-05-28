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
import { RadnetzInfo } from './RadnetzInfo'
import { RadnetzLegend } from './RadnetzLegend'
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
export const RadnetzArticleWrapperDesktop = ({ articleSlug, title, children, links }: Props) => {
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
    <Disclosure as="div" className="hidden md:block" defaultOpen={true}>
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
              : 'hidden'
          }
          aria-hidden={visible}
        >
          {/* navHeightClasses make 'max h-screen minus height of Navbar' possible */}
          <div className={clsx(navHeightClass, 'flex-shrink-0')}></div>
          <div className={clsx('relative flex items-start justify-between gap-4 px-4 pt-4')}>
            <h3 className="text-2xl font-bold">{open ? title : ''}</h3>
            <DisclosureButton>
              <span className="sr-only">Artikel {open ? 'zuklappen' : 'aufklapp'}</span>
              {open ? (
                <XMarkIcon className="size-10 rounded-full bg-beige-200 p-2 hover:bg-beige-600 hover:text-white" />
              ) : (
                <ChevronLeftIcon className="size-10 rounded-full bg-beige-200 p-2 hover:bg-beige-600 hover:text-white" />
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
              <RadnetzInfo links={links}>{children}</RadnetzInfo>
              <RadnetzLegend legend={{ some: 'thing' }} />
            </DisclosurePanel>
          </Transition>
        </article>
      )}
    </Disclosure>
  )
}
