import { getOrCreateModel } from './getOrCreateModel'
import { assembleCollection } from './assembleCollection'
import { establishConnectionAsync } from './establishConnectionAsync'

export const MongoDBCollection = {
  getOrCreateModel,
  assembleCollection,
  establishConnectionAsync
}
