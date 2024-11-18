import { clsx } from 'clsx'
import { parseAsStringLiteral, useQueryState } from 'nuqs'
import { NuqsAdapter } from 'nuqs/adapters/react'
import { ContentGeneral } from './ContentGeneral'
import { ContentGoals } from './ContentGoals'
import { ContentTraffic } from './ContentTraffic'

const dashboards = {
  allgemein: { name: 'Allgemeine Informationen', component: <ContentGeneral foo={true} /> },
  verkehr: { name: 'Verkehr', component: <ContentTraffic foo={true} /> },
  ziele: { name: 'Politische Ziele', component: <ContentGoals foo={true} /> },
} as const
const dashboardValues = Object.keys(dashboards) as (keyof typeof dashboards)[]

const DasboardTabsWithNuqs = () => {
  const [dashboard, setDashboard] = useQueryState(
    'dashboard',
    parseAsStringLiteral(dashboardValues).withDefault('allgemein'),
  )

  return (
    <div>
      <div className="sm:hidden">
        <label htmlFor="tabs" className="sr-only">
          Bereich Auswählen
        </label>
        {/* Use an "onChange" listener to redirect the user to the selected tab URL. */}
        <select
          id="tabs"
          name="tabs"
          defaultValue={dashboards[dashboard].name}
          className="block w-full rounded-md border-gray-300 focus:border-beige-500 focus:ring-beige-500"
          // @ts-expect-error values is only what we have in `dashboards`
          onChange={(event) => setDashboard(event.target.value)}
        >
          {Object.entries(dashboards).map(([key, values]) => (
            <option key={key} value={key}>
              {values.name}
            </option>
          ))}
        </select>
      </div>
      <div className="hidden sm:block">
        <nav aria-label="Tabs" className="isolate flex divide-x divide-gray-200 rounded-lg shadow">
          {Object.entries(dashboards).map(([key, values], tabIdx) => {
            const current = key === dashboard
            return (
              <button
                key={key}
                aria-current={current ? 'page' : undefined}
                className={clsx(
                  current
                    ? 'font-bold text-gray-900'
                    : 'text-gray-700 hover:font-medium hover:text-gray-900',
                  tabIdx === 0 ? 'rounded-tl-lg' : '',
                  tabIdx === Object.keys(dashboards).length - 1 ? 'rounded-tr-lg' : '',
                  'group relative min-w-0 flex-1 overflow-hidden bg-white px-4 py-4 text-center font-serif hover:bg-gray-50 focus:z-10',
                )}
                // @ts-expect-error `key` is only what we have in `dashboards`
                onClick={() => setDashboard(key)}
              >
                <span>{values.name}</span>
                <span
                  aria-hidden="true"
                  className={clsx(
                    current ? 'bg-beige-600' : 'bg-transparent',
                    'absolute inset-x-0 bottom-0 h-1',
                  )}
                />
              </button>
            )
          })}
        </nav>
      </div>
      <article className="gap-5 rounded-b-lg bg-black/20 p-5 sm:grid sm:grid-cols-3">
        {dashboards[dashboard].component}
      </article>
    </div>
  )
}

export const DasboardTabs = () => {
  return (
    <NuqsAdapter>
      <DasboardTabsWithNuqs />
    </NuqsAdapter>
  )
}
