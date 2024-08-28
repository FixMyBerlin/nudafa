import { TownOrAdminAuthorityLabel } from '@components/OperatorLabel'
import { TopicLabel } from '@components/TopicLabel'

type Props = {
  topics?: string[]
  townId: string
  subTopics: any[]
}

export const MeasureCardTopicsAndTown = ({ townId, topics, subTopics }: Props) => {
  return (
    <ul className="flex flex-wrap items-end gap-2">
      {topics?.map((topic) => (
        <li key={topic}>
          <TopicLabel subTopics={subTopics} topic={topic} />
        </li>
      ))}
      <li>
        <TownOrAdminAuthorityLabel townOrAdminAuthorityId={townId} />
      </li>
    </ul>
  )
}
