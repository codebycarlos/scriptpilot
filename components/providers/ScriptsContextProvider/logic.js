export function logic(imports, props, styleDefault) {
	const { useState, useEffect, API } = imports
	const [scripts, setScripts] = useState([])
	const [error, setError] = useState(null)
	const [refreshScriptsRequested, setRefreshScriptsRequested] = useState(false)
	const refreshRate = 2 * 60 * 1000 // Minutes Seconds Milliseconds

	async function refreshScripts() {
		setRefreshScriptsRequested(true)
		try {
			setScripts(await API.Scripts.getScripts())
			setError(null)
		}
		catch(e) {
			API.consola.error(e)
			if(e.response.statusText) return setError(e.response.statusText)
			setError("Request for scripts failed.")
		} finally {
			setRefreshScriptsRequested(false)
		}
	}

	// Start interval timer to request refreshing of scripts
	useEffect(() => {
		refreshScripts()
		const interval = setInterval(() => {
			if (!refreshScriptsRequested) {
				refreshScripts()
			}
		}, refreshRate)
		return () => clearInterval(interval)
	}, [])

	return { ...props, value: { scripts, refreshScripts, error } }
}
