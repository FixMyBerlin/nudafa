import { useStore } from '@nanostores/react'
import { redirectPage } from '@nanostores/router'
import { roundPositionForURL } from './roundNumber'
import { $router } from './store'

export type MapParamObject = {
  longitude: number
  latitude: number
  zoom: number
}

const initialMapParams = [12.4, 52.348, 13.623]

export const useMapParam = () => {
  const router = useStore($router)

  const mapParamsObject = () => {
    const mapParams = router?.search?.map?.split('/')?.map((value) => Number(value))
    const [zoom, latitude, longitude] = mapParams || initialMapParams
    return { longitude, latitude, zoom }
  }

  const setMapParams = ({ longitude, latitude, zoom }: MapParamObject) => {
    if (!router?.params || !$router) return

    const mapParam = roundPositionForURL(zoom, latitude, longitude).join('/')
    redirectPage($router, 'radnetz', { section: router.params.section }, { map: mapParam })
  }

  return { mapParamsObject, setMapParams }
}
