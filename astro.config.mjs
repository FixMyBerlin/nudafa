import markdoc from '@astrojs/markdoc'
import mdx from '@astrojs/mdx'
import netlify from '@astrojs/netlify'
import react from '@astrojs/react'
import tailwind from '@astrojs/tailwind'
import keystatic from '@keystatic/astro'
import { defineConfig } from 'astro/config'

import sitemap from '@astrojs/sitemap'
import { loadEnv } from "vite";

// Load environment variables from .env
const env = loadEnv(process.env.NODE_ENV, process.cwd(), "");

const integrations = [
  react(),
  markdoc(),
  mdx(),
  tailwind(),
  sitemap({
    filter: (page) => page !== 'https://www.nudafa.de/radnetz/admin/',
  }),
]

// If on environment is hybrid, add keystatic (for netlify), otherwise it's Deploy Now
if (env.OUTPUTMODE === 'hybrid') {
  integrations.push(keystatic());
}

const config = {
  site: 'https://www.nudafa.de',
  integrations,
  output: env.OUTPUTMODE,
  adapter: netlify(),
  redirects: {
    '/info': '/',
    '/forschungsprojekt': '/',
    '/radnetzplanung': '/radnetz/einleitung',
  },
};

if (env.OUTPUTMODE === 'hybrid') {
  config.adapter = netlify();
}

// https://astro.build/config
export default defineConfig(config)
