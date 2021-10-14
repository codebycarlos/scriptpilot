import { API, Try } from "./_dependencies"

export async function invokeScriptAsync({ Data }, { Input } = {}) {
	if (!Input || Object.keys(Input).length === 0)
		Input = { ...Data?.script?.Configuration, Qualifier: Data?.script?.Configuration?.Version }

	const { ScriptsAPI } = await API.loadScriptsAPIAsync()

	const [output, error] = await Try(() => ScriptsAPI.invokeScriptAsync(Input))

	if (error) throw error

	return output
}
