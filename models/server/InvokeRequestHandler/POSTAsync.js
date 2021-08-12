import { API, JSend, Try } from "./_dependencies"
export async function POSTAsync(req, res) {
	const { ScriptsAPI } = await API.loadScriptsAPIAsync()

	const [response, error] = await Try(() =>
		ScriptsAPI.invokeScriptAsync({ ...req.query, ...req?.body?.data }),
	)

	if (error) return JSend(res).error({ message: error?.message })

	return JSend(res).success({ data: { response } })
}
