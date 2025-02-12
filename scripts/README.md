# About

## Import of measures - meta data (geometry import see below)

We can import the measures from a table. Markdown and images and all future changes will be done in our Keystatic CMS.
With Google Sheets you have less control over the export. If something is weird download as xlsx and export with Excel or Numbers.

All temporary rows and columns in the table have a prefix `_` and are deleted when converting to JSON.

### General process

0. Before the export: check wether data schema in the table has changed and update schemas `src/content/config.ts` and `keystatic.config.tsx`.
1. (Excel-Tabelle)[https://docs.google.com/spreadsheets/d/1d0NUk3eB3q0_nC_USl2oLTl2VT-3OGiE/edit?gid=1289829229#gid=1289829229] - Export as CSV with `;` as separator and UTF-8 encoding.
2. rename `massnahmenliste.csv` and save at `/data/measures`
3. run `npm run transformMeasuresCsvToMdx`

### What it does

1. The script generates one mdx file per row in `src/content/measures` from the CSV file.
