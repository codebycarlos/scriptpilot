export function initial(snackbarContext, initialMessage,  persist = true) {
    if (!snackbarContext || !initialMessage) return
    return snackbarContext.enqueueSnackbar(initialMessage, { persist })
}