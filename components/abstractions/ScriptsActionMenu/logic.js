export function logic(imports, props, styleDefault) {
	const { useNotifications, useWithSnackbar, useScriptsContext, useInvokeOverlayContext } =
		imports
	const { Actions: ScriptsActions } = useScriptsContext()
	const { AlertDialog } = useNotifications()
	const { DataRef: InvokeOverlayDataRef, Actions: InvokeOverlayActions } =
		useInvokeOverlayContext()

	const invokeRequest = useWithSnackbar(
		async ({ Input }) => {
			await ScriptsActions.invokeScriptWithOverlayAsync({
				Input: { ...InvokeOverlayDataRef?.current?.script, ...Input },
				InvokeOverlayActions,
			})
		},
		{ messages: { initial: "Invoking script." } },
	)

	props.handleInvoke = async (FunctionName) => {
		props.onClose()
		InvokeOverlayActions.openNew({
			script: { FunctionName },
			invokeCallback: invokeRequest,
		})
	}

	const deleteScriptsAndRefresh = useWithSnackbar(
		async (FunctionName) => {
			props.onClose()
			await ScriptsActions.deleteScriptAsync({ Input: { FunctionName } })
			await ScriptsActions.refreshScriptsAsync()
		},
		{ messages: { initial: "Deleting script." } },
	)

	props.handleDelete = async (FunctionName) => {
		const title = `Delete script ${FunctionName}?`
		const contentText =
			"Deleting a script permanently removes the script's code (including all versions)."
		const actions = [
			{ label: "Cancel", onClick: () => AlertDialog.closeDialog() },
			{
				label: "Delete",
				onClick: async () => {
					AlertDialog.closeDialog()
					await deleteScriptsAndRefresh(FunctionName)
				},
			},
		]
		AlertDialog.setDialog({ title, contentText, actions })
	}

	return props
}
