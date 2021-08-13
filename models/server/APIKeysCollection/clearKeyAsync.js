import { ArgumentValidator, MongoDBCollection, Try } from "./_dependencies"

export async function clearKeyAsync(model, { FunctionName, Qualifier }) {
	ArgumentValidator.check([...arguments])

	const [, errorWithConnection] = await Try(() => MongoDBCollection.establishConnectionAsync())
	if (errorWithConnection) throw Error(`Unable to establish connection.`)

	await model
		.findOneAndUpdate(
			{
				Active: true,
				FunctionName,
				Qualifier,
			},
			{
				Active: false,
			},
			{
				upsert: false,
				runValidators: true,
			},
		)
		.exec()

	MongoDBCollection.disconnect()
}
