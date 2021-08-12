import { ArgumentValidator, MongoDBCollection, Try } from "./_dependencies"
export async function upsertNewAsync(
	model,
	{
		access_token,
		refresh_token,
		api_domain,
		token_type,
		expires_in,
		expiry_time,
		type,
		encrypted,
		encrypted_token,
	},
) {
	ArgumentValidator.check([...arguments])

	const [output, errorWithConnection] = await Try(() =>
		MongoDBCollection.establishConnectionAsync(),
	)
	if (errorWithConnection) throw Error(`Unable to establish connection.`)

	await model
		.findOneAndUpdate(
			{
				type,
			},
			{
				access_token,
				refresh_token,
				api_domain,
				token_type,
				expires_in,
				expiry_time,
				encrypted,
				encrypted_token,
			},
			{
				new: true,
				upsert: true,
				overwrite: true,
				runValidators: true,
			},
		)
		.exec()
}
