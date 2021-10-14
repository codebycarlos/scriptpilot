import { API, JSend, Try } from "./_dependencies"
export async function GETAsync(req, res) {
	const { ScriptsAPI } = await API.loadScriptsAPIAsync()

	const [scripts, error] = await Try(() => ScriptsAPI.getScriptsAsync())

	if (error) return JSend(res).error({ message: error?.message })

	return JSend(res).success({ data: { scripts } })
}
