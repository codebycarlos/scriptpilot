import { MongoDBCollection } from './_dependencies'
import { schemaDefinition } from './schemaDefinition'
import { findByAccessTokenAsync } from './findByAccessTokenAsync'

export const SessionsCollection = MongoDBCollection.assembleCollection({
  name: 'session',
  schemaDefinition,
  methodsActingOnModel: [findByAccessTokenAsync]
})
