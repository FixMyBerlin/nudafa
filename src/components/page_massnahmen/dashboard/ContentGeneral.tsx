import { WidgetFahrradklimatest } from './ContentGeneral/WidgetFahrradklimatest'
import { WidgetMarkdown } from './ContentGeneral/WidgetMarkdown'
import { WidgetVerkehrsbelastung } from './ContentGeneral/WidgetVerkehrsbelastung'

type Props = { foo: true }

export const ContentGeneral = ({ foo }: Props) => {
  return (
    <>
      <WidgetMarkdown foo={foo} />
      <WidgetFahrradklimatest foo={foo} />
      <WidgetVerkehrsbelastung foo={foo} />
    </>
  )
}
