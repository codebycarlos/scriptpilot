import { API, JSend } from "./_dependencies"
export async function GETAsync(req, res) {
	const { ZohoAPI } = await API.loadZohoAPIAsync()

	const { accessTokenCode, error, message } = await ZohoAPI.getAccesstokenCodeAsync(req.query)

	if (error) {
		return JSend(res).error({ message })
	}

	return JSend(res).success({ data: { token: accessTokenCode } })
}
