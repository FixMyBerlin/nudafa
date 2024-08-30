import clsx from 'clsx'
import flashImg from 'src/assets/icons/flash.png'
import importantImg from 'src/assets/icons/important.png'
import veryImportantImg from 'src/assets/icons/very-important.png'

type Props = {
  urgency: string
  withText?: boolean
}

type TUrgencyTableData = {
  [key: string]: {
    title: string
    color?: string
    icon?: any
    imgClass?: string
  }
}

export const urgencyTableData: TUrgencyTableData = {
  sofort: {
    color: 'bg-[#818CF8]',
    title: 'sofort',
    icon: flashImg,
  },
  'sehr-hoch': {
    title: 'sehr hoch',
    color: 'bg-[#F87171]',
    icon: veryImportantImg,
    imgClass: 'p-0.5',
  },
  hoch: {
    color: 'bg-[#FB923C]',
    title: 'hoch',
    icon: importantImg,
    imgClass: 'p-0.5',
  },
  mittel: {
    title: 'mittel',
  },
  niedrig: {
    title: 'niedrig',
  },
  zurueckgestellt: {
    title: 'zurückgestellt',
  },
}

export const UrgencyLabel = ({ urgency, withText }: Props) => {
  if (['mittel', 'niedrig', 'zurueckgestellt'].includes(urgency)) {
    if (withText) {
      return <p>{urgencyTableData[urgency].title}</p>
    } else {
      return null
    }
  }
  return (
    <div className={clsx('flex items-center gap-2 text-xs font-normal text-black')}>
      <div className="relative">
        <div className={clsx('h-8 w-8 rounded-full', urgencyTableData[urgency]?.color)} />
        <img
          className={clsx('absolute left-2 top-2 h-4 w-4', urgencyTableData[urgency]?.imgClass)}
          src={urgencyTableData[urgency]?.icon.src}
          alt=""
        />
      </div>
      {withText && <p>{urgencyTableData[urgency].title}</p>}
    </div>
  )
}
