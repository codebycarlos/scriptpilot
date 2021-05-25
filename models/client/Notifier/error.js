import { SnackbarHandler } from "./_dependencies"
export function error({ response }, errorMessage = "Request failed.", persist = false) {
	if (!response || (!response.statusText && !errorMessage)) return

	return SnackbarHandler.enqueueSnackbar(
		response.statusText
			? `Error: ${response.statusText}`
			: `Error: ${errorMessage}`,
		{
			variant: "error",
            persist
		},
	)
}
