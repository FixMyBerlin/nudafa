import { OperatorLabel } from '@components/OperatorLabel'
import { TopicLabel } from '@components/TopicLabel'

type Props = {
  topics?: string[]
  operator: string
  subTopics: any[]
}

export const MeasureCardTopicsAndOperators = ({ operator, topics, subTopics }: Props) => {
  return (
    <ul className="flex flex-wrap items-end gap-2">
      {topics?.map((topic) => (
        <li key={topic}>
          <TopicLabel subTopics={subTopics} topic={topic} />
        </li>
      ))}
      <li>
        <OperatorLabel operatorId={operator} />
      </li>
    </ul>
  )
}
