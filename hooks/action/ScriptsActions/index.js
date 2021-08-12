import { refreshScriptsAsync } from "./refreshScriptsAsync"
import { ScriptActions } from "./_dependencies"

export function ScriptsActions({ Data, setState }) {
    if (!setState) throw Error("No state setter provided.")
    
	return Object.assign(ScriptActions({ Data, setState }), {
		refreshScriptsAsync: (...args) => refreshScriptsAsync({ Data, setState }, ...args),
	})
}
