export function error(snackbarContext, { response }, errorMessage = "Request failed.", persist = false) {
	if (!snackbarContext || !response || (!response.statusText && !errorMessage)) return
	return snackbarContext.enqueueSnackbar(
		response.statusText
			? `Error: ${response.statusText}`
			: `Error: ${errorMessage}`,
		{
			variant: "error",
            persist
		},
	)
}
