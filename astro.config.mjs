import markdoc from '@astrojs/markdoc'
import mdx from '@astrojs/mdx'
import netlify from '@astrojs/netlify'
import react from '@astrojs/react'
import tailwind from '@astrojs/tailwind'
import keystatic from '@keystatic/astro'
import { defineConfig } from 'astro/config'

import sitemap from '@astrojs/sitemap'

// https://astro.build/config
export default defineConfig({
  site: 'https://www.nudafa.de',
  integrations: [
    react(),
    markdoc(),
    keystatic(),
    mdx(),
    tailwind(),
    sitemap({
      filter: (page) => page !== 'https://www.nudafa.de/radnetz/admin/',
    }),
  ],
  output: 'hybrid',
  adapter: netlify(),
  redirects: {
    '/info': '/',
    '/forschungsprojekt': '/',
    '/radnetzplanung': '/radnetz/einleitung',
  },
})
