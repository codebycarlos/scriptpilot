import { useSnackbarContext } from './_dependencies'
import { initial } from './initial'
import { success } from './success'
import { warning } from './warning'
import { error } from './error'
import { closeSnackbars } from './closeSnackbars'

export const useSnackbar = () => {
  const { snackbarContext } = useSnackbarContext()

  return {
    Snackbar: {
      initial: (...args) => initial(snackbarContext, ...args),
      success: (...args) => success(snackbarContext, ...args),
      warning: (...args) => warning(snackbarContext, ...args),
      error: (...args) => error(snackbarContext, ...args),
      closeSnackbars: (...args) => closeSnackbars(snackbarContext, ...args)
    }
  }
}
