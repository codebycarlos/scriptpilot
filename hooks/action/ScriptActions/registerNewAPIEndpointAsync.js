import { API, Try } from "./_dependencies"

export async function registerNewAPIEndpointAsync({ Data, setState }, { Input } = {}) {
	if (!Input || Object.keys(Input).length === 0)
		Input = { ...Data?.script?.Configuration, Qualifier: Data?.script?.Configuration?.Version }

	const { ScriptsAPI } = await API.loadScriptsAPIAsync()
	console.log(1, Input)
	const [, error] = await Try(() => ScriptsAPI.registerNewAPIEndpointAsync(Input))

	if (error) {
		setState({ ...Data, error: error.message ?? "Unable to load script." })
		throw error
	}
}