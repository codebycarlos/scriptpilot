export function logic(imports, props, styleDefault) {
	const { useState, useEffect, useCallback, useScriptsContextActions, useRequestHandler } =
		imports
	const [data, setData] = useState({ scripts: props.scripts, error: null })
	const { refreshScripts } = useScriptsContextActions()
	const { request, requestWithSnackbar } = useRequestHandler()

	const refreshScriptsRequest = refreshScripts(requestWithSnackbar, [data, setData])

	// Start interval timer to request refreshing of scripts
	return {
		...props,
		value: {
			scripts: data.scripts,
			error: data.error ? data.error : null,
			refreshScriptsAsync: refreshScriptsRequest,
		},
	}
}
