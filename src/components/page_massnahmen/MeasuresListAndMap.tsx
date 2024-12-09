import {
  buttonStylesForLinkElement,
  selectedButtonStylesForLinkElement,
} from '@components/links/styles'
import { getGeometryByNudafaIds } from '@components/page_massnahmen/utils/getGeometryByNudafaId'
import { statusTableData } from '@components/StatusLabel'
import { ListBulletIcon, MapIcon, XMarkIcon } from '@heroicons/react/24/outline'
import clsx from 'clsx'
import { useState } from 'react'
import { FilterListbox } from './FilterListbox'
import { MeasureCard } from './MeasureCard'
import { MeasureMap } from './MeasuresMap'
import type { Measure, SubTopics } from './types'

type Props = {
  measures: Measure[]
  subTopics: SubTopics
  townFilter?: string
}

export const MeasuresListAndMap = ({ measures, subTopics, townFilter }: Props) => {
  const [mapView, setMapView] = useState(true)
  const [selectedLineId, setSelectedLineId] = useState(null)

  const deadlineYears = [
    ...new Set(
      measures
        .map((m: Measure) => {
          if (m.data.deadline) {
            const date = new Date(m.data.deadline)
            return String(date.getFullYear())
          } else {
            return null
          }
        })
        .sort((a, b) => Number(a) - Number(b))
        .filter(Boolean),
    ),
  ]
  const deadlineYearOptions = deadlineYears.map((year) => {
    return { value: year, label: year }
  })
  deadlineYearOptions.unshift({ value: 'all', label: 'Alle' })

  const topics = [
    ...new Set(
      measures
        .map((m: Measure) => {
          if (m.data.topics) return m.data.topics
        })
        .flat()
        .filter(Boolean),
    ),
  ]
  const topicsOptions = topics.map((topic) => {
    return {
      value: topic,
      label: subTopics.find((subTopic) => subTopic.id === topic)?.data.title || topic,
    }
  })

  topicsOptions.unshift({ value: 'all', label: 'Alle' })

  const statusOptions = Object.entries(statusTableData)
    .map(([key, value]) => {
      return { value: key, label: value.title }
    })
    .filter((status) => status.value !== 'archiviert')
  statusOptions.unshift({ value: 'all', label: 'Alle' })

  const [filterYear, setFilterYear] = useState(deadlineYearOptions[0])
  const [filterStatus, setFilterStatus] = useState(statusOptions[0])
  const [filterTopics, setFilterTopics] = useState(topicsOptions[0])

  const fileterdMeasures = measures.filter((m) => {
    const matchesYear =
      filterYear.value === 'all' ||
      (m.data.deadline && String(new Date(m.data.deadline).getFullYear()) === filterYear.value) ||
      (filterYear.value === null && !m.data.deadline)
    const matchesStatus = filterStatus.value === 'all' || m.data.status === filterStatus.value
    const matchesTopics =
      // @ts-expect-error todo
      filterTopics.value === 'all' || (m.data.topics && m.data.topics?.includes(filterTopics.value))
    return matchesYear && matchesStatus && matchesTopics
  })

  const filteredMeasureIds = fileterdMeasures.map((m) => m.data.nudafa_id)
  const features = getGeometryByNudafaIds(filteredMeasureIds)

  return (
    <div className="pb-24 pt-12">
      <h2 className="mb-2 text-lg font-bold md:text-2xl">
        Maßnahmen für den Radverkehr ({fileterdMeasures.length})
      </h2>
      <p>für die {townFilter ? townFilter : 'Nudafa Region'}</p>
      <div className="my-10">
        <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-3">
          <div>
            <p>Datum der Realisierung</p>
            <FilterListbox
              // @ts-expect-error todo
              filter={filterYear}
              setFilter={setFilterYear}
              // @ts-expect-error todo
              options={deadlineYearOptions}
            />
          </div>
          <div>
            <p>Status</p>
            <FilterListbox
              filter={filterStatus}
              setFilter={setFilterStatus}
              options={statusOptions}
            />
          </div>
          <div>
            <p>Thema</p>
            <FilterListbox
              // @ts-expect-error todo
              filter={filterTopics}
              setFilter={setFilterTopics}
              // @ts-expect-error todo
              options={topicsOptions}
            />
          </div>
        </div>
        <button
          onClick={() => {
            setFilterYear(deadlineYearOptions[0])
            setFilterStatus(statusOptions[0])
            setFilterTopics(topicsOptions[0])
          }}
          className={clsx(
            'mt-3 flex items-center gap-2 text-beige-600',
            filterYear.value === 'all' &&
              filterStatus.value === 'all' &&
              filterTopics.value === 'all'
              ? 'invisible'
              : 'visible',
          )}
        >
          <XMarkIcon className="h-4 w-4" /> Filter zurücksetzen
        </button>
      </div>

      <div className="mb-8 mt-4">
        <div className="mt-3 flex flex-row justify-start gap-2">
          <button
            onClick={() => setMapView(true)}
            className={clsx(
              mapView ? selectedButtonStylesForLinkElement : buttonStylesForLinkElement,
              'flex items-center gap-1 px-8',
            )}
          >
            <MapIcon className="h-4 w-4" />
            Karte
          </button>
          <button
            onClick={() => setMapView(false)}
            className={clsx(
              mapView ? buttonStylesForLinkElement : selectedButtonStylesForLinkElement,
              'flex items-center gap-1 px-8',
            )}
          >
            <ListBulletIcon className="h-4 w-4" />
            Liste
          </button>
        </div>
      </div>
      {filteredMeasureIds.length === 0 ? (
        <small>keine Ergebnisse mit diesem Filter</small>
      ) : mapView ? (
        <div className="relative h-[600px] w-full">
          <MeasureMap
            selectedLineId={selectedLineId}
            setSelectedLineId={setSelectedLineId}
            geometry={features}
            isZielnetzLayer
          />
          {selectedLineId && fileterdMeasures.find((m) => m.data.nudafa_id === selectedLineId) && (
            <MeasureCard
              measureSlug={fileterdMeasures.find((m) => m.data.nudafa_id === selectedLineId)?.id!}
              measureData={fileterdMeasures.find((m) => m.data.nudafa_id === selectedLineId)?.data!}
              subTopics={subTopics}
              className="absolute inset-x-0 bottom-0 z-10 mx-auto md:max-w-[820px]"
            />
          )}
        </div>
      ) : (
        <ul>
          {fileterdMeasures.map((m) => (
            <li className="list-none">
              <MeasureCard
                key={m.id}
                measureSlug={m.id}
                measureData={m.data}
                subTopics={subTopics}
              />
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
