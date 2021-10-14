export function logic(imports, props, styleDefault) {
	const {
		useScriptContext,
		useNotifications,
		useWithSnackbar,
		useRouter,
		useInvokeOverlayContext,
	} = imports
	const {
		Actions,
		Data: { script, error },
	} = useScriptContext()
	const { AlertDialog } = useNotifications()
	const router = useRouter()
	const { DataRef: InvokeOverlayDataRef, Actions: InvokeOverlayActions } =
		useInvokeOverlayContext()

	props.script = script
	props.error = error

	const invokeRequest = useWithSnackbar(
		async ({ Input }) => {
			await Actions.invokeScriptWithOverlayAsync({
				Input: { ...InvokeOverlayDataRef?.current?.script, ...Input },
				InvokeOverlayActions,
			})
		},
		{ messages: { initial: "Invoking script." } },
	)

	props.handleInvoke = async () => {
		InvokeOverlayActions.openNew({
			script: script.Configuration,
			invokeCallback: invokeRequest,
		})
	}

	props.handleAddAPIKey = useWithSnackbar(
		async () => {
			await Actions.registerNewAPIEndpointAsync()
			await Actions.refreshScriptAsync()
		},
		{ messages: { initial: "Generating API key.", success: "Done. Refreshing details." } },
	)

	const deleteScriptAsync = useWithSnackbar(
		async () => {
			await Actions.deleteScriptAsync()
		},
		{ messages: { initial: "Deleting script version.", success: "Done. Redirecting." } },
	)
	props.handleDelete = async () => {
		const title = `Delete script version ${props?.script?.Configuration?.Qualifier}?`
		const contentText = "Deleting a script version permanently removes the script's code."
		const actions = [
			{ label: "Cancel", onClick: () => AlertDialog.closeDialog() },
			{
				label: "Delete",
				onClick: async () => {
					AlertDialog.closeDialog()
					await deleteScriptAsync()
					router.push("/scripts")
				},
			},
		]
		AlertDialog.setDialog({ title, contentText, actions })
	}

	return props
}
