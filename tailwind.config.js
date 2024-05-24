const colors = require('tailwindcss/colors')
import defaultTheme from 'tailwindcss/defaultTheme'

/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {},
    colors: {
      white: colors.white,
      black: colors.black,
      gray: colors.gray,
      yellow: colors.yellow,
      red: colors.red,
      beige: {
        100: '#F5F0E2',
        50: '#F5F0E2',
        100: '#F5E4B7',
        500: '#977214',
        700: '#544624',
      },
    },
    fontFamily: {
      sans: ['Open Sans Variable', ...defaultTheme.fontFamily.sans],
      serif: ['Roboto Slab', ...defaultTheme.fontFamily.serif],
    },
    fontWeight: {
      normal: '400',
      medium: 500,
      semibold: 600,
      bold: '700',
      extrabold: '800',
    },
  },
  plugins: [require('@tailwindcss/typography')],
}
