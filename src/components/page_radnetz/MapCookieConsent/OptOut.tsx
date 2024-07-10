import { selectLinkStyle } from '@components/links/styles'
import { useEffect, useState } from 'react'
import { getOptInCookie, setOptInCookie } from './storage'

export const OptOut = () => {
  const [consent, setConsent] = useState<boolean | null>(false)
  useEffect(() => setConsent(getOptInCookie()), [])

  if (!consent) {
    if (consent == null) {
      return (
        <div className="mb-10 mt-5 rounded border border-gray-500 p-5 pt-0">
          <p>Sie haben der Datenverarbeitung durch MapTiler nicht zugestimmt.</p>
        </div>
      )
    }

    return (
      <div className="mb-10 mt-5 rounded border border-gray-500 p-5 pt-0">
        <p>
          Sie haben die{' '}
          <a href="https://www.maptiler.com/privacy-policy/" target="_blank">
            Datenschutzbestimmungen von MapTiler
          </a>{' '}
          und diese Datenschutzerklärung abgelehnt. Hier können Sie zustimmen.
        </p>
        <button
          className={selectLinkStyle(true)}
          onClick={() => {
            setConsent(true)
            setOptInCookie(true)
          }}
        >
          Ja, ich stimme zu
        </button>
      </div>
    )
  }

  return (
    <div className="mb-10 mt-5 rounded border border-gray-500 p-5 pt-0">
      <p>
        Sie haben der{' '}
        <a href="https://www.maptiler.com/privacy-policy/" target="_blank">
          Datenschutzbestimmungen von MapTiler
        </a>{' '}
        und dieser Datenschutzerklärung zugestimmt. Hier können Sie Ihre Einwilligung zurückziehen.
      </p>
      <button
        className={selectLinkStyle(true)}
        onClick={() => {
          setConsent(false)
          setOptInCookie(false)
        }}
      >
        Einwilligung Zurückziehen
      </button>
    </div>
  )
}
