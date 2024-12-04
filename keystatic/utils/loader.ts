import { glob } from 'astro/loaders'

export const loader = (contentBase: string, format: 'mdx' | 'json' | 'yaml') => {
  return glob({
    base: contentBase,
    pattern: `**\/[^_]*.${format}`,
  })
}
