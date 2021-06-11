import { ArgumentValidator, MongoDBCollection } from './_dependencies'
export async function findByUserIdAsync(model, targetUserId) {
  ArgumentValidator.check([...arguments])
  let document

  await MongoDBCollection.establishConnectionAsync()

  try {
    document = await model.
      findOne({
        userId: targetUserId
      }).
      exec()
  } catch (e) {
    throw Error(`Unable to search for document with target value: ${targetUserId}. ${e}`)
  }

  return document
}
