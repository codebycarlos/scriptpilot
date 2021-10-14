import { API, JSend, Try } from "./_dependencies"
export async function GETAsync(req, res) {
	const { ZohoAPI } = await API.loadZohoAPIAsync()

    const [accessTokenCode, error] = await Try(() => ZohoAPI.getAccessTokenCodeAsync(req.query))

	if (error) return JSend(res).error({ message: "Unable to generate token." })

	return JSend(res).success({ data: { token: accessTokenCode } })
}
