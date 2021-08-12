import { refreshScriptPeriodically } from "./refreshScriptPeriodically"
export function ScriptEffects({ Data, Actions }) {
	return {
		refreshScriptPeriodically: (...args) =>
			refreshScriptPeriodically({ Data, Actions }, ...args),
	}
}
