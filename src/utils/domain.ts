// Docs:
// Using Environment Variables https://www.netlify.com/blog/2021/07/05/easy-access-environment-variables/#using-environment-variables
// CONTEXT https://docs.netlify.com/configure-builds/environment-variables/#build-metadata
// URL vs. DEPLOY_PRIME_URL https://docs.netlify.com/configure-builds/environment-variables/#deploy-urls-and-metadata
// NETLIFY https://docs.netlify.com/configure-builds/environment-variables/#build-metadata
// todo - in case we have a staging domain on IONOS, we should check if the build happens on Deploy Now or Netlify (process.env.NETLIFY) and differentiate between production and staging domain for SSR also on Deploy Now (or maybe not important as it is only used for social sharing so far)

export const domain = () => {
  const ssrDomain =
    process.env.CONTEXT === 'production' ? process.env.URL : process.env.DEPLOY_PRIME_URL

  const ssrFallback = 'https://www.nudafa.de'

  // We do this, to get the SSR domain. However, rehydration will use this utility as well,
  // so for that case, we need to take the current hostname.
  const browserDomain = typeof window !== 'undefined' && window.location.origin

  return browserDomain || ssrDomain || ssrFallback
}
