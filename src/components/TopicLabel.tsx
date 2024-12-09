import { clsx } from 'clsx'
import type { SubTopics } from './page_massnahmen/types'

type Props = {
  topic: string
  subTopics: SubTopics
}

export const TopicLabel = ({ topic, subTopics }: Props) => {
  const getFullTopicTitle = (topic: string) => {
    const subTopic = subTopics.find((subTopic) => subTopic.id === topic)
    return subTopic ? subTopic.data.title : topic
  }
  return (
    <span
      className={clsx('rounded-md border border-black px-2.5 py-1 text-sm font-normal text-black')}
    >
      {getFullTopicTitle(topic)}
    </span>
  )
}
