import { TopicLabel } from '@components/TopicLabel'
import { TownOrAdminAuthorityLabel } from '@components/TownOrAdminAuthorityLabel'

type Props = {
  topics?: string[]
  townId: string
  subTopics: any[]
}

export const MeasureCardTopicsAndTown = ({ townId, topics, subTopics }: Props) => {
  return (
    <ul className="flex flex-wrap items-end gap-3">
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
