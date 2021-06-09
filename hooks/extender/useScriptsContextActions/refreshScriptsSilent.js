import { ScriptsAPI } from "./_dependencies"

export const refreshScriptsSilent = (request, [data, setData]) => {
	if (!setData) {
		throw Error("No data setter provided.")
	}

	return request(async () => {
		let scripts

		try {
			scripts = await ScriptsAPI.getScripts()
			setData({ scripts, error: null })
		} catch (e) {
			setData({ scripts: null, error: e.message || "Unable to refresh scripts." })
		}
	})
}
