import { getScriptAsync } from "./getScriptAsync"
import { getScriptsAsync } from "./getScriptsAsync"
import { deleteScriptAsync } from "./deleteScriptAsync"

export async function loadScriptsAPIAsync() {
	return {
		ScriptsAPI: {
			getScriptAsync,
			getScriptsAsync,
			deleteScriptAsync,
		},
	}
}
