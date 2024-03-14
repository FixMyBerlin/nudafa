const colors = require("tailwindcss/colors");
import defaultTheme from "tailwindcss/defaultTheme";

/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {},
    colors: {
      white: colors.white,
      black: colors.black,
      gray: colors.gray,
      yellow: colors.yellow,
      beige: {
        100: "#F5F0E2",
        500: "#977214",
        700: "#544624",
      },
    },
    fontFamily: {
      sans: ["Open Sans Variable", ...defaultTheme.fontFamily.sans],
    },
    fontWeight: {
      // todo check
      normal: "400",
      bold: "700",
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
