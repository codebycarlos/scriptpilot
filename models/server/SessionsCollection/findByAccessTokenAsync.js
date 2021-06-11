import { ArgumentValidator, MongoDBCollection } from './_dependencies'
export async function findByAccessTokenAsync(model, targetAccessToken) {
  ArgumentValidator.check([...arguments])
  let document

  await MongoDBCollection.establishConnectionAsync()

  try {
    document = await model.
      findOne({
        accessToken: targetAccessToken
      }).
      exec()
  } catch (e) {
    throw Error(`Unable to search for document with target value: ${targetAccessToken}. ${e}`)
  }

  return document
}
