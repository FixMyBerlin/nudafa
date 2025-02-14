/** @type {import("prettier").Config} */
export default {
  semi: false,
  singleQuote: true,
  arrowParens: 'always',
  printWidth: 100,
  plugins: [
    'prettier-plugin-astro',
    'prettier-plugin-organize-imports',
    'prettier-plugin-tailwindcss',
    'prettier-plugin-astro-organize-imports',
  ],
  overrides: [
    {
      files: '*.astro',
      options: {
        parser: 'astro',
      },
    },
    {
      files: 'src/components/page_radnetz/sortLayers/beforeIdEntries.const.ts',
      options: {
        // VSCode: Restart extension host to apply changes
        printWidth: 1000,
      },
    },
  ],
  tailwindFunctions: ['clsx'],
  tailwindAttributes: ['className', 'class:list', 'class'],
}
