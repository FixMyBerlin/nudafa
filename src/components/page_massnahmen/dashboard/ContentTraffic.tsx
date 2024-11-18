import { WidgetFahrzeuge } from './ContentTraffic/WidgetFahrzeuge'
import { WidgetModalsplit } from './ContentTraffic/WidgetModalsplit'
import { WidgetPentlersaldo } from './ContentTraffic/WidgetPentlersaldo'
import { WidgetStrassennetz } from './ContentTraffic/WidgetStrassennetz'
import { WidgetUnfaelle } from './ContentTraffic/WidgetUnfaelle'

type Props = { foo: true }

export const ContentTraffic = ({ foo }: Props) => {
  return (
    <>
      <div className="flex flex-col gap-5">
        <WidgetPentlersaldo foo={foo} />
        <WidgetFahrzeuge foo={foo} />
      </div>
      <WidgetModalsplit foo={foo} />
      <WidgetStrassennetz foo={foo} />
      <div className="col-span-3">
        <WidgetUnfaelle foo={foo} />
      </div>
    </>
  )
}
