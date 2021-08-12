import { API, APIKeyPair, JSend, Try } from "./_dependencies"
export async function POSTAsync(req, res) {
	const { ScriptsAPI } = await API.loadScriptsAPIAsync()

	if (req.query?.auth_type !== "apikey" || !req.query?.apikey)
		return JSend(res).error({ message: "Unauthorised access." }, 401)

	const [accessGranted] = await Try(() =>
		APIKeyPair.confirmKeyMatchAsync({ ARN, key: req.query.apikey }),
	)

	if (accessGranted !== true) return JSend(res).error({ message: "Unauthorised access." }, 401)

	const [response, error] = await Try(() =>
		ScriptsAPI.invokeScriptAsync({ ...req.query, ...req?.body?.data }),
	)

	if (error) return JSend(res).error({ message: error?.message })

	return JSend(res).success({ data: { response } })
}
