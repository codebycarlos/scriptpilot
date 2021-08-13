import { ArgumentValidator, MongoDBCollection, Try } from "./_dependencies"

export async function clearMultipleKeysAsync(model, { FunctionName }) {
	ArgumentValidator.check([...arguments])

	const [, errorWithConnection] = await Try(() => MongoDBCollection.establishConnectionAsync())
	if (errorWithConnection) throw Error(`Unable to establish connection.`)

	await model
		.updateMany(
			{
				Active: true,
				FunctionName,
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
