import { Settings } from "./_dependencies"
import { SessionHandler } from "./Session"
import { logoutHTTPCall } from "./helper/logoutHTTPCall"
export async function logout() {
	let CSRFToken

	try {
		CSRFToken = await Session.fetchCsrfToken()
	} catch (e) {
		throw Error(`Unable to fetch CSRF token necessary for logout. ${e}`)
	}

	try {
		return await logoutHTTPCall({ host: await Settings.Core.host, CSRFToken })
	} catch (e) {
		throw Error(`Issues making call to terminate user Session. ${e}`)
	}
}
