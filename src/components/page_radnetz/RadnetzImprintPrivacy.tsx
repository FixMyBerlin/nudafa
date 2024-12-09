import { linkStyles } from '@components/links/styles'
import { clsx } from 'clsx'

type Props = { className?: string }

export const RadnetzImprintPrivacy = ({ className }: Props) => {
  return (
    <div className={clsx('mb-6 mt-4 flex justify-center gap-2 text-sm', className)}>
      <a className={linkStyles} href="/impressum">
        Impressum
      </a>
      <a className={linkStyles} href="/datenschutz">
        Datenschutz
      </a>
    </div>
  )
}
