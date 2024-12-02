import { getCollection, type InferEntrySchema } from 'astro:content'

const subTopics = await getCollection('subprojectstopics')
export type SubTopics = typeof subTopics
// export type SubTopics = DataEntryMap['subprojectstopics'] // This is something else
// export type SubTopicData = InferEntrySchema<'subprojectstopics'>

const measures = await getCollection('measures')
export type Measure = (typeof measures)[number]
// export type Measure = ContentEntryMap['measures'] // This is something else
export type MeasureData = InferEntrySchema<'measures'>
