import { MongoDB, Settings } from "./_dependencies"
export async function establishConnection() {
	try {
		return await MongoDB.connectIfNotConnected((await Settings.MongoDB()).connectUrl)
	} catch (e) {
		throw Error(`Unable to connect to database. ${e}`)
	}
}
