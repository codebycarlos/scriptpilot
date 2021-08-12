import { refreshVersionsPeriodically } from "./refreshVersionsPeriodically"
import { ScriptEffects } from "./_dependencies"
export function VersionsEffects({ Data, Actions }) {
	return Object.assign(ScriptEffects, {
		refreshVersionsPeriodically: (...args) =>
			refreshVersionsPeriodically({ Data, Actions }, ...args),
	})
}
