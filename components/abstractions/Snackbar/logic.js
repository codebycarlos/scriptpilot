export function logic(imports, props, styleDefault) {
	const { useSnackbar, useEffect, SnackbarHandler } = imports
	const { enqueueSnackbar, closeSnackbar } = useSnackbar();

	useEffect(() => {
		// Enable global snackbar notifications
		SnackbarHandler.setSnackBar(enqueueSnackbar, closeSnackbar)
	}, [])

	return
}
