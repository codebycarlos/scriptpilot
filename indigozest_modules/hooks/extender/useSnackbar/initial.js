export function initial(snackbarContext, message, { persist = true, closePrevious = true } = {}) {
	if (!snackbarContext || !message) return

	if (closePrevious) snackbarContext.closeSnackbar()

	return snackbarContext.enqueueSnackbar(message, { persist })
}
