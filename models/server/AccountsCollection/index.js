import { MongoDBCollection } from "./_dependencies"
import { schemaDefinition } from "./schemaDefinition"
import { findByUserIdAsync } from "./findByUserIdAsync"

export const AccountsCollection = MongoDBCollection.assembleCollection({
	name: "account",
	schemaDefinition,
	methodsActingOnModel: [findByUserIdAsync],
})
