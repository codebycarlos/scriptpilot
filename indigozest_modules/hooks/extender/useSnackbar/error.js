export function error(
  snackbarContext,
  { error, message = 'Request failed.', persist = false, closePrevious = true } = {}
) {
  if (!snackbarContext || !error && !message) {
    return
  }

  if (closePrevious) {
    snackbarContext.closeSnackbar()
  }

  message =
		error && error.response && error.response.statusText
		  ? `Error: ${error.response.statusText}`
		  : `Error: ${message}`

  return snackbarContext.enqueueSnackbar(message, {
    variant: 'error',
    persist
  })
}
