import { API } from "./_dependencies"

export function refreshScripts(requestWithSnackbar, [data, setData]) {
	return async () => {
		let scripts
		try {
			console.log("refreshing")
			const { ScriptsAPI } = await API.loadScriptsAPIAsync()
			scripts = await ScriptsAPI.getScriptsAsync()
			console.log("scripts", scripts)
			setData({ scripts, error: null })
		} catch (e) {
			setData({ scripts: null, error: e.message || "Unable to refresh scripts." })
		}
	}
}
