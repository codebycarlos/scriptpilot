import { MongoDB, Settings } from "./_dependencies"
export async function establishConnectionAsync() {
	const mongoDBSettings = await Settings.MongoDBAsync()

	try {
		return await MongoDB.connectIfNotConnectedAsync(mongoDBSettings.connectUrl)
	} catch (e) {
		throw Error(`Unable to connect to database. ${e}`)
	}
}
