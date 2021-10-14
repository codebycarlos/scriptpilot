import { ArgumentValidator, mongoose, Try } from "./_dependencies"
export function createSchema(schemaDefinition) {
	ArgumentValidator.check([...arguments])

	const [schema, errorWithSchema] = Try(() => new mongoose.Schema(schemaDefinition))
	if (errorWithSchema)
		throw Error(`Unable to create schema with schema definition: ${schemaDefinition}. `)

	return schema
}
