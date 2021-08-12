import { API, Try } from "./_dependencies"

export async function deleteScriptAsync({ Data }, { Input } = {}) {
	if (!Input || Object.keys(Input).length === 0)
		Input = { ...Data?.script?.Configuration, Qualifier: Data?.script?.Configuration?.Version }

	const { ScriptsAPI } = await API.loadScriptsAPIAsync()

	const [output, error] = await Try(() => ScriptsAPI.deleteScriptAsync(Input))

	if (error) throw error
}
