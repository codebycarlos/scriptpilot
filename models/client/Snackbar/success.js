export function success(snackbarContext, successMessage = "Request successful.", persist = false) {
	if (!snackbarContext || !successMessage) return
	return snackbarContext.enqueueSnackbar(successMessage, {
		variant: "success",
		persist,
	})
}
