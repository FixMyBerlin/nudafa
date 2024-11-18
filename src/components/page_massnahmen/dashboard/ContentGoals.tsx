import { WidgetInvestitionen } from './ContentGoals/WidgetInvestitionen'
import { WidgetMarkdown } from './ContentGoals/WidgetMarkdown'
import { WidgetPeople } from './ContentGoals/WidgetPeople'

type Props = { foo: true }

export const ContentGoals = ({ foo }: Props) => {
  return (
    <>
      <WidgetMarkdown foo={foo} />
      <WidgetPeople foo={foo} />
      <WidgetInvestitionen foo={foo} />
    </>
  )
}
