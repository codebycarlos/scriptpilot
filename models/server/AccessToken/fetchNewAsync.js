import { ArgumentValidator, Settings, Try } from "./_dependencies"
import { fetchNewHTTPCallAsync } from "./helper/fetchNewHTTPCallAsync"
export async function fetchNewAsync(refreshToken) {
	ArgumentValidator.check([...arguments, refreshToken.refresh_token])

	const [zohoSettings, errorWithZohoSettings] = await Try(() => Settings.ZohoAsync())
	if (errorWithZohoSettings) throw Error(`Unable to load Zoho settings.`)

	const [HTTPCallResponse, errorWithHTTPCallResponse] = await Try(() =>
		fetchNewHTTPCallAsync({
			refreshTokenCode: refreshToken.refresh_token,
			accountsUrl: zohoSettings.selfClientAccountsUrl,
			clientId: zohoSettings.selfClientId,
			clientSecret: zohoSettings.selfClientSecret,
		}),
	)
	if (errorWithHTTPCallResponse) throw Error(`Unable to make HTTP call.`)

	return HTTPCallResponse.data
}
