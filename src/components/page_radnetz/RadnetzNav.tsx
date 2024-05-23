import { useStore } from '@nanostores/react'
import { openPage } from '@nanostores/router'
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
    <nav className="w-96 bg-gray-200">
      <ul>
        {pages.map(({ slug, title }) => {
          const active = router?.params.section === slug

          return (
            <li key={slug}>
              <a
                onClick={(event) => handleClick(event, slug)}
                href={`/radnetz/${slug}`}
                className={active ? 'font-semibold' : ''}
              >
                {title}
              </a>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}
