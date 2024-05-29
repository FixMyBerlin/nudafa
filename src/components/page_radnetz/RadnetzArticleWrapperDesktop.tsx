import {
  navHeightClass,
  navHeightClassAsNegativeMarginTop,
} from '@components/layouts/navbar/Navbar'
import { buttonStylesForLinkElement } from '@components/links/styles'
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/20/solid'
import { ChevronLeftIcon } from '@heroicons/react/24/outline'
import clsx from 'clsx'
import { RadnetzInfo } from './RadnetzInfo'
import { RadnetzLegend } from './RadnetzLegend'

type Props = {
  visible: boolean
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
export const RadnetzArticleWrapperDesktop = ({
  visible,
  articleSlug,
  title,
  children,
  links,
}: Props) => {
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
          <div className={clsx(navHeightClass, 'flex-shrink-0')} />
          <div className="relative flex items-start justify-between gap-4 px-4 pt-4">
            <h3 className="text-2xl font-bold">{open ? title : ''}</h3>
            <DisclosureButton>
              <span className="sr-only">Artikel {open ? 'zuklappen' : 'aufklapp'}</span>
              {open ? (
                <XMarkIcon
                  className={clsx(buttonStylesForLinkElement, 'size-10 !p-2 text-black')}
                />
              ) : (
                <ChevronLeftIcon
                  className={clsx(buttonStylesForLinkElement, 'size-10 !p-2 text-black')}
                />
              )}
            </DisclosureButton>
          </div>
          <DisclosurePanel className="flex flex-grow flex-col">
            <RadnetzInfo links={links}>{children}</RadnetzInfo>
            <RadnetzLegend articleSlug={articleSlug} />
          </DisclosurePanel>
        </article>
      )}
    </Disclosure>
  )
}
