import { ArgumentValidator, MongoDBCollection, Try } from "./_dependencies"
export async function upsertNewAsync(model, { FunctionName, Qualifier, key }) {
	ArgumentValidator.check([...arguments])

	const [output, errorWithConnection] = await Try(() =>
		MongoDBCollection.establishConnectionAsync(),
	)
	if (errorWithConnection) throw Error(`Unable to establish connection.`)

	await model
		.findOneAndUpdate(
			{
				Active: true,
				FunctionName,
				Qualifier,
			},
			{
				Active: true,
				FunctionName,
				Qualifier,
				key,
				method: "POST",
			},
			{
				new: true,
				upsert: true,
				overwrite: true,
				runValidators: true,
			},
		)
		.exec()

	MongoDBCollection.disconnect()
}
