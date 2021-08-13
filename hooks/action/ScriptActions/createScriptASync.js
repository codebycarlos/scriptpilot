import { API, Try } from "./_dependencies"

export async function createScriptAsync({}, { Input } = {}) {
	const { ScriptsAPI } = await API.loadScriptsAPIAsync()

	const [script, error] = await Try(() => ScriptsAPI.createScriptAsync(Input))

	if (error) throw error

	return script
}

// test
