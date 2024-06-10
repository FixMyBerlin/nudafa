import { LegendKontext } from '../legends/LegendKontext'
import type { MapDataAndLegend } from './mapDataAndLegend.const'

// todo: check if this matching is correct
// "Kontext" in table = "Netze und Planungen" in map / former website ?
export const pageKontext: MapDataAndLegend = {
  kontext: {
    sources: {
      'vorhandene-netze': {
        pmTilesUrl: 'https://radverkehrsatlas.de/api/uploads/nudafa-netzvorschlaege-buergerinnen',
        layers: [
          {
            id: 'Vorhandene-netze_uebergeordnet',
            minzoom: 9,
            filter: [
              'match',
              ['get', 'layer'],
              [
                // Diese Filter waren in Mapbox zustäzlich, aber nicht im Atlas:
                // 'RSV_Teltowkanalroute',
                // 'RSV BER-KW varianten',
                // Diese Filter kommen aus dem Atlas:
                'Hauptachsen',
                'radnetz_zesplus_vers__4',
                'LDS_zielnetz',
                'Schulwege_Rad',
                'Radnetz_berlin',
                'Schulwege_UnsichereStellen',
                'Schulwege_ZuFuss',
              ],
              false,
              true,
            ],
            type: 'line',
            paint: {
              'line-color': [
                'match',
                ['get', 'layer'],
                ['osm_routen'],
                'hsl(88, 89%, 36%)',
                ['RSV_Teltowkanalroute', 'RSV_Y-Trasse'],
                'hsl(278, 92%, 47%)',
                ['radnetz_zesplus_vers__4', 'Hauptachsen'],
                '#ffbc0a',
                ['Idealtrasse RVK LDS 2030', 'Alternativtrasse  RVK LDS 2030'],
                '#f816f8',
                ['radkonzept schoenefeld'],
                'hsl(178, 81%, 48%)',
                ['Radnetz_berlin'],
                'hsla(229, 100%, 38%, 0)',
                ['Vorrangnetz_berlin'],
                'hsl(203, 100%, 38%)',
                ['LDS_zielnetz'],
                'hsl(48, 93%, 53%)',
                'hsl(48, 89%, 36%)',
              ],
              'line-opacity': ['interpolate', ['linear'], ['zoom'], 0, 0, 10, 0.9],
              'line-width': [
                'interpolate',
                ['linear'],
                ['zoom'],
                10,
                [
                  'match',
                  ['get', 'layer'],
                  ['Hauptachsen', 'osm_routen'],
                  3,
                  ['RSV_Y-Trasse', 'RSV_Teltowkanalroute', 'Idealtrasse RVK LDS 2030'],
                  5,
                  1.5,
                ],
                22,
                1,
              ],
              'line-dasharray': [2, 0],
            },
          },
        ],
      },
    },
    legends: <LegendKontext />,
    colorClass: 'border-l-[#F5E4B7]',
  },
}
