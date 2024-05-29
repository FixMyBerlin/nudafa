export const isDebugHash = (lookFor: string) => {
  if (typeof window === 'undefined') return false
  return window.location.hash.includes(lookFor)
}
