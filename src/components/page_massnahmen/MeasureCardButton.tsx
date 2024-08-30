import { linkStyles } from '@components/links/styles'
import { StatusLabel } from '@components/StatusLabel'
import { UrgencyLabel } from '@components/UrgencyLabel'
import clsx from 'clsx'
import { MeasureCardCostDurationLength } from './MeasureCardCostDurationLength'
import { MeasureCardTitle } from './MeasureCardTitle'
import { MeasureCardTopicsAndTown } from './MeasureCardTopicsAndOperators'
import type { Measure, SubTopics } from './types'

type Props = {
  title: Measure['data']['title']
  topics?: Measure['data']['topics']
  cost?: Measure['data']['costs_amount']
  state?: Measure['data']['status']
  realisationDate?: Measure['data']['deadline']
  startDate?: Measure['data']['start']
  urgency?: Measure['data']['urgency']
  length?: Measure['data']['length']
  town: Measure['data']['town']
  id: Measure['data']['nudafa_id']
  subTopics: SubTopics
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
      {/* desktop */}
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
            <div className="flex gap-2">
              {urgency && <UrgencyLabel urgency={urgency} />}
              {state && <StatusLabel state={state} />}
            </div>
          </div>
          <div className="flex justify-between">
            <MeasureCardTopicsAndTown subTopics={subTopics} topics={topics} town={town} />
            <p className={clsx(linkStyles, 'shrink-0 text-sm')}>Mehr Details</p>
          </div>
        </div>
      </div>
      {/* mobile */}
      <div className="flex w-full flex-col gap-4 md:hidden">
        <div className="flex gap-4">
          <MeasureCardTitle id={id} title={title} />
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
          <MeasureCardTopicsAndTown subTopics={subTopics} topics={topics} town={town} />
          <div className="flex gap-2">
            {urgency && <UrgencyLabel urgency={urgency} />}
            {state && <StatusLabel state={state} />}
          </div>
        </div>
      </div>
    </>
  )
}
