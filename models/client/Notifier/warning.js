import { SnackbarHandler } from "./_dependencies"
export function warning(warningMessage,  persist = false) {
    if (!warningMessage) return
    return SnackbarHandler.enqueueSnackbar(warningMessage, { 
        variant: "warning",
        persist,
    })
}