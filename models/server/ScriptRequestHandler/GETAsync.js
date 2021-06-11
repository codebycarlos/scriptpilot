import { API, JSend } from "./_dependencies"
export async function GETAsync(req, res) {
	const { ScriptsAPI } = await API.loadScriptsAPIAsync()

	const { script, error, message } = await ScriptsAPI.deleteScriptAsync(req.query)

	if (error) {
		return JSend(res).error({ message })
	}

	return JSend(res).success({ data: { script } })
}
