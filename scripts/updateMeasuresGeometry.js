const fs = require('node:fs')

const getMeasureDataAndWriteToFile = async () => {
  const getMeasures = async () => {
    const response = await fetch(
      'https://places.nudafa.de/api/v1/map/Gql8uDGIY4SLZJ8suUPzB/featurecollection',
    )
    const data = await response.json()
    return JSON.stringify(data)
  }

  const measureGeojson = await getMeasures()

  fs.writeFile('data/measures/geometry.json', measureGeojson, (err) => {
    if (err) {
      console.error(err)
    } else {
      console.log('file written successfully')
    }
  })
}

getMeasureDataAndWriteToFile()
