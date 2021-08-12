import { API, Try } from "./_dependencies"

export async function editScriptAsync({}, { Input } = {}) {
	const { ScriptsAPI } = await API.loadScriptsAPIAsync()

	const [script, error] = await Try(() => ScriptsAPI.editScriptAsync(Input))

	if (error) throw error

	return script
}
