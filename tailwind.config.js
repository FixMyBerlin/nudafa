const colors = require('tailwindcss/colors')
import defaultTheme from 'tailwindcss/defaultTheme'

/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Open Sans Variable', ...defaultTheme.fontFamily.sans],
        serif: ['Roboto Slab', ...defaultTheme.fontFamily.serif],
      },
      screens: {
        md: '945px',
      },
    },
    colors: {
      white: colors.white,
      black: colors.black,
      gray: colors.gray,
      yellow: colors.yellow,
      red: colors.red,
      green: {
        50: '#ECFDF5',
        100: '#D1FAE5',
        200: '#A7F3D0',
        300: '#6EE7B7',
        400: '#34D399',
        500: '#10B981',
        600: '#059669',
        700: '#047857',
        800: '#065F46',
        900: '#064E3B',
      },
      beige: {
        50: '#F5F0E2',
        100: '#F5E4B7',
        200: '#EFD38A',
        300: '#EAC25D',
        400: '#E4B130',
        500: '#C6961A',
        600: '#977214',
        700: '#6C520E',
        800: '#69582D',
        900: '#362D17',
      },
      pink: {
        50: '#FFF1F2',
        100: '#FFE4E6',
        200: '#FECDD3',
        300: '#FDA4AF',
        400: '#FB7185',
        500: '#F43F5E',
        600: '#E11D48',
        700: '#BE123C',
        800: '#9F1239',
        900: '#881337',
      },
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
