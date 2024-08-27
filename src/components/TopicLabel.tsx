import clsx from 'clsx'

type Props = {
  topic: string
  subTopics: any[]
}

export const TopicLabel = ({ topic, subTopics }: Props) => {
  const getFullTopicTitle = (topic: string) => {
    const subTopic = subTopics.find((subTopic) => subTopic.id === topic)
    return subTopic ? subTopic.data.title : topic
  }
  return (
    <span className={clsx('rounded-md border border-black px-2 py-px text-sm text-black')}>
      {getFullTopicTitle(topic)}
    </span>
  )
}
