import { Try } from "indigozest_modules/models/client/Try"
export function refreshScriptsPeriodically(
	{ Actions: { refreshScriptsAsync } },
	frequencyInSeconds,
) {
	const interval = setInterval(() => {
		Try(() => refreshScriptsAsync())
	}, frequencyInSeconds)

	return () => clearInterval(interval)
}
