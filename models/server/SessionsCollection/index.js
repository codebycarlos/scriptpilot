import { MongoDBCollection } from "./_dependencies"
import { schemaDefinition } from "./schemaDefinition"

export const SessionsCollection = MongoDBCollection.assembleCollection({
	name: "session",
	schemaDefinition,
})
