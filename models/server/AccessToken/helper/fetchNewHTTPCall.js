import { ArgumentValidator, CustomAxios } from "../_dependencies"
export async function fetchNewHTTPCall({ refreshTokenCode, accountsUrl, clientId, clientSecret }) {
	ArgumentValidator.check([...arguments, refreshTokenCode, clientId, clientSecret])
	const axios = await CustomAxios()

	try {
		return await axios.post(
			`${accountsUrl}` +
				`/oauth/v2/token?refresh_token=${refreshTokenCode}` +
				`&client_id=${clientId}` +
				`&client_secret=${clientSecret}` +
				`&grant_type=refresh_token`,
			null,
			{
				headers: {
					"Content-Type": "application/x-www-form-urlencoded",
				},
			},
		)
	} catch (e) {
		throw Error(`HTTP call failed. ${e}`)
	}
}
