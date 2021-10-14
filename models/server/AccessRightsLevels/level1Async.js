import { SessionHandler, Try } from "./_dependencies"
export async function level1Async(session) {
	const [valid, errorWithValid] = await Try(() => SessionHandler.isValidAsync(session))

	if (errorWithValid) throw Error("Unable to determine session is valid.")

	return valid
}
