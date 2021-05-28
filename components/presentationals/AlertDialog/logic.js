export function logic(imports, props, styleDefault) {
	const { useAlertDialogContext } = imports
	const { dialog, closeDialog } = useAlertDialogContext()
	props.dialog = dialog
	props.open = ("contentText" in props.dialog && "actions" in props.dialog) ? true : false
	props.handleClose = () => {
		closeDialog()
	}
	return props
}
