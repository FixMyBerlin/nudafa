# About

## Initial import of measures

With Google Sheets you have less control over the export. If something is weird download as xlsx and export with Excel or Numbers.

All temporary rows and columns in the table have a prefix `_` and are deleted when converting to JSON.

## General process

0. Before the export: check for lists, dates (--> update `arrayKeys` and `dateKeys` in `scripts/measureJsonToMdx.js`), new enums (update schemas `src/content/config.ts` and `keystatic.config.tsx`)
1. (Excel-Tabelle)[https://docs.google.com/spreadsheets/d/1d0NUk3eB3q0_nC_USl2oLTl2VT-3OGiE/edit?gid=1289829229#gid=1289829229] - Export as CSV with `;` as separator and UTF-8 encoding.
2. rename `massnahmenliste.csv` and save at `/data/measures`
3. run `npm run transformMeasuresCsvToMdx`
