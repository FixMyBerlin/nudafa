import { openPage } from '@nanostores/router'
import 'maplibre-gl/dist/maplibre-gl.css'
import { $router } from './utils/store'

const url = [
  { slug: 'einleitung', title: 'Einleitung' },
  { slug: 'page2', title: 'Page 2' },
]

// Capture clicks to use the the Radnetz router
// Docs https://github.com/nanostores/router?tab=readme-ov-file#clicks-tracking
const handleClick = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>, slug: string) => {
  event.preventDefault()
  const mapParams = $router.get()?.search
  openPage($router, 'radnetz', { section: slug }, { ...mapParams })
}

export const RadnetzNav = () => {
  return (
    <nav className="w-96 bg-gray-200">
      <ul>
        {url.map(({ slug, title }) => {
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
