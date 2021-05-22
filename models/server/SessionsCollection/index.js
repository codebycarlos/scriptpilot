import { MongoDBCollection } from "./_dependencies"
import { schemaDefinition } from "./schemaDefinition"
import { findByAccessToken } from "./findByAccessToken"

export const SessionsCollection = MongoDBCollection.assembleCollection({
	name: "session",
	schemaDefinition,
	methodsActingOnModel: [findByAccessToken],
})
