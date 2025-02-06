import type { LngLatBoundsLike } from 'maplibre-gl'

// Style: https://cloud.maptiler.com/maps/fe7d06df-9fbd-43f3-bd9e-8f394e41efd0/
export const MAPTILER_STYLE =
  'https://api.maptiler.com/maps/fe7d06df-9fbd-43f3-bd9e-8f394e41efd0/style.json?key=ECOoUBmpqklzSCASXxcu'

// https://maplibre.org/maplibre-gl-js/docs/API/classes/Map/#setmaxbounds
export const MAX_BOUNDS = [
  [13.247683121825787, 52.05970889348518],
  [14.057293817329509, 52.517318654366335],
] satisfies LngLatBoundsLike

// https://maplibre.org/maplibre-gl-js/docs/API/classes/Map/#setminzoom
export const MINZOOM = 7

// https://maplibre.org/maplibre-gl-js/docs/API/classes/Map/#setmaxzoom
export const MAXZOOM = 21
