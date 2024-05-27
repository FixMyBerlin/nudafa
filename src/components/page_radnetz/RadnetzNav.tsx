import { linkStyles } from '@components/links/styles'
import { Disclosure, DisclosureButton, DisclosurePanel, Transition } from '@headlessui/react'
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/24/outline'
import { useStore } from '@nanostores/react'
import { openPage } from '@nanostores/router'
import clsx from 'clsx'
import 'maplibre-gl/dist/maplibre-gl.css'
import type { Page } from 'src/pages/radnetz/[slug].astro'
import { $router } from './utils/store'

type RadnetzNavProps = {
  currentSection?: string
  handleClick: any
  pages: Page[]
  className?: string
}

const RadnetzNav = ({ currentSection, handleClick, pages, className }: RadnetzNavProps) => {
  return (
    <nav
      className={clsx(
        'max-h-screen w-[210px] flex-col overflow-auto bg-white md:z-auto md:flex md:w-[310px] md:justify-between md:p-2',
        className,
      )}
    >
      <ul className="divide-y divide-gray-100">
        {pages.map(({ slug, title }) => {
          const active = currentSection === slug
          return (
            <li
              className={clsx('px-3 py-3 md:p-4', active ? 'bg-beige-50 md:bg-beige-600' : '')}
              key={slug}
            >
              <a
                onClick={(event) => handleClick(event, slug)}
                href={`/radnetz/${slug}`}
                className={clsx(active ? 'text-black md:text-white' : '', 'text-sm font-medium')}
              >
                <div className="border-l-2 border-l-beige-50 pl-2">{title}</div>
              </a>
            </li>
          )
        })}
      </ul>
      <div className="mb-6 mt-4 flex justify-center gap-2 text-sm">
        <a className={linkStyles} href="/impressum">
          Impressum
        </a>
        <a className={linkStyles} href="/datenschutz">
          Datenschutz
        </a>
      </div>
    </nav>
  )
}

type Props = { articleSlug: string; pages: Page[] }

export const RadnetzNavMobileAndDesktop = ({ articleSlug, pages }: Props) => {
  // SSR: We need to tell the router which page is pre-rendered so there is no hydration mismatch for the `active` state
  if (import.meta.env.SSR) {
    $router.open(`/radnetz/${articleSlug}`)
  }

  const router = useStore($router)

  // Capture clicks to use the the Radnetz router
  // Docs https://github.com/nanostores/router?tab=readme-ov-file#clicks-tracking
  const handleClick = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>, slug: string) => {
    event.preventDefault()
    const mapParams = $router.get()?.search
    openPage($router, 'radnetz', { section: slug }, { ...mapParams })
  }

  const currentArticle = pages.find((page) => page.slug === router?.params.section)

  return (
    <>
      <RadnetzNav
        handleClick={handleClick}
        className={'md:display-flex hidden'}
        pages={pages}
        currentSection={router?.params.section}
      />
      <div className="absolute z-10 md:hidden">
        <Disclosure>
          {({ open }) => (
            <>
              <DisclosureButton className="w-[210px]">
                <div className="flex items-center justify-between bg-beige-600 px-3 py-3 text-left text-sm font-semibold text-white">
                  <div className="border-l-2 border-l-beige-50 pl-2">{currentArticle?.title}</div>
                  {open ? (
                    <ChevronDownIcon className="h-5 w-5 flex-shrink-0" />
                  ) : (
                    <ChevronUpIcon className="h-5 w-5 flex-shrink-0" />
                  )}
                </div>
              </DisclosureButton>

              <Transition
                enter="duration-200 ease-out"
                enterFrom="opacity-0 -translate-y-6"
                enterTo="opacity-100 translate-y-0"
                leave="duration-300 ease-out"
                leaveFrom="opacity-100 translate-y-0"
                leaveTo="opacity-0 -translate-y-6"
              >
                <DisclosurePanel static className="flex flex-grow flex-col">
                  <RadnetzNav
                    currentSection={router?.params.section}
                    handleClick={handleClick}
                    pages={pages}
                  />
                </DisclosurePanel>
              </Transition>
            </>
          )}
        </Disclosure>
      </div>
    </>
  )
}
