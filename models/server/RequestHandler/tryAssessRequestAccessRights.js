import { ArgumentValidator, JSend } from "./_dependencies"
import { assessRequestAccessRights } from "./assessRequestAccessRights"

export async function tryAssessRequestAccessRights(res, accessRightsLevel, Session) {
	ArgumentValidator.check([accessRightsLevel])
	let requestAccessRightsAssessment

	try {
		requestAccessRightsAssessment = await assessRequestAccessRights(accessRightsLevel, Session)
	} catch (e) {
		JSend(res).error({ message: "You do not hold sufficient access rights to perform this request." }, 401)
		return null
	}

	if (requestAccessRightsAssessment.accessGranted !== true) {
		JSend(res).error({ message: requestAccessRightsAssessment.message }, 401)
		return null
	}

	return true
}
