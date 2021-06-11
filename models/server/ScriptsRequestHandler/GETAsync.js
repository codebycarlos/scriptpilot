import { API, JSend } from "./_dependencies"
export async function GETAsync(req, res) {
	const { ScriptsAPI } = await API.loadScriptsAPIAsync()

	const { scripts, error, message } = await ScriptsAPI.getScriptsAsync()

	if (error) {
		return JSend(res).error({ message })
	}

	return JSend(res).success({ data: { scripts } })
}
