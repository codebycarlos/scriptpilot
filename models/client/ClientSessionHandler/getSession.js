import { getSessionRequest } from "./_dependencies"
export async function getSession(context) {
	try {
		return await getSessionRequest(context)
	} catch (e) {
		return null
	}
}
