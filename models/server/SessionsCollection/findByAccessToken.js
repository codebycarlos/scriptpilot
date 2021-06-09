import { ArgumentValidator, MongoDBCollection } from './_dependencies'
export async function findByAccessToken(model, targetAccessToken) {
  ArgumentValidator.check([...arguments])
  let document

  await MongoDBCollection.establishConnection()

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
