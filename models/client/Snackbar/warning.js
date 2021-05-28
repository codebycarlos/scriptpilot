export function warning(snackbarContext, warningMessage,  persist = false) {
    if (!snackbarContext || !warningMessage) return
    return snackbarContext.enqueueSnackbar(warningMessage, { 
        variant: "warning",
        persist,
    })
}