import { Widget } from '../components/Widget'

type Props = { foo: true }

export const WidgetPeople = ({ foo }: Props) => {
  return (
    // prettier-ignore
    <Widget headline="Personen)">
Radverkehrsbeauftragter
Hector Heinrich
Radverkehrsmanager
Maria Kuppelwieser
PKWs
Fahrräder
Klimaschutzmanager
Matthias Schöneweger</Widget>
  )
}
