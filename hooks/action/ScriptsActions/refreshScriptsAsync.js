import { API, Try } from "./_dependencies"

export async function refreshScriptsAsync({ Data, setState }) {
	const { ScriptsAPI } = await API.loadScriptsAPIAsync()

	const [scripts, error] = await Try(() => ScriptsAPI.getScriptsAsync())

	if (error) {
        setState({ ...Data, error: error.message ?? "Unable to load scripts." })
		throw error
	}

	setState({ scripts, error })
}
