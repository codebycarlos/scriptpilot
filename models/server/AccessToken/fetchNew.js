import { ArgumentValidator, Settings } from "./_dependencies"
import { fetchNewHTTPCall } from "./helper/fetchNewHTTPCall"
export async function fetchNew(refreshToken) {
	ArgumentValidator.check([...arguments, refreshToken.refresh_token])
	let HTTPCallResponse = undefined

	try {
		HTTPCallResponse = await fetchNewHTTPCall({
			refreshTokenCode: refreshToken.refresh_token,
			accountsUrl: (await Settings.Zoho()).selfClientAccountsUrl,
			clientId: (await Settings.Zoho()).selfClientId,
			clientSecret: (await Settings.Zoho()).selfClientSecret,
		})
	} catch (e) {
		throw Error(`Unable to make HTTP call. ${e}`)
	}

	try {
		return HTTPCallResponse.data
	}
	catch(e) {
		throw Error(`Invalid data received. ${e}`)
	}
}
