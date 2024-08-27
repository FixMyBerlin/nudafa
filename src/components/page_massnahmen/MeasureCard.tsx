import { cardStylesForLinkElements } from '@components/links/styles'
import clsx from 'clsx'
import { MeasureCardButton } from './MeasureCardButton'

type Props = {
  measure: any
  subTopics: any[]
}

export const MeasureCard = ({ measure, subTopics }: Props) => {
  return (
    <li className="list-none" key={measure.data.nudafa_id}>
      <a
        href={`/massnahmen/${measure.slug}`}
        className={clsx(
          cardStylesForLinkElements,
          'mb-8 flex flex-col rounded-md bg-white px-4 py-5 shadow-lg',
        )}
      >
        <MeasureCardButton
          subTopics={subTopics}
          title={measure.data.title}
          town={measure.data.town}
          topics={measure.data.topics}
          // operators={measure.data.admin_authority}
          cost={measure.data.costs_amount}
          length={measure.data.length}
          state={measure.data.status}
          realisationDate={measure.data.deadline}
          startDate={measure.data.start}
          urgency={measure.data.urgency}
        />
      </a>
    </li>
  )
}
