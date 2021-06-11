import { ClientSessionHandler } from "./_dependencies"
import { getScriptsAsync } from "./getScriptsAsync"
import { deleteScriptAsync } from "./deleteScriptAsync"

export async function loadScriptsAPIAsync(context) {
	const session = context ? await ClientSessionHandler.getSessionAsync(context) : null

	return {
		ScriptsAPI: {
			getScriptsAsync: (...args) => getScriptsAsync(session, ...args),
			deleteScriptAsync: (...args) => deleteScriptAsync(session, ...args),
		},
	}
}
