import { Try } from "indigozest_modules/models/client/Try"
export function refreshScriptPeriodically({ Actions: { refreshScriptAsync } }, frequencyInSeconds) {
	const interval = setInterval(() => {
		Try(() => refreshScriptAsync())
	}, frequencyInSeconds)

	return () => clearInterval(interval)
}
