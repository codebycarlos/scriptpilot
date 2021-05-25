import { SnackbarHandler } from "./_dependencies"
export function initial(initialMessage,  persist = false) {
    if (!initialMessage) return
    return SnackbarHandler.enqueueSnackbar(initialMessage, { persist })
}