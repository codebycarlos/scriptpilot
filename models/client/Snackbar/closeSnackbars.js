export function closeSnackbars(snackbarContext, key) {
	if(!snackbarContext) return
	snackbarContext.closeSnackbar(key)
}
