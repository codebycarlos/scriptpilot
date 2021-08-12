import { refreshVersionsAsync } from "./refreshVersionsAsync"
import { ScriptActions } from "./_dependencies"

export function VersionsActions({ Data, setState }) {
	if (!setState) throw Error("No state setter provided.")

	return Object.assign(ScriptActions({ Data, setState }), {
		refreshVersionsAsync: (...args) => refreshVersionsAsync({ Data, setState }, ...args),
	})
}
