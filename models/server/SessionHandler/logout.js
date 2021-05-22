import { ClientSessionHandler } from "./_dependencies"
import { logoutHTTPCall } from "./helper/logoutHTTPCall"
export async function logout({req}) {
	ArgumentValidator.check([req])
	let CSRFToken

	try {
		CSRFToken = await ClientSessionHandler.getCsrfToken({req})
	} catch (e) {
		throw Error(`Unable to fetch CSRF token necessary for logout. ${e}`)
	}

	try {
		return await logoutHTTPCall({ CSRFToken })
	} catch (e) {
		throw Error(`Issues making call to terminate user session. ${e}`)
	}
}
