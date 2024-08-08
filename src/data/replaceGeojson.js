const fs = require('node:fs')

const getMeasureDataAndWriteToFile = async () => {
  const getMeasures = async () => {
    const response = await fetch(
      'https://places.nudafa.de/api/v1/map/EbWoWmefCs9NZQTsKge1V/featurecollection',
    )
    const data = await response.json()
    return JSON.stringify(data)
  }

  const measureGeojson = await getMeasures()

  fs.writeFile('src/data/geojson/measures.json', measureGeojson, (err) => {
    if (err) {
      console.error(err)
    } else {
      console.log('file written successfully')
    }
  })
}

getMeasureDataAndWriteToFile()
