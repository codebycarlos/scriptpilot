import { ArgumentValidator, JSend, consola } from "./_dependencies"
import { assessRequestAccessRights } from "./assessRequestAccessRights"

export async function tryAssessRequestAccessRights(res, accessRightsLevel, session) {
	ArgumentValidator.check([accessRightsLevel])
	let requestAccessRightsAssessment

	try {
		requestAccessRightsAssessment = await assessRequestAccessRights(accessRightsLevel, session)
	} catch (e) {
		consola.error(e)
		JSend(res).error({ message: "You do not hold sufficient access rights to perform this request." }, 401)
		return false
	}

	if (requestAccessRightsAssessment.accessGranted !== true) {
		JSend(res).error({ message: requestAccessRightsAssessment.message }, 401)
		return false
	}

	return true
}
