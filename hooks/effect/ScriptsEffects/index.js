import { refreshScriptsPeriodically } from "./refreshScriptsPeriodically"
import { ScriptEffects } from "./_dependencies"
export function ScriptsEffects({ Data, Actions }) {
	return Object.assign(ScriptEffects, {
		refreshScriptsPeriodically: (...args) =>
			refreshScriptsPeriodically({ Data, Actions }, ...args),
	})
}
