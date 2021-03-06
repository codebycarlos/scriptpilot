import { ArgumentValidator, MongoDBCollection, Try } from "./_dependencies"
export async function findOneAsync(model, { FunctionName, Qualifier }) {
	ArgumentValidator.check([...arguments])

	const [, errorWithConnection] = await Try(() => MongoDBCollection.establishConnectionAsync())
	if (errorWithConnection) throw Error(`Unable to establish connection.`)

	const result = await model
		.findOne({
			Active: true,
			FunctionName,
			Qualifier,
		})
		.exec()

	return result
}
