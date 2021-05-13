import { ArgumentValidator, consola, Settings } from "./_dependencies"
import { fetchNewHTTPCall } from "./helper/fetchNewHTTPCall"
export async function fetchNew(refreshToken) {
	ArgumentValidator.check([...arguments, refreshToken.refresh_token])
	let HTTPCallResponse = undefined

	try {
		HTTPCallResponse = await fetchNewHTTPCall({
			refreshTokenCode,
			accountsUrl: await Settings.Zoho.selfClientAccountsUrl,
			clientId: await Settings.Zoho.clientId,
			clientSecret: await Settings.Zoho.clientSecret,
		})
	} catch (e) {
		throw Error(`Unable to make HTTP call. ${e}`)
	}

	if (HTTPCallResponse == null) throw Error(`HTTP call response is null.`)
	if (!("data" in HTTPCallResponse)) {
		consola.info("Response object: ", HTTPCallResponse)
		throw Error("No data received.")
	}

	if (!("access_token" in HTTPCallResponse.data)) {
		consola.info("Response object: ", HTTPCallResponse)
		consola.info("Data portion: ", HTTPCallResponse.data)
		throw Error(`No access token received. Response: ${JSON.stringify(HTTPCallResponse.data)}`)
	}

	return HTTPCallResponse.data
}
