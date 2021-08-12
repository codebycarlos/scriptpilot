import { getSessionRequestAsync, Try } from "./_dependencies"
export async function getSessionAsync(context) {
	const [session, errorWithSession] = await Try(() => getSessionRequestAsync(context))

	if (errorWithSession) return null

	return session
}
