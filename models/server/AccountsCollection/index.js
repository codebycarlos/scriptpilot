import { MongoDBCollection } from './_dependencies'
import { schemaDefinition } from './schemaDefinition'
import { findByUserId } from './findByUserId'

export const AccountsCollection = MongoDBCollection.assembleCollection({
  name: 'account',
  schemaDefinition,
  methodsActingOnModel: [findByUserId]
})
