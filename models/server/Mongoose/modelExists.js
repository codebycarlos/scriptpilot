import { ArgumentValidator, mongoose } from './_dependencies'
export function modelExists(modelName) {
  ArgumentValidator.check([...arguments])

  return modelName in mongoose.models
}
