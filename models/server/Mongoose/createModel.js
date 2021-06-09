import { ArgumentValidator, mongoose } from './_dependencies'
export function createModel(modelName, schema) {
  ArgumentValidator.check([...arguments])

  try {
    return mongoose.model(modelName, schema)
  } catch (e) {
    throw Error(`Unable to create model ${e}. `)
  }
}
