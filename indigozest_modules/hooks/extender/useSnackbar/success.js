export function success(
  snackbarContext,
  { message = 'Request successful.', persist = false, closePrevious = true } = {}
) {
  if (!snackbarContext || !message) {
    return
  }

  if (closePrevious) {
    snackbarContext.closeSnackbar()
  }

  return snackbarContext.enqueueSnackbar(message, {
    variant: 'success',
    persist
  })
}
