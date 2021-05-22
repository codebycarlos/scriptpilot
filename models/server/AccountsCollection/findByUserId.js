import { ArgumentValidator, MongoDBCollection } from "./_dependencies"
export async function findByUserId(model, targetUserId) {
	ArgumentValidator.check([...arguments])
	let document

	await MongoDBCollection.establishConnection()

	try {
		document = await model
			.findOne({
				userId: targetUserId,
			})
			.exec()
	} catch (e) {
		throw Error(`Unable to search for document with target value: ${targetUserId}. ${e}`)
	}

	return document
}
