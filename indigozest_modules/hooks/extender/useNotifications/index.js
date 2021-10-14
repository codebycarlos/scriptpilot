import { useAlertDialog, useLog, useSnackbar } from './_dependencies'

export const useNotifications = () => {
  const { Snackbar } = useSnackbar()
  const { AlertDialog } = useAlertDialog()
  const { Log } = useLog()

  return {
    AlertDialog,
    Snackbar,
    Log
  }
}
