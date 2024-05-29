export const showDebugMap = (lookFor: string) => {
  if (typeof window === 'undefined') return false
  if (window.location.hostname.includes('127.0.0.1')) return true
  return window.location.hash.includes(lookFor)
}
