export function withSnackbarProgress({
	requestFunction,
	Snackbar,
	messages = { initial: "Processing request.", success: "Done.", error: "Request failed." },
}) {
	if (!requestFunction) throw Error("No request function provided.")
	if (!Snackbar) throw Error("No snackbar provided.")
	return async () => {
		if (messages.initial) {
			Snackbar.initial(messages.initial)
		}

		try {
			const response = await requestFunction()

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
