import markdoc from '@astrojs/markdoc'
import mdx from '@astrojs/mdx'
import netlify from '@astrojs/netlify'
import react from '@astrojs/react'
import tailwind from '@astrojs/tailwind'
import keystatic from '@keystatic/astro'
import { defineConfig } from 'astro/config'

// https://astro.build/config
export default defineConfig({
  integrations: [react(), markdoc(), keystatic(), mdx(), tailwind()],
  output: 'hybrid',
  adapter: netlify(),
})
