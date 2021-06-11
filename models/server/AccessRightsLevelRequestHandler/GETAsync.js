import { API, JSend } from "./_dependencies"
export async function GETAsync(req, res) {
	const { AuthAPI } = await API.loadAuthAPIAsync(req.headers.authorization)

	const { accessRightsLevel, error, message } = await AuthAPI.getAccessRightsLevelAsync()

	if (error) {
		return JSend(res).error({ message })
	}

	return JSend(res).success({ data: { accessRightsLevel } })
}
