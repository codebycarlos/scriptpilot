import { getScriptAsync } from "./getScriptAsync"
import { getScriptsAsync } from "./getScriptsAsync"
import { deleteScriptAsync } from "./deleteScriptAsync"
import { invokeScriptAsync } from "./invokeScriptAsync"
import { createScriptAsync } from "./createScriptAsync"
import { editScriptAsync } from "./editScriptAsync"
import { publishVersionAsync } from "./publishVersionAsync"
import { registerNewAPIEndpointAsync } from "./registerNewAPIEndpointAsync"

export async function loadScriptsAPIAsync() {
	return {
		ScriptsAPI: {
			getScriptAsync,
			getScriptsAsync,
			deleteScriptAsync,
			invokeScriptAsync,
			createScriptAsync,
			editScriptAsync,
			publishVersionAsync,
			registerNewAPIEndpointAsync,
		},
	}
}
