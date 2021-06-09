import { ArgumentValidator, mongoose } from './_dependencies'
export function createSchema(schemaDefinition) {
  ArgumentValidator.check([...arguments])
  try {
    return new mongoose.Schema(schemaDefinition)
  } catch (e) {
    throw Error(`Unable to create schema with schema definition: ${schemaDefinition}. ${e}. `)
  }
}
