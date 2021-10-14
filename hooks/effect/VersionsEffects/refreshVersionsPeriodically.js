import { Try } from "indigozest_modules/models/client/Try"
export function refreshVersionsPeriodically(
	{ Actions: { refreshVersionsAsync } },
	FunctionName,
	frequencyInSeconds,
) {
	const interval = setInterval(() => {
		Try(() => refreshVersionsAsync({ Input: { FunctionName } }))
	}, frequencyInSeconds)

	return () => clearInterval(interval)
}
