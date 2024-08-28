// Maßnahhme: Kommune/Region
export const measureTownOptions: { label: string; value: string }[] = [
  { label: 'Gemeinde Eichwalde', value: 'eichwalde' },
  { label: 'Gemeinde Schulzendorf', value: 'schulzendorf' },
  { label: 'Gemeinde Zeuthen', value: 'zeuthen' },
  { label: 'Stadt Wildau', value: 'wildau' },
]

// Maßnahme: Baulastträger
export const measureAdminAuthorityOptions: { label: string; value: string }[] = [
  ...measureTownOptions,
  { label: 'Gemeinde Schönefeld', value: 'schoenefeld' },
  { label: 'Stadt Königs-Wusterhausen', value: 'kw' },
  { label: 'Landkreis Dahme-Spreewald', value: 'landkreis-dahme-spreewald' },
  { label: 'Land Brandenburg', value: 'land-brandenburg' },
  { label: 'Land Berlin', value: 'land-berlin' },
  { label: 'unklar', value: 'unklar' },
]

// Labelfarben für Maßnahme Baulastträger&Kommunen
export const measureLabelColorsClasses: Record<string, string> = {
  eichwalde: 'bg-[#AED7A0]',
  schulzendorf: 'bg-[#F9A8D4]',
  zeuthen: 'bg-[#95E8D8]',
  wildau: 'bg-[#BAE6FD]',
  schoenefeld: 'bg-[#FFD1B7]',
  kw: 'bg-[#DDEBA7]',
  // default-Farbe
  'landkreis-dahme-spreewald': 'bg-[#FFFBEB]',
  'land-brandenburg': 'bg-[#FFFBEB]',
  'land-berlin': 'bg-[#FFFBEB]',
  unklar: 'bg-[#FFFBEB]',
}
