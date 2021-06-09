export function logic(imports, props, styleDefault) {
	const { useState, useEffect, useCallback, useScriptsContextActions, useRequestHandler } =
		imports
	const [data, setData] = useState({ scripts: props.scripts, error: null })
	const { refreshScripts } = useScriptsContextActions()
	const { request, requestWithSnackbar } = useRequestHandler()

	const refreshScriptsRequest = useCallback(
		async () => await refreshScripts(requestWithSnackbar, [data, setData]),
		[requestWithSnackbar, data, setData],
	)

	// Start interval timer to request refreshing of scripts
	useEffect(() => {
		const interval = setInterval(async () => {

		}, 0.1 * 60 * 1000)

		return () => clearInterval(interval)
	}, [refreshScriptsRequest])

	return {
		...props,
		value: {
			scripts: data.scripts,
			error: data.error ? data.error : null,
			refreshScripts: refreshScriptsRequest,
		},
	}
}
