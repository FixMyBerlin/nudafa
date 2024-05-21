import { openPage } from '@nanostores/router'
import 'maplibre-gl/dist/maplibre-gl.css'
import type { Page } from 'src/pages/radnetz/[slug].astro'
import { $router } from './utils/store'

type Props = { pages: Page[] }

export const RadnetzNav = ({ pages }: Props) => {
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
          return (
            <li key={slug}>
              <a onClick={(event) => handleClick(event, slug)} href={`/radnetz/${slug}`}>
                {title}
              </a>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}
