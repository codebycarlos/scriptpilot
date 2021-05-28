export function logic(imports, props, styleDefault) {
	const { useScriptsContext, useSnackbarContext, Snackbar, consola, useState } = imports
	const snackbarContext = useSnackbarContext()
	const { refreshScripts } = useScriptsContext()
	const [refreshRequested, setRefreshRequested] = useState(false)

	props.handleRefresh = async () => {
		if (refreshRequested) return
		setRefreshRequested(true)
		Snackbar(snackbarContext).closeSnackbars()
		Snackbar(snackbarContext).initial("Refreshing scripts.")
		try {
			await refreshScripts()
			Snackbar(snackbarContext).closeSnackbars()
			Snackbar(snackbarContext).success("Done.")
		} catch (e) {
			consola.error(e)
			Snackbar(snackbarContext).error(e)
		} finally {
			setRefreshRequested(false)
		}
	}

	return props
}
