export function logic(imports, props, styleDefault) {
	const { API, consola, useAlertDialogContext, useSnackbarContext, useState } = imports
	const { setDialog, closeDialog } = useAlertDialogContext()
	const snackbarContext = useSnackbarContext()
	const [actionRequested, setActionRequested] = useState(false)

	async function deleteScript(scriptName) {
		if (actionRequested) return
		setActionRequested(true)
		props.onClose()
		API.Snackbar(snackbarContext).initial("Deleting script.")
		try {
			const scriptsAPI = await API.Scripts()
			await scriptsAPI.deleteScript({ name: scriptName })
			API.Snackbar(snackbarContext).closeSnackbars()
			API.Snackbar(snackbarContext).success("Done. Refreshing scripts.")
		} catch (e) {
			API.Snackbar(snackbarContext).closeSnackbars()
			API.Snackbar(snackbarContext).error(e)
		} finally {
			setActionRequested(false)
		}
		props.refresh()
	}

	props.handleDelete = async (scriptName) => {
		const title = `Delete script ${scriptName}?`
		const contentText = "Deleting a script permanently removes the script's code."
		const actions = [
			{ label: "Cancel", onClick: () => closeDialog() },
			{
				label: "Delete",
				onClick: () => {
					deleteScript(scriptName)
					closeDialog()
				},
			},
		]
		setDialog({ title, contentText, actions })
	}

	return props
}
