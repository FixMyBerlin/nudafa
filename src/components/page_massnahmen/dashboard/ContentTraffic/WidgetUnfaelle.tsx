import { Widget } from '../components/Widget'
import type { TrafficDashboardData } from '../DasboardTabs'

export const WidgetUnfaelle = ({ data }: TrafficDashboardData) => {
  return (
    <Widget headline="Unfälle">
      <p className="mb-3 text-sm">Unfälle der letzten drei Jahre mit Radfahrbeteiligung</p>
      <dl className="flex flex-wrap gap-0.5 space-x-5 text-xs">
        <div className="flex items-center gap-2">
          <dt className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-[#960854] font-serif font-bold">
            0
          </dt>
          <dd>Unfälle mit Getöteten</dd>
        </div>
        <div className="flex items-center gap-2">
          <dt className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-[#FF2E3B] font-serif font-bold">
            4
          </dt>
          <dd>Unfälle mit Schwerverletzten</dd>
        </div>
        <div className="flex items-center gap-2">
          <dt className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-[#F59E0B] font-serif font-bold">
            12
          </dt>
          <dd>Unfälle mit Leichtverletzten</dd>
        </div>
        <div className="flex items-center gap-2">
          <dt className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-[#F5EC0B] font-serif font-bold">
            24
          </dt>
          <dd>Unfälle mit Sachschaden</dd>
        </div>
      </dl>
      <p className="mt-3 text-right text-xs text-gray-500">Quelle: Unfallstatistik der Polizei </p>
    </Widget>
  )
}
