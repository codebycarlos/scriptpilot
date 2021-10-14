import { API, JSend, Try } from "./_dependencies"
export async function DELETEAsync(req, res) {
	const { ScriptsAPI } = await API.loadScriptsAPIAsync()

	const [output, error] = await Try(() => ScriptsAPI.deleteScriptAsync(req.query))

	if (error) return JSend(res).error({ message: error?.message })

	return JSend(res).success()
}
