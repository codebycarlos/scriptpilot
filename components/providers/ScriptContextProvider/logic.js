export function logic(imports, props, styleDefault) {
	const { useState, useEffect, API, useNotifications } = imports
	const { Log } = useNotifications()
	const [Script, setScript] = useState(props.Script)
	const [error, setError] = useState(null)
	const [refreshScriptRequested, setRefreshScriptRequested] = useState(false)

	// Start interval timer to request refreshing of Script
	useEffect(() => {
		const interval = setInterval(() => {
			if (!refreshScriptRequested) {
				refreshScript()
			}
		}, 2 * 60 * 1000)

		return () => clearInterval(interval)
	}, [])

	return { ...props, value: { Script, refreshScript, error } }
}
