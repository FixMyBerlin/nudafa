import { linkStyles } from '@components/links/styles'
import { useStore } from '@nanostores/react'
import { openPage } from '@nanostores/router'
import clsx from 'clsx'
import 'maplibre-gl/dist/maplibre-gl.css'
import type { Page } from 'src/pages/radnetz/[slug].astro'
import { $router } from './utils/store'

type Props = { articleSlug: string; pages: Page[] }

export const RadnetzNav = ({ articleSlug, pages }: Props) => {
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

  return (
    <nav className="flex max-h-screen w-96 flex-col justify-between overflow-auto bg-white p-2">
      <ul>
        {pages.map(({ slug, title }) => {
          const active = router?.params.section === slug
          return (
            <li className={clsx('p-4', active ? 'bg-beige-600' : '')} key={slug}>
              <a
                onClick={(event) => handleClick(event, slug)}
                href={`/radnetz/${slug}`}
                className={clsx(active ? 'text-white' : '', 'font-semibold text-sm')}
              >
                <div className="border-l-beige-50 border-l-2 pl-2">{title}</div>
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
