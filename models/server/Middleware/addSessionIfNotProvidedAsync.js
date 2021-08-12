import { SessionHandler } from "./_dependencies"
export async function addSessionIfNotProvidedAsync(req, res) {
	if (req.headers.authorization) return { req, res }

	const session = await SessionHandler.getSessionAsync({ req })

	if (session) req.headers.authorization = JSON.stringify(session)

	return { req, res }
}
