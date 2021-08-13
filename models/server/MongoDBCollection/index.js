import { getOrCreateModel } from "./getOrCreateModel"
import { assembleCollection } from "./assembleCollection"
import { establishConnectionAsync } from "./establishConnectionAsync"
import { MongoDB } from "./_dependencies"

export const MongoDBCollection = {
	getOrCreateModel,
	assembleCollection,
	establishConnectionAsync,
	disconnect: MongoDB.disconnect,
}
