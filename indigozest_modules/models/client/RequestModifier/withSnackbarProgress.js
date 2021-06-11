export function withSnackbarProgress({
	requestFunctionAsync,
	Snackbar,
	messages = { initial: "Processing request.", success: "Done.", error: "Request failed." },
}) {
	if (!requestFunctionAsync) throw Error("No request function provided.")
	if (!Snackbar) throw Error("No snackbar provided.")
	return async () => {
		if (messages.initial) {
			Snackbar.initial(messages.initial)
		}

		try {
			const response = await requestFunctionAsyncAsync()

			if (messages.success) {
				Snackbar.success(messages.success)
			}

			return response
		} catch (e) {
			if (e.message || messages.error) {
				Snackbar.error(e.message || messages.error)
			}
			throw e
		}
	}
}
