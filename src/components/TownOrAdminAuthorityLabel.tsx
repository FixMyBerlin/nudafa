import clsx from 'clsx'
import {
  measureAdminAuthorityOptions,
  measureLabelColorsClasses,
} from './page_massnahmen/measureCommunes.const'

type Props = {
  townOrAdminAuthorityId: string
}

const getTownOrAdminAuthorityTitle = (townOrAdminAuthorityId: string) => {
  return measureAdminAuthorityOptions.find((option) => option.value === townOrAdminAuthorityId)
    ?.label
}

export const TownOrAdminAuthorityLabel = ({ townOrAdminAuthorityId }: Props) => (
  <span
    className={clsx(
      'TownOrAdminAuthorityLabel list-none rounded-md px-2.5 py-1 text-sm font-normal',
      measureLabelColorsClasses[townOrAdminAuthorityId],
    )}
  >
    {getTownOrAdminAuthorityTitle(townOrAdminAuthorityId)}
  </span>
)
