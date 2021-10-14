import { API, JSend, Try } from "./_dependencies"
export async function POSTAsync(req, res) {
	const { ScriptsAPI } = await API.loadScriptsAPIAsync()

	const [, error] = await Try(() =>
		ScriptsAPI.registerNewAPIEndpointAsync({ ...req.query, ...req?.body?.data }),
	)
	if (error) return JSend(res).error({ message: error?.message })

	return JSend(res).success()
}
