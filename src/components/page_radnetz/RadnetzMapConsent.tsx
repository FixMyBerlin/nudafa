import { useEffect, useState } from 'react'
import { RadnetzMap } from './Map/RadnetzMap'
import { OptIn } from './MapCookieConsent/OptIn'
import { getOptInCookie } from './MapCookieConsent/storage'

type Props = {
  children?: React.ReactNode
}

export const RadnetzMapConsent = ({ children }: Props) => {
  const [consent, setConsent] = useState<boolean | null>(true)
  useEffect(() => setConsent(getOptInCookie()))

  if (consent === true) {
    return (
      <div className="relative h-[500px] w-full md:h-full">
        <RadnetzMap>{children}</RadnetzMap>
      </div>
    )
  }

  return (
    <div className="relative h-[500px] w-full overflow-clip md:h-full">
      <OptIn consent={consent} setConsent={setConsent} />
    </div>
  )
}
