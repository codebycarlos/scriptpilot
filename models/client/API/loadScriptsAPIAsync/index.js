import { ClientSessionHandler } from "./_dependencies"
import { getScriptsAsync } from "./getScriptsAsync"
import { getScriptAsync } from "./getScriptAsync"
import { deleteScriptAsync } from "./deleteScriptAsync"
import { invokeScriptAsync } from "./invokeScriptAsync"
import { createScriptAsync } from "./createScriptAsync"
import { editScriptAsync } from "./editScriptAsync"
import { publishVersionAsync } from "./publishVersionAsync"
import { registerNewAPIEndpointAsync } from "./registerNewAPIEndpointAsync"

export async function loadScriptsAPIAsync(context) {
	const session = context ? await ClientSessionHandler.getSessionAsync(context) : null

	return {
		ScriptsAPI: {
			getScriptsAsync: (...args) => getScriptsAsync(session, ...args),
			getScriptAsync: (...args) => getScriptAsync(session, ...args),
			deleteScriptAsync: (...args) => deleteScriptAsync(session, ...args),
			invokeScriptAsync: (...args) => invokeScriptAsync(session, ...args),
			createScriptAsync: (...args) => createScriptAsync(session, ...args),
			editScriptAsync: (...args) => editScriptAsync(session, ...args),
			publishVersionAsync: (...args) => publishVersionAsync(session, ...args),
			registerNewAPIEndpointAsync: (...args) => registerNewAPIEndpointAsync(session, ...args),
		},
	}
}
