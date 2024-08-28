import { linkStyles } from '@components/links/styles'
import { StatusLabel } from '@components/StatusLabel'
import clsx from 'clsx'
import { MeasureCardCostDurationLength } from './MeasureCardCostDurationLength'
import { MeasureCardTitle } from './MeasureCardTitle'
import { MeasureCardTopicsAndOperators } from './MeasureCardTopicsAndOperators'

type Props = {
  title: string
  topics?: string[]
  cost?: number
  state?: string
  realisationDate?: Date
  startDate?: Date
  urgency?: string
  length?: number
  subTopics: any[]
  town: string
  id: string
}

export const MeasureCardButton = ({
  title,
  topics,
  cost,
  state,
  realisationDate,
  startDate,
  urgency,
  length,
  town,
  subTopics,
  id,
}: Props) => {
  return (
    <>
      <div className="hidden w-full flex-row gap-4 md:flex">
        <div className="flex w-full flex-col justify-between">
          <div className="mb-6 flex items-start justify-between">
            <MeasureCardTitle id={id} title={title} />
            <MeasureCardCostDurationLength
              cost={cost}
              realisationDate={realisationDate}
              startDate={startDate}
              length={length}
            />
            {urgency && <p className="rounded-full p-1 text-xs text-red-500"> {urgency}</p>}
            <div className="flex-shrink-0 flex-col items-end">
              {state ? <StatusLabel state={state} /> : <p>Kein Status</p>}
            </div>
          </div>
          <div className="flex justify-between">
            <MeasureCardTopicsAndOperators subTopics={subTopics} topics={topics} operator={town} />
            <p className={clsx(linkStyles, 'shrink-0 text-sm')}>Mehr Details</p>
          </div>
        </div>
      </div>

      <div className="flex w-full flex-col gap-4 md:hidden">
        <div className="flex gap-4">
          <MeasureCardTitle id={id} title={title} />
          {urgency && <p className="rounded-full p-1 text-xs text-red-500"> {urgency}</p>}
        </div>
        <div className="flex w-full flex-col justify-between gap-4">
          <div className="flex justify-between">
            <MeasureCardCostDurationLength
              length={length}
              cost={cost}
              realisationDate={realisationDate}
              startDate={startDate}
            />
          </div>
          <MeasureCardTopicsAndOperators subTopics={subTopics} topics={topics} operator={town} />
          <div className="flex">{state ? <StatusLabel state={state} /> : <p>Kein Status</p>}</div>
        </div>
      </div>
    </>
  )
}
