// How we generated this list:
// 1. copy /radnetz/admin/
// 2. order the layer the way they are supposed to be
//    see https://docs.google.com/spreadsheets/d/1XuY0XBdEUUzFqJJlktIlHOBwHwwtU6Tug0Mg16bRXww/edit?gid=1313799060#gid=1313799060
// 3. copy the data here
//
// How to update the list:
// 1. check /radnetz/admin/
// 2. Probably manually change the layer in this file

type LayerKey = string
type BelowLayerKey = string // beforeId – "The ID of an existing layer to insert the new layer before, resulting in the new layer appearing visually beneath the existing layer. If this argument is not specified, the layer will be appended to the end of the layers array and appear visually above all other layers." https://maplibre.org/maplibre-gl-js/docs/API/classes/Map/#addlayer
export const beforeIds: Record<LayerKey, BelowLayerKey> = {
  // Base
  Satellite: 'nudafa-beforeId-pagelayer',
  'dimmlayer-ZES-Betrachtungsraum': 'nudafa-beforeId-maskierung',
  'Border-ZES-Betrachtungsraum': 'dimmlayer-ZES-Betrachtungsraum',
  'nudafa-maskierung-boundary': 'Border-ZES-Betrachtungsraum',
  // Pages
  'bedarfe-combined-Ergaenzungsvorschlag Route': 'bedarfe-combined-Problempunkt',
  'bedarfe-combined-Problempunkt': 'bedarfe-combined-Problemstrecke',
  'bedarfe-combined-Problemstrecke': 'zielnetz-ziel-zwangspunkte-Zwangspunkte',
  'bedarfe-combined-wichtige Ziele aus Beteiligung': 'bedarfe-combined-Ergaenzungsvorschlag Route',
  'bestand-bikelanes-fuehrung baul. abgesetzt von Kfz': 'bestand-bikelanes-Fuehrung eigenstaendig auf Fahrbahn',
  'bestand-bikelanes-Fuehrung eigenstaendig auf Fahrbahn': 'bestand-bikelanes-Fuehrung mit Fussverkehr',
  'bestand-bikelanes-Fuehrung mit Fussverkehr': 'bestand-bikelanes-Fuehrung mit Kfz-explizit',
  'bestand-bikelanes-Fuehrung mit Kfz-explizit': 'bestand-bikelanes-Gehweg Rad frei',
  'bestand-bikelanes-Gehweg Rad frei': 'bestand-bikelanes-needsClarification',
  'bestand-bikelanes-needsClarification': 'roadname_major',
  'bestand-roads-fahradgeeigneteNebenstrassen': 'roadname_major',
  'einleitung-places-circle-place-circle': 'nudafa-beforeId-pagelayer',
  'einleitung-places-circle-place-names': 'einleitung-places-circle-place-circle',
  'komfort-roads-smoothness-roads-all': 'bestand-bikelanes-fuehrung baul. abgesetzt von Kfz',
  'kontext-vorhandene-netze-Vorhandene-netze_uebergeordnet': 'komfort-roads-smoothness-roads-all',
  'luftliniennetz-combined-Luftlinien': 'strassentypen-roads-legacy-roads-oneway-pattern plus',
  'luftliniennetz-ziel-zwangspunkte-Zielpunkte': 'luftliniennetz-combined-Luftlinien',
  'luftliniennetz-ziel-zwangspunkte-Zwangspunkte': 'luftliniennetz-ziel-zwangspunkte-Zielpunkte',
  'quellen-und-ziele-barrier-areas-poibarriers_water_aerodrome': 'quellen-und-ziele-landuse-landuse_residential-commercial',
  'quellen-und-ziele-barrier-lines-poibarriers_motorway': 'quellen-und-ziele-barrier-lines-railway_light_rail-white',
  'quellen-und-ziele-barrier-lines-railway_light_rail-white': 'quellen-und-ziele-barrier-lines-railway_light_rail',
  'quellen-und-ziele-barrier-lines-railway_light_rail': 'quellen-und-ziele-barrier-lines-railway_rail-white',
  'quellen-und-ziele-barrier-lines-railway_rail-white': 'quellen-und-ziele-barrier-lines-railway-rail',
  'quellen-und-ziele-barrier-lines-railway-rail': 'quellen-und-ziele-barrier-areas-poibarriers_water_aerodrome',
  'quellen-und-ziele-buildings-buildings-black': 'housenumber',
  'quellen-und-ziele-landuse-landuse_residential-commercial -outlines': 'quellen-und-ziele-buildings-buildings-black',
  'quellen-und-ziele-landuse-landuse_residential-commercial': 'quellen-und-ziele-landuse-landuse_residential-commercial -outlines',
  'quellen-und-ziele-places-circle-place-circle': 'nudafa-beforeId-pagelayer',
  'quellen-und-ziele-places-circle-place-names': 'quellen-und-ziele-places-circle-place-circle',
  'quellen-und-ziele-poi-POIs-Schulen': 'quellen-und-ziele-poi-poiShopCategory',
  'quellen-und-ziele-poi-poiShopCategory': 'quellen-und-ziele-poi-poiShopping-heatmap',
  'quellen-und-ziele-poi-poiShopping-heatmap': 'quellen-und-ziele-places-circle-place-names',
  'quellen-und-ziele-public-transport-publicTransport': 'quellen-und-ziele-poi-poiShopping-heatmap',
  'sicherheit-gefahrenstellen-nudafa-gefahrstellen': 'sicherheit-unfaelle-nudafa-unfaelle',
  'sicherheit-poi-POIs-Schulen': 'sicherheit-gefahrenstellen-nudafa-gefahrstellen',
  'sicherheit-schulwege-nudafa-schulwege': 'kontext-vorhandene-netze-Vorhandene-netze_uebergeordnet',
  'sicherheit-unfaelle-nudafa-unfaelle': 'sicherheit-schulwege-nudafa-schulwege',
  'strassentypen-roads-legacy-oneway-road-bicycle': 'strassentypen-roads-legacy-oneway-road',
  'strassentypen-roads-legacy-oneway-road': 'strassentypen-roads-legacy-strassentyp',
  'strassentypen-roads-legacy-roads-oneway-pattern plus': 'strassentypen-roads-legacy-roads-onewaybikeyes-pattern plus',
  'strassentypen-roads-legacy-roads-onewaybikeyes-pattern plus': 'strassentypen-roads-legacy-oneway-road-bicycle',
  'strassentypen-roads-legacy-strassentyp': 'roadname_major',
  'zielnetz-combined-Netzentwurf': 'luftliniennetz-ziel-zwangspunkte-Zwangspunkte',
  'zielnetz-netzvorschlaege-buergerinnen-nudafa-netzvorschlaege-buergerinnen': 'zielnetz-combined-Netzentwurf',
  'zielnetz-ziel-zwangspunkte-Zwangspunkte': 'zielnetz-netzvorschlaege-buergerinnen-nudafa-netzvorschlaege-buergerinnen',
}
