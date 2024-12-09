import { cardStylesForLinkElements } from '@components/links/styles'
import { clsx } from 'clsx'
import { MeasureCardButton } from './MeasureCardButton'
import type { MeasureData, SubTopics } from './types'

type Props = {
  measureSlug: string
  measureData: MeasureData
  subTopics: SubTopics
  className?: string
}

export const MeasureCard = ({ measureSlug, measureData, subTopics, className }: Props) => {
  if (!measureData) return null
  return (
    <a
      target="_blank"
      href={`/massnahmen/${measureSlug}/`}
      key={measureData.nudafa_id}
      className={clsx(
        cardStylesForLinkElements,
        'mb-8 flex flex-col rounded-md bg-white px-4 py-5 shadow-lg',
        className,
      )}
    >
      <MeasureCardButton
        id={measureData.nudafa_id}
        subTopics={subTopics}
        title={measureData.title}
        town={measureData.town}
        topics={measureData.topics}
        cost={measureData.costs_amount}
        length={measureData.length}
        state={measureData.status}
        realisationDate={measureData.deadline}
        startDate={measureData.start}
        urgency={measureData.urgency}
      />
    </a>
  )
}
