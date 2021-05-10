export function logic(imports, props, styleDefault) {
	const { useState, useEffect, ScriptsContext, Lambda } = imports;
	const [scripts, setScripts] = useState([]);
	const [refreshScriptsRequested, setRefreshScriptsRequested] = useState(false);
	const refreshRate = 2 * 60 * 1000; // Minutes Seconds Milliseconds

	async function refreshScripts() {
		setRefreshScriptsRequested(true);
		try {
			setScripts(await Lambda.listAllFunctions());
		} catch (e) {
			console.log("Request for scripts failed");
		} finally {
			setRefreshScriptsRequested(false);
		}
	}

	// Start interval timer to request refreshing of scripts
	useEffect(() => {
		refreshScripts();
		const interval = setInterval(() => {
			if (!refreshScriptsRequested) {
				refreshScripts();
			}
		}, refreshRate);
		return () => clearInterval(interval);
	}, []);

	return { ...props, ScriptsContext, value: scripts };
}
