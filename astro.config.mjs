import markdoc from '@astrojs/markdoc'
import mdx from '@astrojs/mdx'
import netlify from '@astrojs/netlify'
import react from '@astrojs/react'
import tailwind from '@astrojs/tailwind'
import keystatic from '@keystatic/astro'
import { defineConfig } from 'astro/config'

import sitemap from '@astrojs/sitemap'

// USAGE:
// `npm run dev` uses hybrid mode and keystatic()
// `npm run build` (server) is based on .env and has different settings for Netlify (CMS/Keystatic) vs. Github Pages (Static site)
// `npm run build:local && npm run serve` overwrites the .env settings to have a local test case for what is on Github Pages
import { loadEnv } from 'vite'
const { ASTRO_OUTPUT_MODE, ASTRO_USE_NETLIFY_ADAPTER } = loadEnv(
  process.env.NODE_ENV,
  process.cwd(),
  '',
)

const integrations = [
  react(),
  markdoc(),
  mdx(),
  keystatic(),
  tailwind(),
  sitemap({
    filter: (page) => page !== 'https://www.nudafa.de/radnetz/admin/',
  }),
]

const config = {
  site: 'https://www.nudafa.de',
  integrations,
  // On Netlify and during development we use `hybrid`, on Deploy Now we use `static`.
  // Using static makes sure features like Astros redirecting work as expected.
  // Docs https://docs.astro.build/en/basics/rendering-modes/
  output: ASTRO_OUTPUT_MODE,
  adapter: ASTRO_USE_NETLIFY_ADAPTER === 'true' ? netlify() : undefined,
  redirects: {
    '/info': '/',
    '/forschungsprojekt': '/',
    '/radnetzplanung': '/radnetz/einleitung',
  },
}

// https://astro.build/config
export default defineConfig(config)
