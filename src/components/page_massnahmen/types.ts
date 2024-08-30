import { getCollection } from 'astro:content'

const measures = await getCollection('measures')
const subTopics = await getCollection('subprojectstopics')

export type SubTopics = typeof subTopics
type Measures = typeof measures
export type Measure = Measures[number]
