export function isSameNavPath(path: string, href: string): boolean {
  const h = href.replace(/\/$/, '') || '/'
  const p = path.replace(/\/$/, '') || '/'
  return p === h || p.startsWith(`${h}/`)
}
