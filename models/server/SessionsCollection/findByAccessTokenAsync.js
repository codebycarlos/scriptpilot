import { ArgumentValidator, MongoDBCollection, Try } from "./_dependencies"
export async function findByAccessTokenAsync(model, targetAccessToken) {
	ArgumentValidator.check([...arguments])

	const [output, errorWithConnection] = await Try(() =>
		MongoDBCollection.establishConnectionAsync(),
	)
	if (errorWithConnection) throw Error(`Unable to establish connection.`)

	const [document, errorWithDocument] = await Try(() =>
		model
			.findOne({
				accessToken: targetAccessToken,
			})
			.exec(),
	)
	if (errorWithDocument)
		throw Error(`Unable to search for document with target value: ${targetAccessToken}.`)

	MongoDBCollection.disconnect()

	return document
}
