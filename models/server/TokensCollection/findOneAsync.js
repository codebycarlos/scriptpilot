import { ArgumentValidator, MongoDBCollection, Try } from "./_dependencies"
export async function findOneAsync(model, { type }) {
	ArgumentValidator.check([...arguments])

	const [, errorWithConnection] = await Try(() => MongoDBCollection.establishConnectionAsync())
	if (errorWithConnection) throw Error(`Unable to establish connection.`)

	return model.findOne({ type }, null, { lean: true }).exec()
}
