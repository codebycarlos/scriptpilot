import { ArgumentValidator, Settings } from "./_dependencies"
import { fetchNewHTTPCallAsync } from "./helper/fetchNewHTTPCallAsync"
export async function fetchNewAsync(refreshToken) {
	ArgumentValidator.check([...arguments, refreshToken.refresh_token])
	let HTTPCallResponse
	const zohoSettings = await Settings.ZohoAsync()

	try {
		HTTPCallResponse = await fetchNewHTTPCallAsync({
			refreshTokenCode: refreshToken.refresh_token,
			accountsUrl: zohoSettings.selfClientAccountsUrl,
			clientId: zohoSettings.selfClientId,
			clientSecret: zohoSettings.selfClientSecret,
		})
	} catch (e) {
		throw Error(`Unable to make HTTP call. ${e}`)
	}

	try {
		return HTTPCallResponse.data
	} catch (e) {
		throw Error(`Invalid data received. ${e}`)
	}
}
