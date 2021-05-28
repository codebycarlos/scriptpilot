import { ClientSessionHandler } from "./_dependencies"
import { getAccessRightsLevel } from "./getAccessRightsLevel"

export async function AuthAPI(context) {
	const session = context ? await ClientSessionHandler.getSession(context) : null

	return {
		getAccessRightsLevel: (...args) => getAccessRightsLevel(session, ...args),
	}
}
