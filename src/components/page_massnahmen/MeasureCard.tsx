import { cardStylesForLinkElements } from '@components/links/styles'
import clsx from 'clsx'
import type { Measure } from 'src/pages/massnahmen/index.astro'
import { MeasureCardButton } from './MeasureCardButton'

type Props = {
  measure: Measure
  subTopics: any[]
  className?: string
}

export const MeasureCard = ({ measure, subTopics, className }: Props) => {
  return (
    <a
      target="_blank"
      href={`/massnahmen/${measure.slug}`}
      key={measure.data.nudafa_id}
      className={clsx(
        cardStylesForLinkElements,
        'mb-8 flex flex-col rounded-md bg-white px-4 py-5 shadow-lg',
        className,
      )}
    >
      <MeasureCardButton
        id={measure.data.nudafa_id}
        subTopics={subTopics}
        title={measure.data.title}
        town={measure.data.town}
        topics={measure.data.topics}
        cost={measure.data.costs_amount}
        length={measure.data.length}
        state={measure.data.status}
        realisationDate={measure.data.deadline}
        startDate={measure.data.start}
        urgency={measure.data.urgency}
      />
    </a>
  )
}