import { Widget } from '../components/Widget'

type Props = { foo: true }

export const WidgetVerkehrsbelastung = ({ foo }: Props) => {
  return (
    <Widget headline="Verkehrsbelastung">
      <p className="mb-2">
        <small>ø Belastung aus Messungen </small>
      </p>
      <code>TODO</code>
    </Widget>
  )
}
