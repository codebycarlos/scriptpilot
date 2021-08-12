import { MongoDB, Settings, Try } from "./_dependencies"
export async function establishConnectionAsync() {
	const mongoDBSettings = await Settings.MongoDBAsync()

	const [output, error] = await Try(() =>
		MongoDB.connectIfNotConnectedAsync(mongoDBSettings.connectUrl),
	)

	if (error) throw Error(`Unable to connect to database.`)
}
