import { API, Try } from "./_dependencies"

export async function refreshScriptAsync({ Data, setState }, { Input } = {}) {
	if (!Input || Object.keys(Input).length === 0)
		Input = { ...Data?.script?.Configuration, Qualifier: Data?.script?.Configuration?.Version }

	const { ScriptsAPI } = await API.loadScriptsAPIAsync()

	const [script, error] = await Try(() => ScriptsAPI.getScriptAsync(Input))

	if (error) {
		setState({ ...Data, error: error.message ?? "Unable to load script." })
		throw error
	}

	setState({ script, error })
}
