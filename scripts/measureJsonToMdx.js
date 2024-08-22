const fs = require('fs')
const path = require('path')

function transformDate(inputDate) {
  // Split the input date by '/'
  const [month, day, year] = inputDate.split('/').map(Number)

  // Convert two-digit year to four-digit year
  const fullYear = year < 50 ? 2000 + year : 1900 + year

  // Format the date to 'YYYY-MM-DD'
  const formattedDate = `${fullYear}-${String(month).padStart(2, '0')}-${String(day).padStart(2, '0')}`

  return formattedDate
}

// Path to the JSON file
const jsonFilePath = path.join(__dirname, '../data/measures/massnahmenliste.json')

// Read and parse the JSON file
const jsonData = JSON.parse(fs.readFileSync(jsonFilePath, 'utf8'))

// list of keys, where the value is a list
const arrayKeys = ['topics', 'admin_authority']
// list of keys, where the value is a date
const dateKeys = ['start', 'deadline']

// Directory to save the MDX files
const outputDir = path.join(__dirname, '../src/content/measures')
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir)
}

// Iterate over the array of objects
jsonData.forEach((item) => {
  const nudafaId = item['nudafa_id']
  if (!nudafaId) {
    console.error('Missing nudafa_id for item:', item)
    return
  }

  // Create the frontmatter string
  const frontmatter = Object.entries(item)
    // Exclude the 'description' key as it is markdwon content
    .filter(([key]) => !(key === 'description'))
    .map(([key, value]) => {
      // For list fields, convert the string to a list
      if (arrayKeys.includes(key)) {
        // Split the string by the pipe character to create a list
        value = value ? value.split('|').map((i) => i.trim()) : '[]'
      }
      if (value && dateKeys.includes(key)) {
        // transform date
        value = transformDate(value)
      }
      return `${key}: ${JSON.stringify(value)}`
    })
    .join('\n')

  // Create the MDX content
  const mdxContent = `---
${frontmatter}
---
${item['description']}
`

  // Write the MDX file
  const mdxFilePath = path.join(outputDir, `${nudafaId.toLowerCase().replace('_', '-')}.mdx`)
  fs.writeFileSync(mdxFilePath, mdxContent, 'utf8')
  console.log(`Created ${mdxFilePath}`)
})
