export function logic(imports, props, styleDefault) {
	const { useScriptContext, useNotifications, useWithSnackbar, useInvokeOverlayContext } = imports
	const {
		Actions,
		Data: { script },
	} = useScriptContext()

	const { AlertDialog } = useNotifications()
	const { DataRef: InvokeOverlayDataRef, Actions: InvokeOverlayActions } =
		useInvokeOverlayContext()

	props.script = script

	const invokeRequest = useWithSnackbar(
		async ({ Input }) => {
			await Actions.invokeScriptWithOverlayAsync({
				Input: { ...InvokeOverlayDataRef?.current?.script, ...Input },
				InvokeOverlayActions,
			})
		},
		{ messages: { initial: "Invoking script." } },
	)

	props.handleInvoke = async (Qualifier) => {
		props.onClose()
		InvokeOverlayActions.openNew({
			script: { FunctionName: script?.Configuration?.FunctionName, Qualifier },
			invokeCallback: invokeRequest,
		})
	}

	const deleteVersionAndRefresh = useWithSnackbar(
		async (Qualifier) => {
			props.onClose()
			await scriptActions.deleteScriptAsync({
				Input: { FunctionName: script?.Configuration?.FunctionName, Qualifier },
			})
			await versionActions.refreshVersionsAsync({
				Input: {
					FunctionName: script?.Configuration?.FunctionName,
				},
			})
		},
		{ messages: { initial: "Deleting script version." } },
	)

	props.handleDelete = async (Qualifier) => {
		const title = `Delete script version ${Qualifier}?`
		const contentText = "Deleting a script version permanently removes the script's code."
		const actions = [
			{ label: "Cancel", onClick: () => AlertDialog.closeDialog() },
			{
				label: "Delete",
				onClick: async () => {
					AlertDialog.closeDialog()
					await deleteVersionAndRefresh(Qualifier)
				},
			},
		]
		AlertDialog.setDialog({ title, contentText, actions })
	}

	return props
}
