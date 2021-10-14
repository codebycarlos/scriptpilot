import { API, Try } from "./_dependencies"

export async function publishVersionAsync({}, { Input } = {}) {
	const { ScriptsAPI } = await API.loadScriptsAPIAsync()

	const [script, error] = await Try(() => ScriptsAPI.publishVersionAsync(Input))

	if (error) throw error

	return script
}
