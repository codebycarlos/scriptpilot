import { ClientSessionHandler } from "./_dependencies"
import { getVersionsAsync } from "./getVersionsAsync"


export async function loadVersionsAPIAsync(context) {
	const session = context ? await ClientSessionHandler.getSessionAsync(context) : null

	return {
		VersionsAPI: {
			getVersionsAsync: (...args) => getVersionsAsync(session, ...args),
		},
	}
}
