import { MongoDB, Settings } from './_dependencies'
export async function establishConnection() {
  const mongoDBSettings = await Settings.MongoDB()

  try {
    return await MongoDB.connectIfNotConnected(mongoDBSettings.connectUrl)
  } catch (e) {
    throw Error(`Unable to connect to database. ${e}`)
  }
}
