import { MongoDBCollection } from "./_dependencies"
import { schemaDefinition } from "./schemaDefinition"
import { findOneAsync } from "./findOneAsync"
import { upsertNewAsync } from "./upsertNewAsync"

export const TokensCollection = MongoDBCollection.assembleCollection({
	name: "token",
	schemaDefinition,
	methodsActingOnModel: [findOneAsync, upsertNewAsync],
})
