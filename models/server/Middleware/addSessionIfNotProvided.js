import { SessionHandler } from "./_dependencies"
export async function addSessionIfNotProvided(req, res) {
	if (req.headers.authorization) return { req, res }

	const session = await SessionHandler.getSession({ req })
	if (session) req.headers.authorization = JSON.stringify(session)

	return { req, res }
}
