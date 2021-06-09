import { ScriptsAPI } from "./_dependencies"

export const refreshScripts = (requestWithSnackbar, [data, setData]) => {

	return requestWithSnackbar(
		async () => {
			let scripts

			try {
				scripts = await ScriptsAPI.getScripts()
				setData({ scripts, error: null })
			} catch (e) {
				setData({ scripts: null, error: e.message || "Unable to refresh scripts." })
			}
		},
		{ initial: "Refreshing scripts." },
	)()
}
