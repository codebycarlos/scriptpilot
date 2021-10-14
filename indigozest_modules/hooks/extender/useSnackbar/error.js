export function error(snackbarContext, message, { persist = false, closePrevious = true } = {}) {
	if (!snackbarContext || !message) return

	if (closePrevious) snackbarContext.closeSnackbar()

	return snackbarContext.enqueueSnackbar(message, {
		variant: "error",
		persist,
	})
}
