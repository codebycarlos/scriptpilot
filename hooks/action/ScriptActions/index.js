import { deleteScriptAsync } from "./deleteScriptAsync"
import { refreshScriptAsync } from "./refreshScriptAsync"
import { invokeScriptAsync } from "./invokeScriptAsync"
import { invokeScriptWithOverlayAsync } from "./invokeScriptWithOverlayAsync"
import { createScriptAsync } from "./createScriptAsync"
import { editScriptAsync } from "./editScriptAsync"
import { publishVersionAsync } from "./publishVersionAsync"
import { registerNewAPIEndpointAsync } from "./registerNewAPIEndpointAsync"
import { setDataAsync } from "./setDataAsync"

export function ScriptActions({ Data, setState }) {
	if (!setState) throw Error("No state setter provided.")

	return {
		deleteScriptAsync: (...args) => deleteScriptAsync({ Data, setState }, ...args),
		refreshScriptAsync: (...args) => refreshScriptAsync({ Data, setState }, ...args),
		invokeScriptAsync: (...args) => invokeScriptAsync({ Data, setState }, ...args),
		invokeScriptWithOverlayAsync: (...args) =>
			invokeScriptWithOverlayAsync({ Data, setState }, ...args),
		createScriptAsync: (...args) => createScriptAsync({ Data, setState }, ...args),
		editScriptAsync: (...args) => editScriptAsync({ Data, setState }, ...args),
		publishVersionAsync: (...args) => publishVersionAsync({ Data, setState }, ...args),
		registerNewAPIEndpointAsync: (...args) =>
			registerNewAPIEndpointAsync({ Data, setState }, ...args),
		setDataAsync: (...args) => setDataAsync({ setState }, ...args),
	}
}
