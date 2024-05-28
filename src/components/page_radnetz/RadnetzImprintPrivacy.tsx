import { linkStyles } from '@components/links/styles'

export const RadnetzImprintPrivacy = () => {
  return (
    <div className="mb-6 mt-4 flex justify-center gap-2 text-sm">
      <a className={linkStyles} href="/impressum">
        Impressum
      </a>
      <a className={linkStyles} href="/datenschutz">
        Datenschutz
      </a>
    </div>
  )
}
