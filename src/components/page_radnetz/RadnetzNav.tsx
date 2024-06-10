import { Disclosure, DisclosureButton, DisclosurePanel, Transition } from '@headlessui/react'
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/24/outline'
import { useStore } from '@nanostores/react'
import { openPage } from '@nanostores/router'
import clsx from 'clsx'
import 'maplibre-gl/dist/maplibre-gl.css'
import { RadnetzImprintPrivacy } from './RadnetzImprintPrivacy'
import { mapDataAndLegend } from './mapData/mapDataAndLegend.const'
import type { RadnetzPage } from './types'
import { $router } from './utils/store'

type RadnetzNavProps = {
  currentSection?: string
  handleClick: any
  pages: RadnetzPage[]
  className?: string
}

const RadnetzNav = ({ currentSection, handleClick, pages, className }: RadnetzNavProps) => {
  return (
    <nav
      className={clsx(
        'max-h-screen w-[210px] flex-col overflow-auto bg-white shadow-lg md:z-auto md:flex md:w-[310px] md:justify-between md:p-2 md:shadow-none',
        className,
      )}
    >
      <ul className="text-sm font-medium">
        {pages.map(({ slug, menu }) => {
          const active = currentSection === slug
          return (
            <li key={slug} className="min-h-0">
              <a
                onClick={(event) => handleClick(event, slug)}
                href={`/radnetz/${slug}`}
                className={clsx(
                  'group block border-b border-gray-100 px-3 py-3 md:p-4',
                  active
                    ? 'bg-beige-50 text-black md:bg-beige-600 md:text-white'
                    : 'hover:bg-gray-50',
                )}
              >
                <span
                  className={clsx(
                    'border-l-2 pl-2',
                    active ? 'border-l-beige-50' : mapDataAndLegend[slug]?.colorClass,
                  )}
                >
                  {menu}
                </span>
              </a>
            </li>
          )
        })}
      </ul>
      <RadnetzImprintPrivacy className="hidden md:flex" />
    </nav>
  )
}

type Props = { articleSlug: string; pages: RadnetzPage[] }

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
                  <div className="border-l-2 border-l-beige-50 pl-2">{currentArticle?.menu}</div>
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
