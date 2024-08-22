const { readFileSync, writeFileSync } = require('fs')
const Papa = require('papaparse')

const [inputFile, outputFile] = process.argv.slice(2)

const csvData = readFileSync(inputFile, 'utf8')

const parsedData = Papa.parse(csvData, {
  header: true,
  delimiter: ';',
  skipEmptyLines: true,
  dynamicTyping: true,
})

const jsonData = parsedData.data
  .filter((row) => {
    // Filter out rows where the first item (nudafa_id) is prefixed with '_'
    return !row.nudafa_id.startsWith('_')
  })
  .map((row) => {
    const filteredRow = {}
    for (const key in row) {
      // Exclude columns that start with '_' or empty columns
      if (key && !key.startsWith('_')) {
        filteredRow[key] = row[key]
      }
    }
    return filteredRow
  })

console.log(`Successfully generated JOSN file with ${jsonData.length} rows.`)

writeFileSync(outputFile, JSON.stringify(jsonData, null, 2))
