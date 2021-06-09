export function logic(imports, props, styleDefault) {
  const { useNotifications } = imports
  const { AlertDialog } = useNotifications()

  props.dialog = AlertDialog.dialog
  props.open = Boolean('contentText' in props.dialog && 'actions' in props.dialog)
  props.handleClose = () => {
    AlertDialog.closeDialog()
  }

  return props
}
