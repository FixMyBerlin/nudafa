import { CalendarDaysIcon } from '@heroicons/react/24/outline'
import { format } from 'date-fns'
import { de } from 'date-fns/locale'

export const MeasureCardCostDurationLength = ({ realisationDate, startDate, cost, length }) => {
  return (
    <div className="flex flex-shrink-0 flex-grow flex-row items-start text-sm md:justify-center md:px-4">
      <div className="flex flex-row items-center gap-1">
        {/* <Image src={routeIcon} alt="Länge" className="h-3 w-3 shrink-0 object-cover" />{' '} */}
        <p className="text-nowrap border-r border-black pr-2 leading-3">{length || '-'} m</p>
      </div>
      <div className="ml-2 flex flex-row items-center gap-1">
        <CalendarDaysIcon className="h-[13px] w-[13px]" />
        <p className="text-nowrap border-r border-black pr-2 leading-3">
          {!startDate && !realisationDate && '-'}
          {startDate && !realisationDate && 'ab'}
          {startDate &&
            `${format(startDate, 'yyyy', {
              locale: de,
            })} `}
          {realisationDate &&
            ` bis ${format(realisationDate, 'yyyy', {
              locale: de,
            })}`}
        </p>
      </div>
      <p className="ml-2 text-nowrap leading-3">
        € {cost ? cost.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.') : '-'}
      </p>
    </div>
  )
}
