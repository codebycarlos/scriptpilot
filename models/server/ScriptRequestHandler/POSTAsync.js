import { API, JSend, Try } from "./_dependencies"
export async function POSTAsync(req, res) {
	const { ScriptsAPI } = await API.loadScriptsAPIAsync()

	const [script, error] = await Try(() => ScriptsAPI.createScriptAsync(req?.body?.data))

	if (error) return JSend(res).error({ message: error?.message })

	return JSend(res).success({ data: { script } })
}
