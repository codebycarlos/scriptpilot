import { ArgumentValidator, CustomAxiosAsync, AccessToken, Try } from "../_dependencies"
export async function fetchUserHTTPCallAsync({ apiDomain, userId }) {
	ArgumentValidator.check([...arguments, apiDomain, userId])

	const [accessTokenCode, errorWithAccessTokenCode] = await Try(() =>
		AccessToken.getAccessCodeAsync(),
	)

	if (errorWithAccessTokenCode) throw Error(`Unable to authorize request.`)

	const axios = await CustomAxiosAsync()
	const [response, errorWithHTTPCall] = await Try(() =>
		axios.get(`${apiDomain}/crm/v2/users/${userId}`, {
			headers: {
				"Content-Type": "application/x-www-form-urlencoded",
				Authorization: `Zoho-oauthtoken ${accessTokenCode}`,
			},
		}),
	)
	if (errorWithHTTPCall) throw Error(`HTTP call failed.`)

	return response
}
