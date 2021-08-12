import { MongoDBCollection } from "./_dependencies"
import { schemaDefinition } from "./schemaDefinition"
import { findOneAsync } from "./findOneAsync"
import { upsertNewAsync } from "./upsertNewAsync"
import { clearKeyAsync } from "./clearKeyAsync"
import { clearMultipleKeysAsync } from "./clearMultipleKeysAsync"

export const APIKeysCollection = MongoDBCollection.assembleCollection({
	name: "api_key",
	schemaDefinition,
	methodsActingOnModel: [findOneAsync, upsertNewAsync, clearKeyAsync, clearMultipleKeysAsync],
})
