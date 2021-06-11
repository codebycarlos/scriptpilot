import { API, Middleware, consola } from "./_dependencies"

export function refreshScriptsAsync({ requestState, scriptsState, Snackbar }) {
	try {
		return Middleware.withMiddleware(
			{
				ignoreDuplicateRequests: requestState,
				saveState: scriptsState,
				snackbar: {
					Snackbar,
					messages: {
						initial: "Refreshing scripts.",
						error: "Unable to refresh scripts.",
						success: "Done.",
					},
				},
			},
			async () => {
				const { ScriptsAPI } = await API.loadScriptsAPIAsync()

				return await ScriptsAPI.getScriptsAsync()
			},
		)
	} catch (e) {
		consola.error(e)

		return { error: e, message: e.message }
	}
}
