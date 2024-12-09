import { selectLinkStyle } from '@components/links/styles'
import pngPlaceholderMap from './assets/placeholder-map.png'
import { setOptInCookie } from './storage'

type Props = {
  consent: boolean | null
  setConsent: (val: boolean | null) => void
}

export const OptIn = ({ consent, setConsent }: Props) => {
  return (
    <>
      <img
        src={pngPlaceholderMap.src}
        className="absolut inset-0 h-full w-full object-cover blur-sm"
        alt=""
      />

      <div className="absolute inset-x-5 inset-y-20 bottom-auto max-w-prose rounded-lg bg-white shadow md:inset-x-20 lg:right-auto">
        <div className="prose prose-sm px-4 py-5 sm:p-6">
          <div className="mt-2">
            <p>
              Zur Nutzung der Kartenfunktion stimme bitte den{' '}
              <a href="https://www.maptiler.com/privacy-policy/" target="_blank">
                Datenschutzbestimmungen von MapTiler
              </a>{' '}
              zu. MapTiler speichert nur kurzfristig notwendige Daten zu Deiner IP- Adresse. Du
              kannst Deine Zustimmung auf unserer <a href="/datenschutz/">Datenschutz-Seite</a>{' '}
              zurückziehen.
            </p>
            Zur Darstellung unserer Karten benutzen wir MapTiler, wodurch wir eine Weitergabe von
            Nutzerinformationen an Dritte nicht vermeiden können.
          </div>
          <div className="mt-5 flex items-center gap-3">
            <button
              type="submit"
              className={selectLinkStyle(true)}
              onClick={() => {
                setConsent(true)
                setOptInCookie(true)
              }}
            >
              Ja, ich stimme zu
            </button>
            {consent === null && (
              <button
                type="button"
                className={selectLinkStyle(true)}
                onClick={() => {
                  setConsent(false)
                  setOptInCookie(false)
                }}
              >
                Ablehnen
              </button>
            )}
          </div>
        </div>
      </div>
    </>
  )
}
