import { Disclosure, DisclosureButton, DisclosurePanel, Transition } from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/20/solid'
import { useStore } from '@nanostores/react'
import clsx from 'clsx'
import { markdownProseClasses } from 'src/proseClasses'
import { $router } from './utils/store'

type Props = { articleSlug: string; title: string; children: React.ReactNode }

/**
 * @desc In SSR we render all articles of the collection on every page but hide all but the current.
 * In React we update the hidden state for the current article.
 */
export const RadnetzArticleWrapper = ({ articleSlug, title, children }: Props) => {
  // SSR: We need to tell the router which page is pre-rendered so there is no hydration mismatch
  if (import.meta.env.SSR) {
    $router.open(`/radnetz/${articleSlug}`)
  }

  const router = useStore($router)
  const visible = router?.params.section === articleSlug

  return (
    <Disclosure defaultOpen={true}>
      {({ open }) => (
        <article
          className={
            visible
              ? clsx(
                  'absolute right-0 top-0 z-10 flex flex-col overflow-y-auto rounded bg-white p-3',
                  open ? 'w-96' : '',
                )
              : 'sr-only'
          }
          aria-hidden={visible}
        >
          <div className={clsx('relative flex items-center gap-4', markdownProseClasses)}>
            <h1>{open ? title : ''}</h1>
            <DisclosureButton className="absolute right-3 top-3 flex items-center justify-center">
              <span className="sr-only">Artikel {open ? 'zuklappen' : 'aufklapp'}</span>
              <XMarkIcon className="size-5" />
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
            <DisclosurePanel static className={markdownProseClasses}>
              {children}
            </DisclosurePanel>
          </Transition>
        </article>
      )}
    </Disclosure>
  )
}
