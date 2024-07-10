// How we generated this list:
// 1. copy /radnetz/admin/
// 2. order the layer the way they are supposed to be
//    see https://docs.google.com/spreadsheets/d/1XuY0XBdEUUzFqJJlktIlHOBwHwwtU6Tug0Mg16bRXww/edit?gid=1313799060#gid=1313799060
// 3. copy the data here
//
// How to update the list:
// 1. check /radnetz/admin/
// 2. Probably manually change the layer in this file
export const beforeIds: Record<string, string> = {
  'quellen-und-ziele-buildings-buildings-black': 'housenumber',
  'quellen-und-ziele-landuse-landuse_residential-commercial -outlines':
    'quellen-und-ziele-buildings-buildings-black',
  'quellen-und-ziele-landuse-landuse_residential-commercial':
    'quellen-und-ziele-landuse-landuse_residential-commercial -outlines',
  'quellen-und-ziele-barrier-areas-poibarriers_water_aerodrome':
    'quellen-und-ziele-landuse-landuse_residential-commercial',
  'quellen-und-ziele-barrier-lines-railway-rail':
    'quellen-und-ziele-barrier-areas-poibarriers_water_aerodrome',
  'quellen-und-ziele-barrier-lines-railway_rail-white':
    'quellen-und-ziele-barrier-lines-railway-rail',
  'quellen-und-ziele-barrier-lines-railway_light_rail':
    'quellen-und-ziele-barrier-lines-railway_rail-white',
  'quellen-und-ziele-barrier-lines-railway_light_rail-white':
    'quellen-und-ziele-barrier-lines-railway_light_rail',
  'quellen-und-ziele-barrier-lines-poibarriers_motorway':
    'quellen-und-ziele-barrier-lines-railway_light_rail-white',
  'bestand-roads-roadclassification-nomainstreet':
    'quellen-und-ziele-barrier-lines-poibarriers_motorway',
  'bestand-roads-roads-onewaybikeyes-pattern sidestreets':
    'bestand-roads-roadclassification-nomainstreet',
  'bestand-roads-roads-oneway-pattern sidestreets':
    'bestand-roads-roads-onewaybikeyes-pattern sidestreets',
  'bestand-bikelanes-needsClarification': 'roadname_major',
  'bestand-bikelanes-Gehweg Rad frei': 'bestand-bikelanes-needsClarification',
  'bestand-bikelanes-Fuehrung mit Kfz-explizit': 'bestand-bikelanes-Gehweg Rad frei',
  'bestand-bikelanes-Fuehrung mit Fussverkehr': 'bestand-bikelanes-Fuehrung mit Kfz-explizit',
  'bestand-bikelanes-Fuehrung eigenstaendig auf Fahrbahn':
    'bestand-bikelanes-Fuehrung mit Fussverkehr',
  'bestand-bikelanes-fuehrung baul. abgesetzt von Kfz':
    'bestand-bikelanes-Fuehrung eigenstaendig auf Fahrbahn',
  'komfort-roads-smoothness-roads-all': 'bestand-bikelanes-fuehrung baul. abgesetzt von Kfz',
  'kontext-vorhandene-netze-Vorhandene-netze_uebergeordnet': 'komfort-roads-smoothness-roads-all',
  'sicherheit-schulwege-nudafa-schulwege':
    'kontext-vorhandene-netze-Vorhandene-netze_uebergeordnet',
  'sicherheit-unfaelle-nudafa-unfaelle': 'sicherheit-schulwege-nudafa-schulwege',
  'sicherheit-gefahrenstellen-nudafa-gefahrstellen': 'sicherheit-unfaelle-nudafa-unfaelle',
  'sicherheit-poi-pois-heat copy': 'sicherheit-gefahrenstellen-nudafa-gefahrstellen',
  'sicherheit-poi-education-classification-edu-names': 'sicherheit-poi-pois-heat copy',
  'sicherheit-poi-education-classification-edu':
    'sicherheit-poi-education-classification-edu-names',
  'strassentypen-roads-legacy-strassentyp': 'sicherheit-poi-education-classification-edu',
  'strassentypen-roads-legacy-oneway-road': 'strassentypen-roads-legacy-strassentyp',
  'strassentypen-roads-legacy-oneway-road-bicycle': 'strassentypen-roads-legacy-oneway-road',
  'strassentypen-roads-legacy-roads-onewaybikeyes-pattern plus':
    'strassentypen-roads-legacy-oneway-road-bicycle',
  'strassentypen-roads-legacy-roads-oneway-pattern plus':
    'strassentypen-roads-legacy-roads-onewaybikeyes-pattern plus',
  'luftliniennetz-combined-Luftlinien': 'strassentypen-roads-legacy-roads-oneway-pattern plus',
  'luftliniennetz-ziel-zwangspunkte-Zielpunkte': 'luftliniennetz-combined-Luftlinien',
  'luftliniennetz-ziel-zwangspunkte-Zwangspunkte': 'luftliniennetz-ziel-zwangspunkte-Zielpunkte',
  'zielnetz-combined-Netzentwurf': 'luftliniennetz-ziel-zwangspunkte-Zwangspunkte',
  'zielnetz-netzvorschlaege-buergerinnen-nudafa-netzvorschlaege-buergerinnen':
    'zielnetz-combined-Netzentwurf',
  'zielnetz-ziel-zwangspunkte-Zwangspunkte':
    'zielnetz-netzvorschlaege-buergerinnen-nudafa-netzvorschlaege-buergerinnen',
  'bedarfe-combined-Problemstrecke': 'zielnetz-ziel-zwangspunkte-Zwangspunkte',
  'bedarfe-combined-Problempunkt': 'bedarfe-combined-Problemstrecke',
  'bedarfe-combined-Ergaenzungsvorschlag Route': 'bedarfe-combined-Problempunkt',
  'bedarfe-combined-wichtige Ziele aus Beteiligung': 'bedarfe-combined-Ergaenzungsvorschlag Route',
  'quellen-und-ziele-places-circle-place-circle': 'poi_park',
  'quellen-und-ziele-places-circle-place-names': 'quellen-und-ziele-places-circle-place-circle',
  'quellen-und-ziele-poi-poiShopping-heatmap': 'quellen-und-ziele-places-circle-place-names',
  'quellen-und-ziele-poi-poiShopCategory': 'quellen-und-ziele-poi-poiShopping-heatmap',
  'quellen-und-ziele-poi-poiEducation-schoolsafety': 'quellen-und-ziele-poi-poiShopCategory',
  'quellen-und-ziele-poi-poiEducation-label': 'quellen-und-ziele-poi-poiEducation-schoolsafety',
  'quellen-und-ziele-public-transport-publictransport': 'quellen-und-ziele-poi-poiEducation-label',
  'einleitung-places-circle-place-circle': 'quellen-und-ziele-public-transport-publictransport',
  'einleitung-places-circle-place-names': 'einleitung-places-circle-place-circle',
}
