import { API, Try } from "./_dependencies"

export async function refreshVersionsAsync({ Data, setState }, { Input }) {
	const { VersionsAPI } = await API.loadVersionsAPIAsync()

	const [versions, error] = await Try(() => VersionsAPI.getVersionsAsync(Input))

	if (error) {
		setState({ ...Data, error: error.message ?? "Unable to load script versions." })
		throw error
	}

	setState({ versions, error })
}
