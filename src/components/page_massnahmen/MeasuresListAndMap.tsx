import {
  buttonStylesForLinkElement,
  selectedButtonStylesForLinkElement,
} from '@components/links/styles'

import { ListBulletIcon, MapIcon } from '@heroicons/react/24/outline'
import clsx from 'clsx'
import type { Feature } from 'maplibre-gl'
import { useState } from 'react'
import type { Measure, SubTopics } from 'src/pages/massnahmen/index.astro'
import { MeasureCard } from './MeasureCard'
import { MeasureMap } from './MeasuresMap'

type Props = {
  measures: Measure[]
  subTopics: SubTopics
  features: Feature[]
  townFilter?: string
}

export const MeasuresListAndMap = ({ measures, subTopics, features, townFilter }: Props) => {
  const [mapView, setMapView] = useState(true)
  const [selectedLineId, setSelectedLineId] = useState(null)

  return (
    <div className="pt-12">
      <h3 className="mb-2 text-lg font-bold md:text-2xl">
        Maßnahmen für den Radverkehr ({measures.length})
      </h3>
      <p>für die {!townFilter ? 'Nudafa Region' : townFilter}</p>
      <div className="mb-16 mt-4">
        {/* <p>Ansicht der Maßnahmen</p> */}
        <div className="mt-3 flex flex-row justify-start gap-2">
          <button
            onClick={() => setMapView(true)}
            className={clsx(
              !mapView ? buttonStylesForLinkElement : selectedButtonStylesForLinkElement,
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
      {!mapView ? (
        <ul>
          {measures.map((m) => (
            <li className="list-none">
              <MeasureCard key={m.id} measure={m} subTopics={subTopics} />
            </li>
          ))}
        </ul>
      ) : (
        <div className="relative h-[600px] w-full">
          <MeasureMap
            selectedLineId={selectedLineId}
            setSelectedLineId={setSelectedLineId}
            geometry={features}
          />
          {selectedLineId && (
            <MeasureCard
              measure={measures.find((m) => m.data.nudafa_id === selectedLineId)}
              subTopics={subTopics}
              className="absolute inset-x-0 bottom-0 z-10 mx-auto md:max-w-[820px]"
            />
          )}
        </div>
      )}
    </div>
  )
}
