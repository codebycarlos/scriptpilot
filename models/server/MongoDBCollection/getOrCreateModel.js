import { ArgumentValidator, Mongoose } from "./_dependencies"

export function getOrCreateModel(modelName, schemaDefinition) {
	ArgumentValidator.check([modelName, schemaDefinition])

	return Mongoose.modelExists(modelName)
		? Mongoose.getModel(modelName)
		: Mongoose.createModel(modelName, Mongoose.createSchema(schemaDefinition))
}
