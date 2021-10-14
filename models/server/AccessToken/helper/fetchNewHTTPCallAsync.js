import { ArgumentValidator, CustomAxiosAsync, Try } from "../_dependencies"
export async function fetchNewHTTPCallAsync({
	refreshTokenCode,
	accountsUrl,
	clientId,
	clientSecret,
}) {
	ArgumentValidator.check([...arguments, refreshTokenCode, clientId, clientSecret])

	const axios = await CustomAxiosAsync()

	const [HTTPCallResponse, errorWithHTTPCallResponse] = await Try(() =>
		axios.post(
			`${accountsUrl}` +
				`/oauth/v2/token?refresh_token=${refreshTokenCode}` +
				`&client_id=${clientId}` +
				`&client_secret=${clientSecret}` +
				"&grant_type=refresh_token",
			null,
			{
				headers: {
					"Content-Type": "application/x-www-form-urlencoded",
				},
			},
		),
	)
	if (errorWithHTTPCallResponse) throw Error(`HTTP call failed.`)

	return HTTPCallResponse
}
