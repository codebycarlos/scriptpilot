import { initial } from "./initial"
import { success } from "./success"
import { warning } from "./warning"
import { error } from "./error"
import { closeSnackbars } from "./closeSnackbars"

export const Snackbar = (snackBarContext) => {
    if(!snackBarContext) return
    return {
        initial: (...args) => initial(snackBarContext, ...args),
        success: (...args) => success(snackBarContext, ...args),
        warning: (...args) => warning(snackBarContext, ...args),
        error: (...args) => error(snackBarContext, ...args),
        closeSnackbars: (...args) => closeSnackbars(snackBarContext, ...args),
    }
}