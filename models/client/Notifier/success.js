import { SnackbarHandler } from "./_dependencies"
export function success(successMessage = "Request successful.", persist = false) {
	if (!successMessage) return

	return SnackbarHandler.enqueueSnackbar(successMessage, {
		variant: "success",
		persist,
	})
}
