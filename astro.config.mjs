import mdx from '@astrojs/mdx'
import netlify from '@astrojs/netlify'
import react from '@astrojs/react'
import sitemap from '@astrojs/sitemap'
import tailwind from '@astrojs/tailwind'
import keystatic from '@keystatic/astro'
import { defineConfig, envField } from 'astro/config'

// ABOUT:
// We have to fetch settings from `.env`
// Which we have to do manually, see https://docs.astro.build/en/guides/configuring-astro/#environment-variables
//
// USAGE:
// `npm run dev` uses 'static' mode and keystatic()
// `npm run build` (server) is based on .env and has different settings for Netlify (CMS/Keystatic) vs. IONOS (Static site)
// `npm run build:local && npm run serve` overwrites the .env settings to have a local test case for what is on IONOS
import { loadEnv } from 'vite'
const { ASTRO_OUTPUT_MODE, ASTRO_USE_NETLIFY_ADAPTER } = loadEnv(
  process.env.NODE_ENV,
  process.cwd(),
  '',
)

// CONFIG:
// https://astro.build/config
export default defineConfig({
  // Take the Netlify Deploy URL or fall back to production (Docs https://docs.netlify.com/configure-builds/environment-variables/#deploy-urls-and-metadata)
  // Used as `Astro.site!.origin` in <Layout>
  site: process.env.URL ?? 'https://www.nudafa.de',
  integrations: [
    ASTRO_OUTPUT_MODE === 'static' ? undefined : keystatic(),
    tailwind(),
    react(),
    mdx(),
    sitemap({
      filter: (page) => page !== 'https://www.nudafa.de/radnetz/admin/',
    }),
  ],
  // On Netlify and during development we use `hybrid`, on Github Pages we usd `static`.
  // Using static makes sure features like Astros redirecting work as expected.
  // Docs https://docs.astro.build/en/basics/rendering-modes/
  output: ASTRO_OUTPUT_MODE,
  adapter: ASTRO_USE_NETLIFY_ADAPTER === 'true' ? netlify() : undefined,
  redirects: {
    '/info': '/',
    '/forschungsprojekt': '/',
    '/radnetzplanung': '/radnetz/einleitung',
    '/massnahmen/admin': '/massnahmen/admin/geodata-check',
  },
  env: {
    schema: {
      ASTRO_OUTPUT_MODE: envField.enum({
        values: ['static', 'server'],
        access: 'secret',
        context: 'server',
        optional: false,
      }),
      ASTRO_USE_NETLIFY_ADAPTER: envField.boolean({
        access: 'secret',
        context: 'server',
        optional: false,
      }),
      KEYSTATIC_STORAGE_KIND: envField.enum({
        values: ['local', 'github'],
        access: 'public',
        context: 'client',
        optional: false,
      }),
      ASTRO_ENV: envField.enum({
        values: ['development', 'staging', 'production'],
        access: 'public',
        context: 'client',
        optional: false,
      }),
    },
  },
})
