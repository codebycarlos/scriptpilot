export function logic(imports, props, styleDefault) {
	const { useScriptsContext, useWithSnackbar } = imports
	const { Actions } = useScriptsContext()

	props.handleRefresh = useWithSnackbar(Actions.refreshScriptsAsync, {
		messages: { initial: "Refreshing scripts." },
	})

	return props
}
