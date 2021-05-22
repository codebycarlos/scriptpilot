export function logic(imports, props, styleDefault) {
	const { useState, useEffect, CustomAxios } = imports
	const [scripts, setScripts] = useState([])
	const [refreshScriptsRequested, setRefreshScriptsRequested] = useState(false)
	const refreshRate = 2 * 60 * 1000 // Minutes Seconds Milliseconds

	async function refreshScripts() {
		setRefreshScriptsRequested(true)
		const axios = await CustomAxios.load()
		try {
			console.log(await axios.get("api/scripts"))
			setScripts((await axios.get("api/scripts")).data.data.scripts)
		} catch (e) {
			console.log(e)
			console.log("Request for scripts failed")
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

	return { ...props, value: scripts }
}
