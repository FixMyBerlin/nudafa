import { TopicLabel } from '@components/TopicLabel'
import { TownOrAdminAuthorityLabel } from '@components/TownOrAdminAuthorityLabel'
import type { MeasureData, SubTopics } from './types'

type Props = {
  town: MeasureData['town']
  topics: MeasureData['topics']
  subTopics: SubTopics
}

export const MeasureCardTopicsAndTown = ({ town, topics, subTopics }: Props) => {
  return (
    <ul className="flex flex-wrap items-end gap-3">
      {topics?.map((topic) => (
        <li key={topic}>
          <TopicLabel subTopics={subTopics} topic={topic} />
        </li>
      ))}
      <li>
        <TownOrAdminAuthorityLabel townOrAdminAuthorityId={town} />
      </li>
    </ul>
  )
}
