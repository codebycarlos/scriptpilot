import { SessionsCollection, isPast, parseJSON, Try } from "./_dependencies"
export async function isValidAsync(session) {
	if (!session) return false

	const [sessionInDatabase, errorWithSessionInDatabase] = await Try(() =>
		SessionsCollection.findByAccessTokenAsync(session.accessToken),
	)
	if (errorWithSessionInDatabase) throw Error(`Unable to locate session in database.`)

	const sessionInDatabaseParsed = JSON.parse(JSON.stringify(sessionInDatabase))

	if (sessionInDatabaseParsed.userId !== session.user.id) return false

	return !isPast(parseJSON(sessionInDatabaseParsed.expires))
}
